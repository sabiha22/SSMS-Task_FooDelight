from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='blog-home'),
    path('about/', views.about, name='blog-about'),
    path('index/', views.menu, name='menu'),
    path('stafflog/', views.stafflog, name="stafflog"),
    path('sale/', views.sale, name="sale")
]