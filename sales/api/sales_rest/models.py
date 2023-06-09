from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_automobile_vo", kwargs={"pk": self.id})


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_salesperson", kwargs={"pk": self.id})


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=100)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.id})


class Sale(models.Model):
    price = models.CharField(max_length=100)
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobiles",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="salespeople",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customers",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_sale", kwargs={"pk": self.id})
