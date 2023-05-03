from django.urls import path, include
from . import views

urlpatterns = [
    path('products/custom/', views.post_custom)
]