from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Profile


# Set up for testing
class TestDataSetupMixin:

    @classmethod
    def setUpTestData(cls):
        test_user = User.objects.create_user(username='testuser', password='testpassword')
        test_user2 = User.objects.create_user(username='testuser2', password='testpassword2')


# Tests for profile list view
class ProfileListViewTests(TestDataSetupMixin, APITestCase):
        
    def test_profile_automatically_created_on_user_creation(self):
        response = self.client.get('/profiles/')
        count = Profile.objects.count()
        self.assertEqual(count, 2)
    
    def test_can_list_profile(self):
        response = self.client.get('/profiles/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


# Tests for profile detail view
class ProfileDetailViewTests(TestDataSetupMixin, APITestCase):

    def test_cant_retrieve_profile_using_invalid_id(self):
        response = self.client.get('/profiles/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_can_retrieve_profile_using_valid_id(self):
        response = self.client.get('/profiles/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_in_user_can_update_own_profile(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.put(
            '/profiles/1/', {'name': 'testuser'}
        )
        profile = Profile.objects.filter(pk=1).first()
        self.assertEqual(profile.name, 'testuser')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_logged_out_user_cant_update_own_profile(self):
        profile = Profile.objects.get(id=1)
        response = self.client.put(
            '/profiles/1/', {'content': 'an edited content'}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_user_cant_update_someone_elses_profile(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.put(
            '/profiles/2/', {'content': 'I want to edit someone elses content'}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
