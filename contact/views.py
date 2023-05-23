from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Address, SocialNetwork
from settings.models import Profile
from accounts.models import Account

# Create your views here.

@login_required(login_url = 'login')
def social(request):
    profile = Profile.objects.get(user=request.user)
    if request.method == 'POST':
        facebook    = request.POST['facebook']
        twitter     = request.POST['twitter']
        linkedin    = request.POST['linkedin']
        instagram   = request.POST['instagram']
        telegram    = request.POST['telegram']
        github      = request.POST['github']
        try:
            social = SocialNetwork.objects.get(user=request.user)
            social.facebook  = facebook
            social.twitter   = twitter
            social.linkedin  = linkedin
            social.instagram = instagram
            social.telegram  = telegram
            social.github    = github
            social.save()
            context = {
                'profile': profile,
                'social': social,
            }
            return redirect('settings')
        except:
            social = SocialNetwork.objects.create(
                user        = request.user,
                facebook    = facebook,
                twitter     = twitter,
                linkedin    = linkedin,
                instagram   = instagram,
                telegram    = telegram,
                github      = github
            )
            social.save()
            context = {
                'profile': profile,
                'social': social,
            }
            return redirect('settings')
    try:
        social = SocialNetwork.objects.get(user=request.user)
        context = {
            'profile': profile,
            'social': social,
        }
    except:
        context = {
            'profile': profile,
        }
    return render(request, 'settings/social.html', context)

@login_required(login_url = 'login')
def address(request):
    profile = Profile.objects.get(user=request.user)
    if request.method == 'POST':
        country     = request.POST['country']
        city        = request.POST['city']
        address     = request.POST['address']
        try:
            address = Address.objects.get(user=request.user)
            social.country  = country
            social.city   = city
            social.address  = address
            social.save()
            context = {
                'profile': profile,
                'address': address,
            }
            return redirect('settings')
        except:
            social = Address.objects.create(
                user        = request.user,
                country    = country,
                city     = city,
                address    = address,
            )
            social.save()
            context = {
                'profile': profile,
                'address': address,
            }
            return redirect('settings')
    try:
        address = Address.objects.get(user=request.user)
        context = {
            'profile': profile,
            'address': address,
        }
    except:
        context = {
            'profile': profile,
        }
    return render(request, 'settings/address.html', context)