from rest_framework import permissions


# Code from CI walkthrough Django Rest Framework
class IsOwnerOrReadOnly(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.method in permissions.SAFE_METHODS:
      return True
    return obj.owner == request.user


# Allow only created_by users to delete their glossary items
class IsOwnerGlossary(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method == 'DELETE':
            return obj.created_by == request.user
        return False
