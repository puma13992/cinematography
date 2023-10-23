from rest_framework import status, permissions
from backend_cinematography.permissions import IsOwnerOrReadOnly
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


# Code from CI walkthrough Django Rest Framework; slightly modified
class MovieDetail(APIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = MovieSerializer

    def get_object(self, pk):
        try:
            movie = Movie.objects.get(pk=pk)
            self.check_object_permissions(self.request, movie)
            return movie
        except Movie.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        movie = self.get_object(pk)
        serializer = MovieSerializer(
            movie, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        movie = self.get_object(pk)
        serializer = MovieSerializer(
            movie, data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        movie = self.get_object(pk)
        movie.delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )
