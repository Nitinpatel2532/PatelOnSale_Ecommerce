from django.urls import path
from .views import OrderCreateView, OrderListView, OrderDeleteView

urlpatterns = [
    path("orders/", OrderCreateView.as_view(), name="create-order"),
    path("orders/all/", OrderListView.as_view(), name="all-orders"),
    path("orders/<int:pk>/", OrderDeleteView.as_view(), name="delete-order"),
]
