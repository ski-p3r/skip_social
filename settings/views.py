from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import check_password
from django.contrib import auth
from accounts.models import Account 
from .models import Profile

# Create your views here.

@login_required(login_url = 'login')
def setting(request):
    profile = Profile.objects.get(user=request.user)
    context = {
        'profile': profile,
    }
    return render(request, 'settings/index.html', context)

@login_required(login_url = 'login')
def edit_acc(request):
    user = request.user
    if request.method == 'POST':
        first_name  = request.POST['first_name']
        last_name   = request.POST['last_name']
        email       = request.POST['email']
        phone       = request.POST['phone']
        desc       = request.POST['desc']
        img         = request.FILES['image']
        users             = Account.objects.get(email=user.email)
        users.first_name  = first_name
        users.last_name   = last_name
        users.email       = email
        users.phone_number       = phone
        users.is_active   = True
        users.save()
        if img is not None:
            try:
                acc = Profile.objects.get(user=user)
                acc.product_img = img
                acc.save()
            except:
                acc = Profile.objects.create(user=user,product_img=img)
                acc.save()
        if desc is not None:
            try:
                acc = Profile.objects.get(user=user)
                acc.desc = desc
                acc.save()
            except:
                acc = Profile.objects.create(user=user,desc=desc)
                acc.save()
                

        
        return redirect('settings')
    try:
        profile = Profile.objects.get(user=user)
        context = {
            'profile': profile,
            'user': user,
        }
    except:
        context = {
            'user': user,
        }
    return render(request, 'settings/edit_account.html', context)

@login_required(login_url = 'login')
def change_password(request):
    p=request.user
    t = p.password
    y=Account.objects.get(email=p)
    if request.method == 'POST':
        password1   = request.POST['password1']
        password    = request.POST['password']
        passwordc    = request.POST['passwordc']
        f = check_password(password1,t)
        if f:
            if password == passwordc:
                y.set_password(password)
                y.save()
                user = auth.authenticate(request,email=request.user.email, password=password)

                if user is not None:
                    auth.login(request, user)
                    return redirect('settings')
        else:
            pass
    
    return render(request, 'settings/password.html')