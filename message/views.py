from django.shortcuts import redirect, render, get_object_or_404
from django.db.models import Q,F

from accounts.models import Account
from .models import Message, Send
from settings.models import Profile

# Create your views here.

# def message(request):
#     profile = Profile.objects.get(user=request.user)
#     l=[]
#     m=[]
#     try: 
#         messagess = Send.objects.filter(Q(sender__user__email__icontains=request.user))
#         for i in messagess:
#             l.append(i.receiver)

#     except:
#         messagess = Send.objects.filter(Q(receiver__user__email__icontains=request.user))
#         for i in messagess:
#             l.append(i.sender)
#     for i in l:
#         prof = Profile.objects.get(user=i)
#         try:
#             k = Send.objects.get(sender=Profile.objects.get(user=request.user), receiver=Profile.objects.get(user=i))
#         except:
#             k = Send.objects.get(sender=Profile.objects.get(user=i), receiver=Profile.objects.get(user=request.user))
#         if Message.objects.filter(user=k):
#             m.append(prof)
#     m.reverse()
#     p = []
#     for i in m:
#         try:
#             messagess = Send.objects.filter(Q(receiver__user__email__icontains=request.user) & Q(sender__user__email__icontains=i.user))[0]
#         except:
#             messagess = Send.objects.filter(Q(receiver__user__email__icontains=i.user) & Q(sender__user__email__icontains=request.user))[0]
        
#         p.append(messagess)
#     print(p)
    # reciv = []
    # messagess = Send.objects.filter(Q(sender__email__icontains=request.user) | Q(receiver__email__icontains=request.user))
    # for i in messagess
    # for i in messagess:
    #     reciv.append(i.receiver)
    # msgs     = Message.objects.filter(receiver=profile).exclude(Q(sender__in=reciv))
    # queryset1 = messagess.annotate(source=F('created_date'))
    # queryset2 = msgs.annotate(source=F('created_date'))
    # combined_queryset = queryset1.union(queryset2)
    # messages = combined_queryset.order_by('-created_date')
#     context = {
#         'messages': messagess,
#         'profile': profile,
#         'm': m,
#     }
#     return render(request, 'message/index.html', context)

# def message_inbox(request, user):
#     profile = Profile.objects.get(user=request.user)
#     if user:
#         try:
#             acc = Account.objects.get(email=user)
#             prof = Profile.objects.get(user=acc)
#             users = Send.objects.get(sender=prof, receiver=profile)
#         except:
#             users = Send.objects.get(receiver=prof, sender=profile)
#         print(users)
#     return render(request, 'message/message_inbox.html')

def message(request):
    profile = Profile.objects.get(user=request.user)
    messagess = Send.objects.filter(Q(sender=profile) | Q(receiver=profile))
    for i in messagess:
        if Message.objects.filter(user=i).exists():
            i.in_message = True
            i.save()
    message = Send.objects.filter((Q(sender=profile) | Q(receiver=profile)) & Q(in_message=True))
    context = {
        'message': message,
        'profile': profile,
    }
    return render(request, 'message/index.html', context)

def message_inbox(request, usern):
    profile = Profile.objects.get(user=request.user)
    if usern:
        users = Send.objects.get(send_name=usern)
        messages = Message.objects.filter(user=users)
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

def create_inbox(request, usern):
    profile = Profile.objects.get(user=request.user)
    if usern:
        us = Account.objects.get(username=usern)
        usr = Profile.objects.get(user=us)
        try:
            send = Send.objects.get(sender=usr,receiver=profile)
            return redirect('message')
            return redirect('message_inbox'/send.send_name)
        except:
            try:
                send = Send.objects.get(sender=profile,receiver=usr)
                return redirect('message')
                return redirect('home'f'message_inbox/{send.send_name}')
                return redirect('message_inbox'/send.send_name)
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
                return redirect(f'message_inbox/{send.send_name}')