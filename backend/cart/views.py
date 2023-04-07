from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Cart
from .serializers import CartSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])

def get_all_cart(request):
    if request.method == 'GET':
        carts = Cart.objects.all()
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)


    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_cart(request):
    if request.method == 'POST':
        serializer = CartSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_cart(request):

    if request.method == 'GET':

        user_id = request.query_params.get('user_id')
        print(user_id)

        queryset = Cart.objects.all()

        if user_id:
            queryset = queryset.filter(user__id=user_id)
        serializer = CartSerializer(queryset, many=True);
        return Response(serializer.data)
    
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])

def delete_cart(request, pk):    
    cart = get_object_or_404(Cart, pk=pk)
    if request.method == 'DELETE':
        cart.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)