from django.shortcuts import get_object_or_404, redirect, render
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from contact.models import Address
from friend.models import Friend
from settings.models import Profile
from .models import Group, GroupMessage, GroupMember
from post.models import Post

# Create your views here.

@login_required(login_url = 'login')
def group(request):
    profile = Profile.objects.get(user=request.user)
    group_members = []
    groups = Group.objects.all().order_by('-created_date')
    group_member = GroupMember.objects.filter(member=profile)
    for i in group_member:
        group_members.append(i.group.group_name)
    context = {
        'groups': groups,
        'profile': profile,
        'group_members': group_members,
    }
    return render(request, 'group/index.html', context)

@login_required(login_url = 'login')
def group_detail(request, username):
    if username:
        username = get_object_or_404(Group, group_name=username)
        try:
            address = Address.objects.get(user=username.creator.user)
        except:
            address = Address.objects.create(user=username.creator.user, country='Ethiopia', city='Adama', address='Adama')

        pp = Profile.objects.get(user=username.creator.user)
        post = GroupMessage.objects.filter(group=username).order_by('-created_date')
        user = request.user
        friend_list = []
        follower  = len(Friend.objects.filter(added=username.creator))
        following = len(Friend.objects.filter(adder=username.creator))
        posts = len(GroupMessage.objects.filter(profile=username.creator)) + len(Post.objects.filter(profile=username.creator))
        profile = Profile.objects.get(user=user)
        friend_lists = Friend.objects.filter(adder=profile)
        for i in friend_lists:
            friend_list.append(i.added.user.email)
        try:
            is_approved = Friend.objects.filter(adder=profile, added=username.creator, is_approved=True).exists()
        except:
            is_approved = Friend.objects.filter(adder=username.creator, added=profile, is_approved=True).exists()
        group_member = GroupMember.objects.filter(group=username,member=profile).exists()
        context = {
            'username': username,
            'group_member': group_member,
            'address':address,
            'is_approved':is_approved,
            'follower': follower,
            'following':following,
            'friend_list': friend_list,
            'posts': posts,
            'post': post,
            'pp': pp,
            'profile': profile,
        }
    return render(request, 'group/detail.html', context)

@login_required(login_url = 'login')
def create_group_post(request, username):
    if username:
        username = get_object_or_404(Group, group_name=username)
    if request.method == 'POST':
        text = request.POST['message']
        images = request.FILES['image_man']
        user = request.user
        try:
            profile = Profile.objects.get(user=user)
            post = GroupMessage.objects.create(user=user, profile=profile, text=text, images=images, group=username)
        except:
            profile = Profile.objects.create(user=user)
            post = GroupMessage.objects.create(user=user, text=text, profile=profile, images=images, group=username)
        post.save()
        return redirect(request.META.get('HTTP_REFERER'))

@login_required(login_url = 'login')
def leave_group(request, username):
    if username:
        username = get_object_or_404(Group, group_name=username)
        profile = Profile.objects.get(user=request.user)
        group_member = GroupMember.objects.get(group=username,member=profile)
        group_member.delete()
        return redirect(request.META.get('HTTP_REFERER'))

@login_required(login_url = 'login')
def join_group(request, username):
    if username:
        username = get_object_or_404(Group, group_name=username)
        profile = Profile.objects.get(user=request.user)
        group_member = GroupMember.objects.create(group=username,member=profile)
        group_member.save()
        return redirect(request.META.get('HTTP_REFERER'))
    
@login_required(login_url = 'login')
def create_group(request):
    profile = Profile.objects.get(user=request.user)
    if request.method == 'POST':
        group_name = request.POST['group_name']
        desc = request.POST['desc']
        group_pic = request.FILES['group_pic']
        group = Group.objects.create(creator=profile, group_name=group_name,group_img=group_pic, desc=desc)
        group.save()
        group_member = GroupMember.objects.create(group=group,member=profile)
        group_member.save()
        return redirect('group')
    context = {
       'profile': profile,
    }
    return render(request, 'create_group.html', context)
