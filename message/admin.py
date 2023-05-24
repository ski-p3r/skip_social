from django.contrib import admin
from .models import Message, Send

# Register your models here.

admin.site.register(Message)
admin.site.register(Send)