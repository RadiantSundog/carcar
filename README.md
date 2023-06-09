# CarCar

Team:

* Person 1 Alex Levero-Sales
* Person 2 - Brian Johnson-Services

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

AutomobileVO model was created with fields "vin" and "sold".  Poller was set up to poll every minute to inventory end point.  Poller was coded to update and/or create data and populate the AutomobileVO model.

Additionally, models "Appointment" and "Technician" were created.  Technician and Appointment models were created to so CRUD could be performed via view functions created.  Data was then used to populate forms and list.


## Sales microservice

Explain your models and integration with the inventory
microservice, here.
