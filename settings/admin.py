from django.contrib import admin
from .models import Profile

# Register your models here.

class ProductAdmin(admin.ModelAdmin): # new
     readonly_fields = ['img_preview']
     list_display = ['user', 'img_preview']

admin.site.register(Profile, ProductAdmin)