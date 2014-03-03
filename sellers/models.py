from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Seller(models.Model):
    user = models.OneToOneField(User)
    address = models.CharField(max_length=200)
    description = models.CharField(max_length=2000)
    

class SellerBusiness(models.Model):
    seller = models.ForeignKey(User)
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=2000)
    photo = models.ImageField(upload_to='b_photos/%Y/%m/%d', max_length=10000000, blank=True, null=True, default='b_photos/default.jpg')
    photo1 = models.ImageField(upload_to='b_photos/%Y/%m/%d/1', max_length=10000000, blank=True, null=True, default='b_photos/default_1.jpg')
    photo2 = models.ImageField(upload_to='b_photos/%Y/%m/%d/2', max_length=10000000, blank=True, null=True, default='b_photos/default_2.jpg')
