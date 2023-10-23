from django.db import models
from django.contrib.auth.models import User


class Glossary(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_glossary_term')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_glossary_term')
    title = models.CharField(max_length=255, blank=False)
    content = models.TextField(blank=False)

    class Meta:
        ordering = ['-updated_at']

    def __str__(self):
        return f'{self.title}'
