from rest_framework import generics, permissions
from django_filters.rest_framework import DjangoFilterBackend
from backend_cinematography.permissions import IsOwnerOrReadOnly
from .models import Comment
from .serializers import CommentSerializer, CommentDetailSerializer


class CommentList(generics.ListCreateAPIView):
    """
    List comments or create a comment if logged in;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['movie']

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a comment, or update or delete it by id if you own it;
    Code from CI walkthrough Django Rest Framework
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommentDetailSerializer
    queryset = Comment.objects.all()
