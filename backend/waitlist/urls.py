from django.urls import path, include
from .import views

urlpatterns =[
    path('waitlist/', views.add_to_waitlist)
]