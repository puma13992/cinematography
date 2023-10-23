from rest_framework import serializers
from .models import Glossary


class GlossarySerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')
    updated_by = serializers.ReadOnlyField(source='updated_by.username')

    class Meta:
        model = Glossary
        fields = [
            'id', 'created_by', 'updated_by', 'created_at', 'updated_at',
            'title', 'content'
        ]
