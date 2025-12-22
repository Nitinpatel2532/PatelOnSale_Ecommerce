from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Order
from .serializers import OrderSerializer

class OrderCreateView(APIView):
    def post(self, request):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Order placed successfully"}, status=201)
        return Response(serializer.errors, status=400)

class OrderListView(APIView):
    def get(self, request):
        orders = Order.objects.all().order_by('-id')
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

class OrderDeleteView(APIView):
    def delete(self, request, pk):
        try:
            order = Order.objects.get(id=pk)
            order.delete()
            return Response({"message": "Order deleted"}, status=204)
        except Order.DoesNotExist:
            return Response({"error": "Order not found"}, status=404)
