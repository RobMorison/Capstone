from rest_framework import serializers
from .models import Waitlist

class WaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Waitlist
        fields = ['first_name', 'last_name', 'email', 'product', 'product_id']
        depth = 1
    
    product_id = serializers.IntegerField(write_only=True)
        
    
    
