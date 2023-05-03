from rest_framework import serializers
from .models import Custom

class CustomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Custom
        fields = ['name', 'description', 'length', 'width', 'user_id']
        depth = 1

    user_id = serializers.IntegerField(write_only=True)