from django.db import models
from django.urls import reverse
from accounts.models import Account
from settings.models import Profile

# Create your models here.
class Send(models.Model):
    sender      = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='send')
    receiver    = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='recieve')
    send_name   = models.CharField(max_length=50, unique=True)
    # unviewed    = models.IntegerField(default=0)
    in_message  = models.BooleanField(default=False)

    def user(self):
        return f'{self.sender.user.username}_{self.receiver.user.username}'

    def get_url(self):
        return reverse('message_inbox', args=[self.send_name])

    def __str__(self):
        return self.send_name

class Unview(models.Model):
    send    = models.ForeignKey(Send, on_delete=models.CASCADE)
    user    = models.ForeignKey(Profile, on_delete=models.CASCADE)
    unviewed    = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.user.user.email}'
    
    

class Message(models.Model):
    user        = models.ForeignKey(Send, on_delete=models.CASCADE)
    messager    = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='messager')
    message     = models.TextField()
    created_date= models.DateTimeField(auto_now_add=True)
    is_viewed   = models.BooleanField(default=False)

    def shot(self):
        return self.message[:20]
    
    def is_true(self):
        if self.message[:20] == self.message:
            return True
        else:
            return False

    def unicode(self):
        return self.user.user