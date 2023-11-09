from django.db.models import Count
from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from backend_cinematography.permissions import IsOwnerOrReadOnly
from .models import Profile
from .serializers import ProfileSerializer


class ProfileList(generics.ListAPIView):
    """
    List all profiles;
    No create view as profile creation is handled by django signals;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    queryset = Profile.objects.annotate(
        movies_count=Count('owner__movie', distinct=True),
        glossary_count=Count('owner__created_glossary_term', distinct=True),
    ).order_by('-created_at')
    serializer_class = ProfileSerializer
    filter_backends = [
        filters.OrderingFilter,
        DjangoFilterBackend,
    ]
    ordering_fields = [
        'movies_count',
        'glossary_count',
    ]


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update a profile if you're the owner;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.annotate(
        movies_count=Count('owner__movie', distinct=True),
        glossary_count=Count('owner__created_glossary_term', distinct=True),
    ).order_by('-created_at')
    serializer_class = ProfileSerializer
