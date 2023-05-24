from django.shortcuts import redirect, render, get_object_or_404
from django.db.models import Q,F
from django.contrib.auth.decorators import login_required
from accounts.models import Account
from .models import Message, Send
from settings.models import Profile

# Create your views here.

@login_required(login_url = 'login')
def message(request):
    profile = Profile.objects.get(user=request.user)
    messagess = Send.objects.filter(Q(sender=profile) | Q(receiver=profile))
    m = []
    for i in messagess:
        if Message.objects.filter(user=i).exists():
            mes = Message.objects.filter(user=i, is_viewed=False).exclude(messager=profile).count()
            i.in_message = True
            i.save()
            m.append(mes)
    
    message = Send.objects.filter((Q(sender=profile) | Q(receiver=profile)) & Q(in_message=True))
    context = {
        'message': zip(message,m),
        'profile': profile,
    }
    return render(request, 'message/index.html', context)

@login_required(login_url = 'login')
def message_inbox(request, usern):
    profile = Profile.objects.get(user=request.user)
    if usern:
        users = Send.objects.get(send_name=usern)
        messages = Message.objects.filter(user=users)
        messag = Message.objects.filter(user=users).exclude(messager=profile)
        for i in messag:
            i.is_viewed=True
            i.save()
        x = ''
        if users.sender == profile:
            x=users.receiver
        else:
            x=users.sender
        if request.method == 'POST':
            message = request.POST['message']
            msg = Message.objects.create(user=users, messager=profile,message=message)
            msg.save()
            return redirect(request.META.get('HTTP_REFERER'))

        context = {
            'profile': profile,
            'messages': messages,
            'x': x,
        }
    return render(request, 'message/message_inbox.html', context)

@login_required(login_url = 'login')
def create_inbox(request, usern):
    profile = Profile.objects.get(user=request.user)
    if usern:
        us = Account.objects.get(username=usern)
        usr = Profile.objects.get(user=us)
        try:
            send = Send.objects.get(sender=usr,receiver=profile)
            return redirect('message')
        except:
            try:
                send = Send.objects.get(sender=profile,receiver=usr)
                return redirect('message')
            except:
                ty = profile.user.username
                tx = usr.user.username
                c = []
                c.append(ty)
                c.append(tx)
                z='_'.join(c)
                send = Send.objects.create(sender=usr,receiver=profile, send_name=z, in_message=True)
                send.save()
                return redirect('message')