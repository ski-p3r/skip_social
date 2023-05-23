from django.db import models
from accounts.models import Account

# Create your models here.

class SocialNetwork(models.Model):
    user        = models.OneToOneField(Account, on_delete=models.CASCADE)
    facebook    = models.CharField(max_length=255, blank=True)
    twitter     = models.CharField(max_length=255, blank=True)
    linkedin    = models.CharField(max_length=255, blank=True)
    instagram   = models.CharField(max_length=255, blank=True)
    github      = models.CharField(max_length=255, blank=True)
    telegram    = models.CharField(max_length=255, blank=True)

    def unicode(self):
        return self.user

class Address(models.Model):
    user        = models.OneToOneField(Account, on_delete=models.CASCADE)
    country     = models.CharField(max_length=255, blank=True)
    city        = models.CharField(max_length=255, blank=True)
    address     = models.CharField(max_length=255, blank=True)

    def unicode(self):
        return self.user
    
    def full_address(self):
        return f"{self.country}/{self.city}/{self.address}"