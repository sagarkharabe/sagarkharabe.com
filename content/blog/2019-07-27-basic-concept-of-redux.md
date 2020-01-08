---
model: post
title: Basic Concepts of Redux
description: >-
  Redux is a small Javascript library created by Facebook that serves to control the status of an application.
author: Sagar Kharabe
path: basic-concepts-of-redux
image: ../images/conceptos-basicos-redux.jpg
date: '2019-06-29T09:56:23+05:30'
published: true
tags:
   - ReactJS
   - Redux
   - Basics
---
Redux is a small Javascript library created by Facebook that serves to control the status of an application. It is based on the Facebook [Flux](https://facebook.github.io/flux/) architecture.
Redux is commonly used with [React](https://es.wikipedia.org/wiki/React), but can also be used with [Angular](https://es.wikipedia.org/wiki/Angular_(framework)).

### The three principles of React

#### Only source of truth
The **status** of your entire application is stored in a single **store**.
#### Read-only status
 The **only way** to modify the state is by issuing an **action** , an object describing what happened. This is done through the function `dispatch()`.
#### Changes are made with pure functions
 To specify how the status tree is transformed by actions, pure **reducers** are used . Reducers are pure functions that take the previous state and an action, and return a new state.

### Main concepts

#### Actions

The actions is the information we send to the store, they are sent through the `dispatch(action)` store function . According to this information the reducers will change the status of our application.

It is basically an object that contains a **type** ( `type` ) and **data** , for example:

```javascript
let myAction = {
   // The action, a unique identifier (usually a descriptive string) 
   type: 'ADD_USER',

  // Then the data we want to send. 
   user: {
      name: 'JK Rowling',
      age: 52,
      ...
   },
   typeUser: 'PREMIUM',
   ...
}
```

Finally we sent the function through `dispatch(action)`:

```javascript
store.dipatch(myAction)
```

#### Action creators

The **creators of actions** are functions that serve precisely to create actions, they help us structure and write less code.

Following the example above, we will create a function to add users.

```javascript
function addUser(name, age, typeUser, ...) {
   return {
      type: 'ADD_USER',
      user: {
         name,
         age
         ...
      },
      typeUser
   }
}
```

Then using this function we can add users.

```javascript
store.dispatch(addUser('JK Rowling', 52, 'PREMIUM'))
store.dispatch(addUser('Harry Potter', 12, 'PREMIUM'))
store.dispatch(addUser('Draco Malfoy', 12, 'BASIC'))
```

In this way we save ourselves from writing a lot of code and our code is more structured.

#### Reducer

A reduce is a [pure function](http://www.etnassoft.com/2016/06/21/las-funciones-puras-en-javascript-concepto-ejemplos-y-beneficios/)that is responsible for transforming the current state to a new state. 
The prototype of the function is as follows:

```javascript
function myReducer(state, action) {
   ...
   // Acá se modifica el estado de acuerdo a la accion(action) que recibamos
   ...
   return newState
}
```

#### Store

The **Store** where all the data of our application is stored and has the following responsibilities:

* It contains the state ( `state` ) of the application, the state is that `this.state` of a React component, here all the application data will be stored and will be unique.
* Allows access to the state via `getState()`.
* Allow the status to be updated via `dispatch(action)`.
* Register the listeners via `subscribe(listener)`.
* Handles the cancellation of the **listeners** registration via the return of the function of `subscribe(listener)`.

To create a **Store** , we need the `createStoreredux` function and we need at least one `reducer` that will be passed as a parameter.

```javascript
import { createStore } from 'redux'
...
let store = createStore(reducers, initialState)
```

As we see, it createStorereceives 2 parameters:

**reducers** : The reduce (s) that will be called when you want to update the status.
**initialState** (optional) : The initial state for the state.

### Conclusión

It is very simple to start using Redux in our application, here I leave you some useful links that will help you enter more deeply into the world of Redux.

* https://redux.js.org/ (Official Documentation)
* [Advance Redux Course](https://www.youtube.com/watch?v=RZNNu2pO49g&list=PLxyfMWnjW2kuyePV1Gzn5W_gr3BGIZq8G)
