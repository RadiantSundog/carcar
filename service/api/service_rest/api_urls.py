from django.urls import path

from .api_views import api_list_technician, api_show_technician

urlpatterns = [
    path("technicians/", api_list_technician, name="api_list_tech"),
    path("technicians/<int:pk>/", api_show_technician, name="api_show_tech"),

]
