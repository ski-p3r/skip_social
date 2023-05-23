from django.urls import path
from . import views

urlpatterns = [
    path('social_media/', views.social, name='social'),
    path('address/', views.address, name='address'),
]
