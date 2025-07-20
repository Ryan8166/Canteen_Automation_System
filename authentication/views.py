from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# -------------------- Authentication ------------------- 

def HandleLogin(request):
    if request.user.is_authenticated:
        return redirect("home")
    if request.method == "POST":
        username = request.POST['email']
        password = request.POST['password']
        
        user = authenticate(username=username, password=password)
        if user is not None:
           login(request,user)
           return redirect('home')

        else:
            messages.warning(request, "Invalid Email or Password")
            return render(request, 'auth/login.html')

    return render(request, 'auth/login.html')



def HandleSignUp(request):
    if request.user.is_authenticated:
        return redirect("home")
    if request.method == "POST":
        username = request.POST["email"]
        pass1 = request.POST["pass1"]
        pass2 = request.POST["pass2"]
        if pass1 == pass2:
            a = User.objects.filter(username = username)

            if(len(a) > 0):
                messages.warning(request, "User With That Email Already Exists")
                return render(request, 'auth/signup.html')
            
            user = User.objects.create_user(username = request.POST["email"], email = request.POST["email"],password=pass1)
            user.save()
            messages.success(request, "Registered Succesfully")
            return redirect("login")
        else:
            messages.warning(request,"Passwords does no match")
            return render(request, "auth/signup.html")

    return render(request, "auth/signup.html")


def HandleLogout(request):
    logout(request)
    messages.success(request, "Logged Out Succesfully")
    return redirect("login")
