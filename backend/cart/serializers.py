from rest_framework import serializers
from .models import Cart

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'product', 'user', 'number', 'product_id', 'user_id']
        depth = 1

    product_id = serializers.IntegerField(write_only=True)
    user_id = serializers.IntegerField(write_only=True)


        
        
        