---
layout: '@/templates/BasePost.astro'
title: Implement Event Driven Architecture using Laravel and Dapr
description: Implementing Event driven architectures using laravel
pubDate: 2023-09-21T00:00:00Z
imgSrc: '/assets/images/dapr.png'
imgAlt: 'Image post 7'
---

## What is Dapr (Distributed Application Runtime)?

Dapr is a portable, event-driven runtime that makes it easy for any developer to build resilient, stateless and stateful applications that run on the cloud and edge and embrace the diversity of languages and developer frameworks, Leveraging the benefits of a sidecar architecture, Dapr helps you tackle the challenges that come with building microservices and keeps your code platform agnostic.

## Dapr Services
![Dapr Service](/src/images/blog-1/dapr-services.png 'Dapr Services')

## Laravel Caveats

Dapr [PHP SDK ](https://github.com/dapr/php-sdk) did not work with the latest version of Laravel due to some dependency issues. We needed a way to work natively with Dapr using Dapr’s internal APIs to solve this.

## Advantages of using Dapr over Laravel Queues
 - Dapr is portable
 - Dapr is language agnostic
 - Dapr is platform agnostic
 - Dapr is cloud agnostic

### Use Case
I came across a unique situation where Laravel queues were used on a large scale and published messages to AWS SQS. The organisation wanted to move from AWS to Azure cloud. Now a normal cloud changeover implementation would require creating relevant queues and topics in Azure and then changing all Laravel connections to point to Azure queues. The cloud landscape is changing daily. Businesses prefer the approach to make applications cloud-native. Enter Dapr, which is a runtime that attaches to your container implementation. It is supported on Azure Container apps and also can be deployed to any Kubernetes cluster.

A demonstration of the functionality can be found on [GitHub](https://github.com/anikpat/laravel-dapr). The example uses a publisher and consumer service to send messages on a Redis queue. The Redis queue can easily be swapped with anything else like Amazon SQS, Azure Service bus etc.

Implementation of Dapr brings flexibility and robustness to the application. Using other services such as service invocations, secrets, actors etc. help to scale applications by keeping event-driven implementations language and cloud agnostic providing flexibility to move application in different clouds.

## How does it all work?
Let’s start by explaining the architecture with a simple diagram
![Dapr Working](/src/images/blog-1/dapr-working.png 'Dapr Working')


## Key Components

### Dapr Connections Publisher Service:
Dapr connections have been setup declaratively using YAML files
![topic binding](/src/images/blog-1/topic-binding.png 'Topic Binding')

The Key components in the above file:

**type**: Type of the pub-sub binding for Dapr to forward the message to. Here as I have connected it to Redis the type is pubsub.Redis. Similarly, if the binding was Azure service bus it would be _pubsub.azure.servicebus.queues_ | _pubsub.azure.servicebus.topics_

**metadata**: These are the required values to make a successful connection. The above example has Redis details.

**kind**: This is an internal value for Dapr to understand what the config is about. there are various configs that you can add.

### Dapr Components Consumer Service:
One additional subscribe component is required for the consumer service when creating dapr connections.
![Subscription binding](/src/images/blog-1/subscription-binding.png 'Subscription Binding')

Similar to the publish service having publish components the subscriber will need a subscribe component. That is an addition to the publish app declarations above which act as an address for the consumer service to listen on.

The Key components of the consumer service are:

**kind**: The kind here is Subscription. It specifies that declaration refers to subscription

**rules**: The rules mechanism above tells dapr where to forward the request to, it can be represented as an API endpoint.

**default**: default route as the name suggests is the default if none of the rules match


### Adding more endpoints
Adding more functionality and endpoints is easy. All that is needed is, adding more endpoints in the above subscribe component. Add the same endpoint to Laravel in the api.php route or web.php routes.

### Publishing to New endpoints
Publishing messages to new endpoints will require the publisher to change type to the new endpoint condition.

For example:
 > Adding modify service will entail. Adding a rule to above subscribe component.

 ```yaml 
apiVersion: dapr.io/v2alpha1
kind: Subscription
metadata:
  name: subscribe
spec:
  topic: orders
  routes:
    rules:
    - match: 'event.type == "create"'
      path: /api/dapr/create
    - match: 'event.type == "cancel"'
      path: /api/dapr/cancel
    - match: 'event.type == "modify"'
      path: /api/dapr/modify
    default: /api/dapr/receive
  pubsubname: pubsub-topics
 ```
> Add an endpoint to Laravel

```php
Route::post('/dapr/modify', [\App\Http\Controllers\DaprController::class, 'DaprModify']);
```
Fin..


### Conclusion
Dapr provides us tools to drive event-driven, fault tolerent architectures. Dapr also is introducing workflows that can statefully do long running tasks. Hope you have learned new stuff and enjoyed this article. Thanks.

