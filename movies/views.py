from django.db.models import Count
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from backend_cinematography.permissions import IsOwnerOrReadOnly
from .models import Movie
from .serializers import MovieSerializer


# Code from CI walkthrough Django Rest Framework; slightly modified
class MovieList(generics.ListCreateAPIView):
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
        'created_at',
        'title',
        'release',
        'director',
        'categories__name',
        'content',
        'wishlist',
    ]
    search_fields = [
        'owner__username',
        'created_at',
        'title',
        'release',
        'director',
        'categories__name',
        'content',
        'wishlist',
    ]
    ordering_fields = [
        'wishlist_count',
        'comments_count',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Code from CI walkthrough Django Rest Framework; slightly modified
class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MovieSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Movie.objects.annotate(
        wishlist_count=Count('wishlist', distinct=True),
        comments_count=Count('comment', distinct=True)
    ).order_by('-created_at')
