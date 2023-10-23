from django.db import models
from django.contrib.auth.models import User
from movies.models import Movie


# Code from CI walkthrough Django Rest Framework; slightly modified
class Comment(models.Model):
    """
    Comment model, related to User and Movie
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content
