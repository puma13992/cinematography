from django.db.models import Count
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from backend_cinematography.permissions import IsOwnerOrReadOnly
from .models import Movie
from .serializers import MovieSerializer


class MovieList(generics.ListCreateAPIView):
    """
    Movie list view with filter and search functionality;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Movie.objects.annotate(
        wishlist_count=Count('wishlist', distinct=True),
        comments_count=Count('comment', distinct=True)
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields = [
        'wishlist__owner__profile',
        'owner__username',
        'owner__profile',
        'category',
    ]
    search_fields = [
        'owner__username',
        'title',
        'release',
        'director',
        'content',
        'category',
    ]
    ordering_fields = [
        'wishlist_count',
        'comments_count',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Movie detail view with filter and search functionality;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    serializer_class = MovieSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Movie.objects.annotate(
        wishlist_count=Count('wishlist', distinct=True),
        comments_count=Count('comment', distinct=True)
    ).order_by('-created_at')
