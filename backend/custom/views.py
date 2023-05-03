from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Custom
from .serializers import CustomSerializer
from django.shortcuts import get_object_or_404

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_custom(request):
    if request.method == 'POST':
        serializer = CustomSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)