from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Movie(models.Model):
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
    categories = models.ManyToManyField(Category)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.title}'
