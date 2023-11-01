from django.db import models
from django.contrib.auth.models import User
from django.db.models import UniqueConstraint


class Glossary(models.Model):
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
        constraints = [
            UniqueConstraint(
                name="unique_glossary_item",
                fields=["title"],
                condition=models.Q(title__isnull=False),
            )
        ]
        ordering = ['-updated_at']

    def __str__(self):
        return f'{self.title}'
