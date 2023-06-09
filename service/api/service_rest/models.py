from django.db import models
from datetime import datetime
from django.utils import timezone


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200)


class Appointment(models.Model):
    date_time = models.CharField(max_length=200)
    reason = models.CharField(max_length=200)
    vin = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)
    status = models.TextField(default="created")
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )
