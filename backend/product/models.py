from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    length = models.IntegerField()
    width = models.IntegerField()
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.CharField(max_length=100)
    stripe_price = models.CharField(max_length=100)

# Create your models here.
