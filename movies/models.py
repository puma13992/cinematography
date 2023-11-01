from django.db import models
from django.contrib.auth.models import User


class Movie(models.Model):

    genre_category = (
        ("Drama", "Drama"),
        ("Documentation", "Documentation"),
        ("Biography", "Biography"),
        ("Animation", "Animation"),
        ("Experimental Cinema", "Experimental Cinema"),
    )

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255, blank=False)
    release = models.CharField(max_length=50)
    director = models.CharField(max_length=75)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='pp5test/',
        default='../static/pp5test/default_user_fqnvic',
        blank=True
    )
    category = models.CharField(
        max_length=32, choices=genre_category)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.title}'
