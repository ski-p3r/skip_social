from django.contrib import admin
from .models import Group, GroupMessage, GroupMember

# Register your models here.

class GroupAdmin(admin.ModelAdmin): # new
     readonly_fields = ['img_preview']
     list_display = ['creator', 'img_preview']

admin.site.register(Group, GroupAdmin)
admin.site.register(GroupMessage)
admin.site.register(GroupMember)