from django.urls import path
from . import views

urlpatterns = [
    path('', views.friend, name='friend'),
    path('confirmed_friend/', views.confirmed_friend, name='confirmed_friend'),
    path('add/<str:email>/', views.add_friend, name='add_friend'),
    path('remove_friend_request/<str:email>/', views.remove_friend_request, name='remove_friend_request'),
    path('confirm_friend/<str:email>/', views.confirm_friend, name='confirm_friend'),
    path('remove/<str:email>/', views.remove_friend, name='remove_friend'),
]
