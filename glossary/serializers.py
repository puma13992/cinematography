from rest_framework import serializers
from .models import Glossary


class GlossarySerializer(serializers.ModelSerializer):
    """
    Serializer for the Glossary model
    """

    created_by = serializers.ReadOnlyField(source="created_by.username")
    profile_id = serializers.ReadOnlyField(source="created_by.profile.id")
    profile_image = serializers.ReadOnlyField(
        source="created_by.profile.image.url")
    updated_by = serializers.ReadOnlyField(source="updated_by.username")

    def validate_title(self, value):
        """
        Check whether an entry with the converted title already exists
        """
        title = value.upper()

        if self.instance:
            existing_entry = (
                Glossary.objects.filter(title=title)
                .exclude(id=self.instance.id)
                .first()
            )
        else:
            existing_entry = Glossary.objects.filter(title=title).first()

        if existing_entry:
            raise serializers.ValidationError(
                "An entry with this title already exists."
            )

        return value

    class Meta:
        model = Glossary
        fields = [
            "id",
            "created_by",
            "updated_by",
            "created_at",
            "updated_at",
            "title",
            "content",
            "profile_id",
            "profile_image",
        ]
