from rest_framework import generics, permissions
from backend_cinematography.permissions import IsOwnerOrReadOnly
from .models import Movie
from .serializers import MovieSerializer


# Code from CI walkthrough Django Rest Framework; slightly modified
class MovieList(generics.ListCreateAPIView):
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Movie.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Code from CI walkthrough Django Rest Framework; slightly modified
class MovieDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MovieSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Movie.objects.all()
