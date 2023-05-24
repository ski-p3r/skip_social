from contact.models import Address, SocialNetwork
from settings.models import Profile
from django.shortcuts import get_object_or_404, render
from post.models import Post
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from accounts.models import Account
from django.http import HttpResponse
from friend.models import Friend

@login_required(login_url = 'login')
def home(request):
    post = Post.objects.all().order_by('-created_date')
    user = request.user
    profile = Profile.objects.get(user=user)
    friend_request = Friend.objects.filter(added=profile, is_approved=False).order_by('-date_added')[:5]
    confirm = []
    confirmed_friends = Friend.objects.filter((Q(added=profile) | Q(adder=profile)) & Q(is_approved=True)).order_by('-date_added')[:5]
    for i in confirmed_friends:
        if request.user.email == i.adder.user.email:
            if i.added in confirm:
                pass
            else:
                confirm.append(i.added)
        elif request.user.email == i.added.user.email:
            if i.adder in confirm:
                pass
            else:
                confirm.append(i.adder)
    context = {
        'post': post,
        'friend_request': friend_request,
        'confirmed_friends': confirm,
        'profile': profile,
    }
    return render(request, 'index.html', context)

@login_required(login_url = 'login')
def search(request):
    if 'keyword' in request.GET:
        keyword = request.GET['keyword']
        if keyword:
            post = Post.objects.order_by('-created_date').filter(text__icontains=keyword)
    profile = Profile.objects.get(user=request.user)
    context = {
        'profile': profile,
        'post': post,
    }
    return render(request, 'index.html', context)

@login_required(login_url = 'login')
def author(request):
    context = {}
    username = Account.objects.get(username="manmuba80")
    usernames = Profile.objects.get(user=username)
    if username:
        # username = get_object_or_404(Account, username=username)
        post = Post.objects.filter(user=username)
        post_count = post.count()
        profiles = Profile.objects.get(user=username)
        profile = Profile.objects.get(user=request.user)
        try:
            address = Address.objects.get(user=username)
        except:
            address = Address.objects.create(user=username, country='Ethiopia', city='Adama', address='Adama')
        user = request.user
        friend_list = []
        follower  = len(Friend.objects.filter(added=usernames))
        following = len(Friend.objects.filter(adder=usernames))
        posts = len(Post.objects.filter(profile=usernames)) + len(Post.objects.filter(profile=usernames))
        profile = Profile.objects.get(user=user)
        friend_lists = Friend.objects.filter(adder=profile)
        for i in friend_lists:
            friend_list.append(i.added.user.email)
        try:
            is_approved = Friend.objects.filter(adder=profile, added=usernames, is_approved=True).exists()
        except:
            is_approved = Friend.objects.filter(adder=usernames, added=profile, is_approved=True).exists()
        # social = SocialNetwork.objects.get(user=username)
        context = {
            'username': username,
            'usernames': usernames,
            'profile': profile,
            'follower': follower,
            'following':following,
            'friend_list': friend_list,
            'posts': posts,
            'is_approved':is_approved,
            'address': address,
            # 'social': social,
            'profiles': profiles,
            'post': post,
            'post_count': post_count,
        }
    return render(request, 'accounts/author_admin.html', context)
    # return HttpResponse(username.email)