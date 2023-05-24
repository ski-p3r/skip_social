from django.contrib import admin
from .models import Message, Send,Unview

# Register your models here.

admin.site.register(Message)
admin.site.register(Send)
admin.site.register(Unview)