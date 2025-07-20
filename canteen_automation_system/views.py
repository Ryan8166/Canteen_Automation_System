from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from authentication.models import *

def Home(request):
    if not request.user.is_authenticated:
        return redirect("login")
    items = CarasolItem.objects.all()
    context = {
        'items' : items
    }
    return render(request,"home/index.html",context)

def breakfast(request):
    if not request.user.is_authenticated:
        return redirect("login")
    breakfast = BreakfastItem.objects.all()
    context={
        'items' : breakfast
    }
    return render(request,"home/breakfast.html",context)

def lunch(request):
    if not request.user.is_authenticated:
        return redirect("login")
    items = LunchItem.objects.all()
    context = {
        'items' : items
    }
    return render(request,"home/lunch.html",context)

def dinner(request):
    if not request.user.is_authenticated:
        return redirect("login")
    items = DinnerItem.objects.all()
    context = {
        'items' : items
    }
    return render(request,"home/dinner.html",context)

    
