from django.urls import path, include
from .import views

urlpatterns = [
    path('cart/', views.get_all_cart),
    path('cart/post/', views.post_cart),
    path('<int:pk>/', views.user_cart)
]