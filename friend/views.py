from django.shortcuts import get_object_or_404, redirect, render
from django.db.models import Q
from settings.models import Profile
from accounts.models import Account
from .models import Friend

# Create your views here.

def friend(request):
    profile = Profile.objects.get(user=request.user)
    friend_list = []
    user = []
    users = Profile.objects.exclude(id=profile.id)
    friend_lists = Friend.objects.filter(adder=profile)
    for i in friend_lists:
        friend_list.append(i.added.user.email)
    context = {
        'profile': profile,
        'users':users,
        'friend_list' : friend_list,
    } 
    return render(request, 'friend/index.html', context)

def confirmed_friend(request):
    profile = Profile.objects.get(user=request.user)
    friend_list = []
    users = []

    confirmed_friends = Friend.objects.filter((Q(added=profile) | Q(adder=profile)) & Q(is_approved=True)).order_by('-date_added')[:5]
    for i in confirmed_friends:
        if request.user.email == i.adder.user.email:
            if i.added in users:
                pass
            else:
                users.append(i.added)
        elif request.user.email == i.added.user.email:
            if i.adder in users:
                pass
            else:
                users.append(i.adder)
    context = {
        'profile': profile,
        'users':users,
        'friend_list' : friend_list,
    } 
    return render(request, 'friend/index2.html', context)
def add_friend(request, email):
    if email:
        user = Profile.objects.get(user=request.user)
        added = Account.objects.get(email=email)
        username = Profile.objects.get(user=added)
        friend = Friend.objects.create(adder=user, added=username)
        friend.save()
        return redirect(request.META.get('HTTP_REFERER'))
    
def remove_friend(request, email):
    if email:
        user = Profile.objects.get(user=request.user)
        added = Account.objects.get(email=email)
        username = Profile.objects.get(user=added)
        friend = Friend.objects.get(adder=user, added=username)
        friend.delete()
        return redirect(request.META.get('HTTP_REFERER'))

def remove_friend_request(request, email):
    if email:
        user = Profile.objects.get(user=request.user)
        added = Account.objects.get(email=email)
        username = Profile.objects.get(user=added)
        friend = Friend.objects.get(added=user, adder=username)
        friend.delete()
        return redirect(request.META.get('HTTP_REFERER'))

def confirm_friend(request, email):
    if email:
        user = Profile.objects.get(user=request.user)
        added = Account.objects.get(email=email)
        username = Profile.objects.get(user=added)
        friend = Friend.objects.get(added=user, adder=username, is_approved=False)
        friend.is_approved=True
        friend.save()
        return redirect(request.META.get('HTTP_REFERER'))
    