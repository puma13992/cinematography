from rest_framework import generics, permissions, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly, \
    IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from backend_cinematography.permissions import IsOwnerGlossary
from .models import Glossary
from .serializers import GlossarySerializer


class GlossaryList(generics.ListCreateAPIView):
    """
    Glossary list view with filter and search
    functionality
    """
    queryset = Glossary.objects.all()
    serializer_class = GlossarySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'created_by__profile',
    ]
    search_fields = [
        'title',
    ]
    ordering_fields = [
        'title',
    ]

    def perform_create(self, serializer):
        serializer.save(
            created_by=self.request.user, updated_by=self.request.user)


class GlossaryDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Glossary detail view with functionality that everyone
    can read the glossary items, logged in users can edit it,
    but only 'created_by' users (owners) can delete their items
    """

    queryset = Glossary.objects.all()
    serializer_class = GlossarySerializer

    def perform_update(self, serializer):
        """
        Set the updated_by field to the current authenticated user
        """
        serializer.validated_data['updated_by'] = self.request.user
        serializer.save()

    def get_permissions(self):
        """
         Only users with IsAuthenticated authorisation
         have access to the edit form;
         Only users with IsOwner authorisation can delete
        """
        if self.request.method == 'PUT':
            return [IsAuthenticated()]

        elif self.request.method == 'DELETE':
            return [IsOwnerGlossary()]

        else:
            return [IsAuthenticatedOrReadOnly()]
