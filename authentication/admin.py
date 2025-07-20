from django.contrib import admin
from .models import BreakfastItem,LunchItem,DinnerItem,CarasolItem

admin.site.register(BreakfastItem)
admin.site.register(LunchItem)
admin.site.register(DinnerItem)
admin.site.register(CarasolItem)
