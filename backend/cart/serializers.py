from rest_framework import serializers
from .models import Cart

class CartSerializer(serializers.ModelSerializer):
    model = Cart
    fields = ['id', 'id']