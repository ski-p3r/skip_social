from django.utils.html import mark_safe
from django.db import models
from accounts.models import Account
from settings.models import Profile

# Create your models here.

class Group(models.Model):
    creator     = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='creator')
    group_name  = models.CharField(max_length=50, unique=True)
    group_img = models.ImageField(upload_to = 'images')
    created_date = models.DateTimeField(auto_now_add=True)
    desc = models.TextField(blank=True)

    def img_preview(self): 
        return mark_safe(f'<img src = "{self.group_img.url}" width = "30px" style="border_radius: 50%;"/>')

    def __str__(self):
        return self.group_name
    
class GroupMessage(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    text = models.TextField(max_length=10000)
    created_date = models.DateTimeField(auto_now_add=True)
    images = models.ImageField(upload_to='group/post', blank=True)

    def __str__(self):
        return self.text[:20]
    
class GroupMember(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    member     = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='member')

    def __str__(self):
        return f'{self.group.group_name} {self.member.user.email}'
