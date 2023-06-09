from django.urls import path

from .api_views import (api_list_technician, api_show_technician,
                        api_list_appointment, api_show_appointment,
                        api_cancel_appointment, api_finish_appointment)

urlpatterns = [
    path("technicians/", api_list_technician, name="api_list_tech"),
    path("technicians/<int:pk>/", api_show_technician, name="api_show_tech"),
    path("appointments/", api_list_appointment, name="api_list_appointments"),
    path("appointments/<int:pk>/", api_show_appointment,
         name="api_show_appointments"),
    path("appointments/<int:pk>/cancel", api_cancel_appointment,
         name="api_cancel_appointment"),
    path("appointments/<int:pk>/finish", api_finish_appointment,
         name="api_finish_appointment"),


]
