from django.urls import path
from . import views

urlpatterns = [
    path('', views.message, name='message'),
    path('create_inbox/<str:usern>/', views.create_inbox, name='create_inbox'),
    path('message_inbox/<str:usern>/', views.message_inbox, name='message_inbox'),
]
