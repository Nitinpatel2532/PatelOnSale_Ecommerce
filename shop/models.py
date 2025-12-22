from django.db import models


class Order(models.Model):
    shippingInfo = models.JSONField()
    buyNowItem = models.JSONField()
    orderDate = models.DateTimeField()

    def __str__(self):
        return f"Order #{self.id}"
