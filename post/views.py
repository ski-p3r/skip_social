from django.shortcuts import render, redirect
from .models import Post
from django.contrib.auth.decorators import login_required
from settings.models import Profile

# Create your views here.

@login_required(login_url = 'login')
def create_post(request):
    if request.method == 'POST':
        text = request.POST['message']
        images = request.FILES['image_man']
        user = request.user
        try:
            profile = Profile.objects.get(user=user)
            post = Post.objects.create(user=user, profile=profile, text=text, images=images)
        except:
            profile = Profile.objects.create(user=user)
            post = Post.objects.create(user=user, text=text, profile=profile, images=images)
        post.save()
    return redirect('home')