from django.urls import path
from .views import get_facts

urlpatterns = [
    path('facts/', get_facts, name='get_facts'),
]
