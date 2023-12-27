# CarCar

Team:

* Person 1: Alex Levero - Sales
* Person 2: Brian Johnson - Services

## Design

## Service microservice

AutomobileVO model was created with fields "vin" and "sold".  Poller was set up to poll every minute to inventory end point.  Poller was coded to update and/or create data and populate the AutomobileVO model.

Additionally, models "Appointment" and "Technician" were created.  Technician and Appointment models were created to so CRUD could be performed via view functions created.  Data was then used to populate forms and list.


## Sales microservice

The sales microservice relies on the following models for its API:
AutomobileVO
Salesperson
Customer
Sale

Those models, alongside their associated API view functions, handle GET, POST, and DELETE requests to add, remove, and view data within the API.

A poller receives "vin" and "sold" data through the AutomobileVO from the Automobile model within the inventory microservice.

React is used as a front-end framework along with Bootstrap for basic CSS implementation to display various client-side webpages that allow the user to interact with the APIs.
