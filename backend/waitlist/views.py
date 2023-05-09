from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Waitlist
from .serializers import WaitlistSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])

def add_to_waitlist(request):
    if request.method == 'POST':
        serializer = WaitlistSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([AllowAny])

def get_my_waitlist(request):
    if request.method == 'GET':
        email_param = request.query_params.get('email')
        queryset = Waitlist.objects.all()
        if email_param:
            queryset = queryset.filter(email=email_param)
        serializer = WaitlistSerializer(queryset, many=True)
        return Response(serializer.data)