from rest_framework import serializers
from wishlists.models import Wishlist
from .models import Movie


class MovieSerializer(serializers.ModelSerializer):
    """
    Serializer for the movie model;
    Code basic from CI walkthrough Django Rest Framework
    """

    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    wishlist_id = serializers.SerializerMethodField()
    wishlist_count = serializers.ReadOnlyField()
    comments_count = serializers.ReadOnlyField()

    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_wishlist_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            wishlist = Wishlist.objects.filter(
                owner=user, movie=obj
            ).first()
            return wishlist.id if wishlist else None
        return None

    class Meta:
        model = Movie
        fields = [
            'id', 'owner', 'is_owner', 'profile_id',
            'profile_image', 'created_at', 'updated_at',
            'title', 'release', 'director', 'content',
            'image', 'category', 'wishlist_id', 'wishlist_count',
            'comments_count',
            ]
