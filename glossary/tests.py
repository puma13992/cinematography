from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Glossary
from .serializers import GlossarySerializer


# Test for glossary model
class GlossaryModelTest(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')

    def test_glossary_creation(self):
        glossary = Glossary.objects.create(
            created_by=self.user,
            updated_by=self.user,
            title='Test Title',
            content='Test Content'
        )
        self.assertEqual(glossary.title, 'TEST TITLE')
        self.assertEqual(str(glossary), 'TEST TITLE')

    def test_unique_title_constraint(self):
        glossary1 = Glossary.objects.create(
            created_by=self.user,
            updated_by=self.user,
            title='Unique Title',
            content='Content 1'
        )
        # Trying to create a glossary object with the same title should trigger an error
        with self.assertRaises(Exception):
            glossary2 = Glossary.objects.create(
                created_by=self.user,
                updated_by=self.user,
                title='Unique Title',
                content='Content 2'
            )

    def test_ordering(self):
        glossary1 = Glossary.objects.create(
            created_by=self.user,
            updated_by=self.user,
            title='Title 1',
            content='Content 1'
        )
        glossary2 = Glossary.objects.create(
            created_by=self.user,
            updated_by=self.user,
            title='Title 2',
            content='Content 2'
        )
        # Check whether the glossary objects are sorted by 'updated_at' in descending order
        glossaries = Glossary.objects.all()
        self.assertEqual(list(glossaries), [glossary2, glossary1])


# Tests for glossary list view
class GlossaryListViewTest(APITestCase):

    @classmethod
    def setUpTestData(cls):
        test_user = User.objects.create_user(username='testuser', password='testpassword')

    def test_can_list_glossary(self):
        response = self.client.get('/glossary/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_in_user_can_create_glossary_item(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.post('/glossary/', {
            'title': 'New Item',
            'content': 'This is a new glossary item',
        })
        count = Glossary.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_not_logged_in_cant_create_glossary_item(self):
        response = self.client.post('/glossary/', {
            'title': 'New Item 2',
            'content': 'This is a new glossary item 2',
        })
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


# Tests for glossary detail view
class GlossaryDetailViewTests(APITestCase):

    @classmethod
    def setUpTestData(cls):
        test_user = User.objects.create_user(username='testuser', password='testpassword')
        test_user2 = User.objects.create_user(username='testuser2', password='testpassword2')
        Glossary.objects.create(
            created_by=test_user,
            updated_by=test_user,
            title='Sample Title',
            content='Sample Content'
        )

    def test_can_retrieve_glossary_item_using_valid_id(self):
        response = self.client.get('/glossary/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_glossary_item_using_invalid_id(self):
        response = self.client.get('/glossary/999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_can_delete_their_own_glossary_item(self):
        self.client.login(username='testuser', password='testpassword')
        response = self.client.delete('/glossary/1/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_user_cant_delete_someone_elses_glossary_item(self):
        self.client.login(username='testuser2', password='testpassword2')
        response = self.client.delete('/glossary/1/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_logged_out_user_cant_update_glossary_item(self):
        response = self.client.put('/glossary/1/', {'content': 'an edited content'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_logged_out_user_cant_delete_glossary_item(self):
        response = self.client.delete('/glossary/1/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
