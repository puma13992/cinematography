from rest_framework import serializers
from wishlists.models import Wishlist


# Code from CI walkthrough Django Rest Framework; slightly modified
class WishlistSerializer(serializers.ModelSerializer):
    """
    Serializer for the Wishlist model
    The create method handles the unique constraint on 'owner' and 'movie'
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Wishlist
        fields = ['id', 'created_at', 'owner', 'movie']
