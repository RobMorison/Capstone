from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Cart
from .serializers import CartSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
@permission_classes (AllowAny)

def get_all_cart(request):
    if request.method == 'GET':
        carts = Cart.objects.all()
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)
# def user_cart(request):

#     serializer = CartSerializer(data=request.data)
#     if request.method == 'GET':
#         cart = Cart.objects.filter(user__id=request.user.id)
#         serializer = CartSerializer(cart, many=True)
#         return Response(serializer.data)
