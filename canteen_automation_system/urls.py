
from django.contrib import admin
from django.urls import path,include
from .views import *
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include("authentication.urls")),
    path('',Home,name="home" ),
    path('breakfast/',breakfast,name="breakfast" ),
    path('lunch/',lunch,name="lunch" ),
    path('dinner/',dinner,name="dinner" ),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)