from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Movie
from .serializers import MovieSerializer


# Set up for testing
class TestDataSetupMixin:

    @classmethod
    def setUpTestData(cls):
        test_user = User.objects.create_user(username='testuser', password='testpassword')
        test_movie = Movie.objects.create(
            owner=test_user,
            title='Test Movie',
            director='Test Director',
            release='2023-01-01',
            content='This is a test movie',
            category='Drama'
        )


# Tests for movie model
class MovieModelTest(TestDataSetupMixin, TestCase):

    def test_owner_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('owner').verbose_name
        self.assertEqual(field_label, 'owner')

    def test_created_at_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('created_at').verbose_name
        self.assertEqual(field_label, 'created at')

    def test_updated_at_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('updated_at').verbose_name
        self.assertEqual(field_label, 'updated at')

    def test_title_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('title').verbose_name
        self.assertEqual(field_label, 'title')

    def test_release_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('release').verbose_name
        self.assertEqual(field_label, 'release')

    def test_director_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('director').verbose_name
        self.assertEqual(field_label, 'director')

    def test_content_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('content').verbose_name
        self.assertEqual(field_label, 'content')

    def test_category_label(self):
        movie = Movie.objects.get(id=1)
        field_label = movie._meta.get_field('category').verbose_name
        self.assertEqual(field_label, 'category')


# Tests for movie list view
class MovieListViewTests(TestDataSetupMixin, APITestCase):

    def test_can_list_movies(self):
        response = self.client.get('/movies/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_in_user_can_create_movie(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.post('/movies/', {
            'title': 'New Movie',
            'director': 'New Director',
            'release': '2023-02-01',
            'content': 'This is a new movie',
            'category': 'Drama'
        })
        count = Movie.objects.count()
        self.assertEqual(count, 2)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_post(self):
        response = self.client.post('/movies/', {
            'title': 'New Movie',
            'director': 'New Director',
            'release': '2023-02-01',
            'content': 'This is a new movie',
            'category': 'Drama'
        })
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


# Tests for movie detail view
class MovieDetailViewTests(TestDataSetupMixin, APITestCase):

    def test_can_retrieve_movie_using_valid_id(self):
        response = self.client.get('/movies/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
 
    def test_cant_retrieve_movie_using_invalid_id(self):
        response = self.client.get('/movies/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_cant_update_someone_elses_movie(self):
        self.client.login(username='testuser2', password='testpassword2')
        response = self.client.put(
            '/movies/1/', {'content': 'an edited content'}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_user_can_delete_their_own_movie(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.delete('/movies/1/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_user_cant_delete_someone_elses_movie(self):
        self.client.login(username='testuser2', password='testpassword2')
        response = self.client.delete('/movies/1/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_logged_out_user_cant_update_movie(self):
        movie = Movie.objects.get(id=1)
        response = self.client.put(
            '/movies/1/', {'content': 'an edited content'}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_logged_out_user_cant_delete_movie(self):
        movie = Movie.objects.get(id=1)
        response = self.client.delete('/movies/1/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_logged_in_user_can_update_own_movie(self):
        self.client.login(username='testuser', password='testpassword')
        movie = Movie.objects.get(pk=1)
        updated_data = {'title': 'new title'}
        serializer = MovieSerializer(instance=movie, data=updated_data, partial=True)
    
        if serializer.is_valid():
            response = self.client.patch(f'/movies/1/', data=updated_data)
            self.assertEqual(response.status_code, status.HTTP_200_OK)
            movie.refresh_from_db()
            self.assertEqual(movie.title, 'new title')
        else:
            self.fail(serializer.errors)