from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from movies.models import Movie
from .models import Comment


class TestDataSetupMixin:
    """
    Set up for testing
    """

    @classmethod
    def setUpTestData(cls):
        test_user = User.objects.create_user(
            username='testuser', password='testpassword')
        test_movie = Movie.objects.create(
            owner=test_user,
            title='Test Movie',
            director='Test Director',
            release='2023-01-01',
            content='This is a test movie',
            category='Drama'
        )

        Comment.objects.create(
            owner=test_user,
            movie=test_movie,
            content='This is a test comment'
        )


class CommentModelTest(TestDataSetupMixin, TestCase):
    """
    Tests for comments model
    """

    def test_content_label(self):
        comment = Comment.objects.get(id=1)
        field_label = comment._meta.get_field('content').verbose_name
        self.assertEqual(field_label, 'content')

    def test_created_at_label(self):
        comment = Comment.objects.get(id=1)
        field_label = comment._meta.get_field('created_at').verbose_name
        self.assertEqual(field_label, 'created at')

    def test_updated_at_label(self):
        comment = Comment.objects.get(id=1)
        field_label = comment._meta.get_field('updated_at').verbose_name
        self.assertEqual(field_label, 'updated at')

    def test_owner_label(self):
        comment = Comment.objects.get(id=1)
        field_label = comment._meta.get_field('owner').verbose_name
        self.assertEqual(field_label, 'owner')

    def test_movie_label(self):
        comment = Comment.objects.get(id=1)
        field_label = comment._meta.get_field('movie').verbose_name
        self.assertEqual(field_label, 'movie')

    def test_ordering(self):
        expected_ordering = ['-created_at']
        ordering = Comment._meta.ordering
        self.assertEqual(ordering, expected_ordering)

    def test_string_representation(self):
        comment = Comment.objects.get(id=1)
        self.assertEqual(str(comment), comment.content)


class CommentListViewTests(TestDataSetupMixin, APITestCase):
    """
    Tests for comments list view
    """

    def test_can_list_comments(self):
        response = self.client.get('/comments/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_in_user_can_post_comment(self):
        self.client.login(username='testuser', password='testpassword')
        test_movie = Movie.objects.get(id=1)
        current_user = User.objects.get(username='testuser')
        response = self.client.post(
            '/comments/', {
                'owner': current_user, 'movie': 1, 'content': 'comment'
            }
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_logged_out_user_cant_create_comment(self):
        test_movie = Movie.objects.get(id=1)
        response = self.client.post(
            '/comments/', {'movie': 1, 'content': 'comment'}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class CommentDetailViewTests(TestDataSetupMixin, APITestCase):
    """
    Tests for comments detail view
    """

    def test_can_retrieve_comment_using_valid_id(self):
        response = self.client.get('/comments/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_comment_using_invalid_id(self):
        response = self.client.get('/comments/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_logged_in_user_can_update_own_comment(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.put(
            '/comments/1/', {'content': 'test'}
        )
        comment = Comment.objects.filter(pk=1).first()
        self.assertEqual(comment.content, 'test')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_cant_update_someone_elses_comment(self):
        self.client.login(username='testuser2', password='testpassword2')
        response = self.client.put(
            '/comments/1/', {'content': 'an edited content'}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_user_can_delete_their_own_comment(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.delete('/comments/1/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_user_cant_delete_someone_elses_comment(self):
        self.client.login(username='testuser2', password='testpassword2')
        response = self.client.delete('/comments/1/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_logged_out_user_cant_update_comment(self):
        comment = Comment.objects.get(id=1)
        response = self.client.put(
            '/comments/1/', {'content': 'an edited content'}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_logged_out_user_cant_delete_comment(self):
        comment = Comment.objects.get(id=1)
        response = self.client.delete('/comments/1/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
