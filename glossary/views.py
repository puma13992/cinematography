from rest_framework import generics, permissions, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from backend_cinematography.permissions import IsOwnerGlossary
from .models import Glossary
from .serializers import GlossarySerializer


class GlossaryList(generics.ListCreateAPIView):
    queryset = Glossary.objects.all()
    serializer_class = GlossarySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    search_fields = [
        'title',
    ]
    ordering_fields = [
        'title',
    ]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, updated_by=self.request.user)


class GlossaryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Glossary.objects.all()
    serializer_class = GlossarySerializer

    def perform_update(self, serializer):
        # Set the updated_by field to the current authenticated user
        serializer.validated_data['updated_by'] = self.request.user
        serializer.save()

    def get_permissions(self):
        if self.request.method == 'PUT':
            # Only users with IsAuthenticated authorisation have access to the edit form
            return [IsAuthenticated()]        

        elif self.request.method == 'DELETE':
            # Only users with IsOwner authorisation can delete
            return [IsOwnerGlossary()]
      
        else:
            return [IsAuthenticatedOrReadOnly()]
