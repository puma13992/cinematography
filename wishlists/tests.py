from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from movies.models import Movie
from .models import Wishlist


class TestDataSetupMixin:
    """
    Set up for testing
    """

    @classmethod
    def setUp(self):
        self.user = User.objects.create(
            username='testuser', password='testpassword')
        self.movie = Movie.objects.create(
            owner=self.user,
            title='Test Movie',
            director='Test Director',
            release='2023-01-01',
            content='This is a test movie',
            category='Drama'
        )
        self.wishlist = Wishlist.objects.create(
            owner=self.user, movie=self.movie)


class WishlistModelTestCase(TestDataSetupMixin, TestCase):
    """
    Tests for wishlist model
    """

    def test_wishlist_creation(self):
        self.assertEqual(self.wishlist.owner, self.user)
        self.assertEqual(self.wishlist.movie, self.movie)
        self.assertIsNotNone(self.wishlist.created_at)

    def test_wishlist_str_method(self):
        expected_str = f'{self.user} {self.movie}'
        self.assertEqual(str(self.wishlist), expected_str)

    def test_wishlist_unique_together(self):
        """
        Try to create a duplicate wishlist entry,
        which should fail
        """
        duplicate_wishlist = Wishlist(owner=self.user, movie=self.movie)
        with self.assertRaises(Exception):
            duplicate_wishlist.save()


class WishlistAPITestCase(TestDataSetupMixin, APITestCase):
    """
    Tests for wishlist list view
    """

    def test_wishlist_list_view(self):
        response = self.client.get('/wishlist/')
        self.assertEqual(response.status_code, 200)

    def test_wishlist_detail_view(self):
        response = self.client.get('/wishlist/{}/'.format(self.wishlist.id))
        self.assertEqual(response.status_code, 200)
