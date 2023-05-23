from django.db import models
from django.utils.html import mark_safe
from accounts.models import Account


# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE)
    product_img = models.ImageField(upload_to = 'images', blank=True)
    desc = models.TextField(blank=True)

    def img_preview(self): 
        return mark_safe(f'<img src = "{self.product_img.url}" width = "30px" style="border_radius: 50%;"/>')

    def __str__(self):
        return self.user.email