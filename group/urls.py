from django.urls import path
from . import views
#
urlpatterns = [
    path('create_group_post/<slug:username>/', views.create_group_post, name='create_group_post'),
    path('leave_group/<slug:username>/', views.leave_group, name='leave_group'),
    path('join_group/<slug:username>/', views.join_group, name='join_group'),
    path('', views.group, name='group'),
    path('create_group/', views.create_group, name='create_group'),
    path('group_detail/<slug:username>/', views.group_detail, name='group_detail'),
]