
from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path('login/',HandleLogin,name="login" ),
    path('signup/',HandleSignUp,name="signup" ),
    path('logout/',HandleLogout,name="logout" ),
]
