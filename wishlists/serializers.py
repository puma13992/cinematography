from django.db import IntegrityError
from rest_framework import serializers
from wishlists.models import Wishlist


class WishlistSerializer(serializers.ModelSerializer):
    """
    Serializer for the Wishlist model;
    The create method handles the unique constraint on 'owner' and 'movie';
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Wishlist
        fields = ['id', 'created_at', 'owner', 'movie']

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({
                'detail': 'possible duplicate'
            })
