from django.db import models
from django.contrib.auth.models import User


class Glossary(models.Model):
    """
    Glossary model, related to users;
    every logged in user can edit, but only
    the created_by user can delete
    a glossary item
    """

    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='created_glossary_term'
        )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='updated_glossary_term'
        )
    title = models.CharField(max_length=50, blank=False, unique=True)
    content = models.TextField(blank=False)

    class Meta:
        ordering = ['-updated_at']

    def save(self, *args, **kwargs):
        """
        Make the title uppercase before saving
        """
        self.title = self.title.upper()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.title}'
