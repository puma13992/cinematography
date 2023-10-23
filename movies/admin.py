from django.contrib import admin
from .models import Movie


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ['title', 'release', 'director', 'get_categories']

    def get_categories(self, obj):
        return u", ".join(o.name for o in obj.categories.all())

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('categories')
