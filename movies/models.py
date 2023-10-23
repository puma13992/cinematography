from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager


class Movie(models.Model):
    '''
    Movie model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    '''
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255, blank=False)
    release = models.CharField(max_length=50)
    director = models.CharField(max_length=75)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='cinematography/',
        default='../default-user_fqha9k',
        blank=True
    )
    categories = TaggableManager(
        verbose_name="Categories",
        help_text="A comma-separated list of categories.",
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.title}'
