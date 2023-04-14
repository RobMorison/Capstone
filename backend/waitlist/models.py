from django.db import models
from product.models import Product

class Waitlist(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

# Create your models here.
