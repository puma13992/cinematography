from django.urls import path
from glossary import views


urlpatterns = [
    path('glossary/', views.GlossaryList.as_view()),
    path('glossary/<int:pk>/', views.GlossaryDetail.as_view())
]
