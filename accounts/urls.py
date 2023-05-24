from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('activate/<uidb64>/<token>/', views.activate, name="activate"),
    path('auth/<str:username>/', views.author, name='authors_post'),
    path('auth_man/<str:username>/', views.authorman, name='authors_man_post'),
]
