from django.db import models
from django.urls import reverse
from accounts.models import Account
from settings.models import Profile

# Create your models here.

class Post(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    text = models.TextField(max_length=10000)
    created_date = models.DateTimeField(auto_now_add=True)
    images = models.ImageField(upload_to='photos/post')

    def get_url(self):
        return reverse('authors_post', args=[self.user.username])


    def __str__(self):
        return self.text[:20]
    def short_text(self):
        return self.text[:150]