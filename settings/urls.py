from django.urls import path
from . import views

urlpatterns = [
    path('', views.setting, name='settings'),
    path('edit/', views.edit_acc, name='edit_account'),
    path('change_password/', views.change_password, name='change_password'),
]
