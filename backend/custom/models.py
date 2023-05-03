from django.db import models
from authentication.models import User

class Custom(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    length = models.IntegerField()
    width = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

# Create your models here.
