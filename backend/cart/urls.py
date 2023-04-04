from django.urls import path, include
from .import views

urlpatterns = [
    path('cart/', views.get_all_cart),
]