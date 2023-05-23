from django.shortcuts import get_object_or_404, render, redirect
from django.contrib import auth, messages
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from .models import Account
from post.models import Post
from settings.models import Profile
from contact.models import SocialNetwork, Address

# Create your views here.

def register(request):
    if request.method == 'POST':
        full_name = request.POST['full_name']
        first_name  = full_name.split(' ')[0]
        last_name  = full_name.split(' ')[1]
        email      = request.POST['email']
        password   = request.POST['password']
        phone_number   = request.POST['phone_number']
        img         = request.FILES['image']
        username = email.split("@")[0]
        user = Account.objects.create_user(first_name=first_name, last_name=last_name, email=email, username=username, password=password)
        user.phone_number = phone_number
        user.save()
        if user:
            acc = Profile.objects.create(user=user,product_img=img)
            acc.save()

            # USER ACTIVATION
            current_site = get_current_site(request)
            mail_subject = 'Please activate your account'
            message = render_to_string('accounts/account_verification_email.html', {
                'user': user,
                'domain': current_site,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': default_token_generator.make_token(user),
            })
            to_email = email
            send_email = EmailMessage(mail_subject, message, to=[to_email])
            send_email.send()
            messages.success(request, 'Thank you for registering with us. We have sent you a verification email to your email address[manmuba198@gmail.com]. Please verify it.')
            return redirect('/auth/login/?command=verification&email='+email)
    return render(request, 'accounts/register.html')

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        user = auth.authenticate(request,email=email, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('home')
        else:
            return redirect('login')
    return render(request, 'accounts/login.html')

@login_required(login_url = 'login')
def author(request, username):
    profile = Profile.objects.get(user=request.user)
    address = ""
    social = ''
    if username:
        username = get_object_or_404(Account, username=username)
        post = Post.objects.filter(user=username)
        post_count = post.count()
        profiles = Profile.objects.get(user=username)
        try:
            address = Address.objects.get(user=username)
        except:
            pass
        try:
            social = SocialNetwork.objects.get(user=username)
        except:
            pass
    context = {
        'username': username,
        'profile': profile,
        'address': address,
        'social': social,
        'profiles': profiles,
        'post': post,
        'post_count': post_count,
    }
    return render(request, 'accounts/author.html', context)



@login_required(login_url = 'login')
def authorman(request, username):
    address = ""
    social = ''
    profile = Profile.objects.get(user=request.user)
    if username:
        username = get_object_or_404(Account, username=username)
        post = Post.objects.filter(user=username)
        post_count = post.count()
        profiles = Profile.objects.get(user=username)
        try:
            address = Address.objects.get(user=username)
        except:
            pass
        try:
            social = SocialNetwork.objects.get(user=username)
        except:
            pass
        
    context = {
        'username': username,
        'profile': profile,
        'address': address,
        'social': social,
        'profiles': profiles,
        'post': post,
        'post_count': post_count,
    }
    return render(request, 'accounts/authorman.html', context)

@login_required(login_url = 'login')
def logout(request):
    auth.logout(request)
    return redirect('login')

def activate(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = Account._default_manager.get(pk=uid)
    except(TypeError, ValueError, OverflowError, Account.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect('login')
    else:
        return redirect('register')