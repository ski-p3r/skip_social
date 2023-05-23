from django.db import models
from accounts.models import Account
from settings.models import Profile

# Create your models here.

class Friend(models.Model):
    adder       = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='sender')
    added       = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='reciever')
    is_approved = models.BooleanField(default=False)
    date_added  = models.DateTimeField(auto_now_add=True)

    def add(self):
        return f'{self.adder.user.email}'
    
    def adds(self):
        return f'{self.added.user.email}'
    
    def __str__(self):
        return self.added.user.email