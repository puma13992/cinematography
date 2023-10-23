from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Movie
from .serializers import MovieSerializer


# Code from CI walkthrough Django Rest Framework; slightly modified
class MovieList(APIView):
    serializer_class = MovieSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(
            movies, many=True, context={'request': request}
        )
        return Response(serializer.data)

    def post(self, request):
        serializer = MovieSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )
