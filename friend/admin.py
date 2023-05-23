from django.contrib import admin
from .models import Friend

# Register your models here.
class ListAdmin(admin.ModelAdmin):
    list_display = ('add', 'adds', 'is_approved')
admin.site.register(Friend, ListAdmin)