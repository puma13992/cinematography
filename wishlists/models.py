from django.db import models
from django.contrib.auth.models import User
from movies.models import Movie


class Wishlist(models.Model):
    """
    Wishlist model, related to 'owner' and 'movie';
    'owner' is a User instance and 'movie' is a Movie instance;
    'unique_together' makes sure a user can't add the same movie twice
    to a wishlist;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(
        Movie, related_name='wishlist', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'movie']

    def __str__(self):
        return f'{self.owner} {self.movie}'
