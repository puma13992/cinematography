from rest_framework import generics, permissions
from backend_cinematography.permissions import IsOwnerOrReadOnly
from wishlists.models import Wishlist
from wishlists.serializers import WishlistSerializer


class WishlistList(generics.ListCreateAPIView):
    """
    List all wishlist items or create a wishlist if logged in;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = WishlistSerializer
    queryset = Wishlist.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class WishlistDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a wishlist item or delete it by id if you own it;
    Code from CI walkthrough Django Rest Framework; slightly modified
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = WishlistSerializer
    queryset = Wishlist.objects.all()
