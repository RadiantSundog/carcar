from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class AutomobileVOListEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "id",
        "reason",
        "vin",
        "customer",
        "status",
        "technician"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
