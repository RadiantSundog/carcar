# CarCar

Team:

* Alexander Levero - Sales
* Person 2 - Which microservice?

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

The sales microservice relies on the following models for its API:
AutomobileVO
Salesperson
Customer
Sale

Those models, alongside their associated API view functions, handle GET, POST, and DELETE requests to add, remove, and view data within the API.

A poller receives "vin" and "sold" data through the AutomobileVO from the Automobile model within the inventory microservice.

React is used as a front-end framework along with Bootstrap for basic CSS implementation to display various client-side webpages that allow the user to interact with the APIs.
