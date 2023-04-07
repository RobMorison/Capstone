from django.urls import path, include
from .import views

urlpatterns = [
    path('cart/', views.user_cart),
    path('cart/post/', views.post_cart),
    path('cart/<int:pk>/', views.delete_cart)

]