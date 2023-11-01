from rest_framework import generics, permissions
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .models import Glossary
from .serializers import GlossarySerializer
from backend_cinematography.permissions import IsOwnerGlossary


class GlossaryList(generics.ListCreateAPIView):
    queryset = Glossary.objects.all()
    serializer_class = GlossarySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

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
