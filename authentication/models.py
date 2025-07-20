from django.db import models

class BreakfastItem(models.Model):
    title = models.CharField(max_length=150)
    Price = models.IntegerField()
    Image = models.ImageField(upload_to="media/breakfast",max_length=300,null=True,blank=None)

    def __str__(self):
         return self.title



class LunchItem(models.Model):
    title = models.CharField(max_length=150)
    Price = models.IntegerField()
    Image = models.ImageField(upload_to="media/lunch",max_length=300,null=True,blank=None)

    def __str__(self):
         return self.title

class DinnerItem(models.Model):
    title = models.CharField(max_length=150)
    Price = models.IntegerField()
    Image = models.ImageField(upload_to="media/dinner",max_length=300,null=True,blank=None)

    def __str__(self):
         return self.title

class CarasolItem(models.Model):
    
    title = models.CharField(max_length=150)
    Image = models.ImageField(upload_to="media/carasol",max_length=300,null=True,blank=None)

    
    def __str__(self):
         return self.title
