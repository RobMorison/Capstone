from django.urls import path, include
from .import views

urlpatterns = [
    path('product', views.get_all_product),
    path('product/<int:pk>/', views.get_product_id),
]