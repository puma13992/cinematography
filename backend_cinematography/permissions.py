from rest_framework import permissions


# Code from CI walkthrough Django Rest Framework
class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Permission to read only or make
    requests for owner only
    """

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user


class IsOwnerGlossary(permissions.BasePermission):
    """
    Allow only created_by users
    to delete their glossary items
    """

    def has_object_permission(self, request, view, obj):
        if request.method == 'DELETE':
            return obj.created_by == request.user
        return False
