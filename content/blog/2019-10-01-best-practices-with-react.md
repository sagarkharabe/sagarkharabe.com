---
model: post
title: Best practices with React
description: Simple blog
author: Dante Calderón
path: best-practices-with-react
image: ../images/react-best-practices.png
date: 2019-10-01T20:16:06.768Z
published: true
tags:
  - ReactJS
  - Best Practices
---

Hello, I want to share my list that consists of some practices that I use to write components in **React** , surely you already know some of them. Of course this is my point of view, you can recommend some **practice** that you do not find on the list or suggest an improvement in the comments. I hope they serve you :sparkles: .

### 1.- Importing components and libraries

When importing components, what I do is separate the components that are external and those of my project with a blank line. For example:

```jsx{numberLines: true}{1-6,8-11}
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import plyr from 'plyr'
import 'plyr/dist/plyr.css'

import Header from './components/Header'
import Footer from './components/Footer'
import initialState from './data'
import './css/styles.css'

class MyComponent extends React.Component {
	...
}
```

### 2.- Class structure

The class structure of a component is ordered in the following order:

- Constructor
- State (`state`)
- PropTypes
- DefaultProps
- Functions life cycle React (`componentDidMount`, `componentDidUpdate`, etc)
- Function `render`

Of course, add only the elements that you are going to use. 
Let's see how to declare these components.

#### Constructor

In many occasions it is not necessary to use the constructor, since the most common use is to start the **state** and **binder** the functions. In case you want to use it, declare it right after the class is defined:

```jsx{numberLines: true}
class Component extends React.Component {
  constructor(...props) {
    super(...props)
  }
}
```

#### State

One way to declare and initialize the store is this way:

```jsx
class Component extends React.Component {
	constructor(...props) {
		this.state = {
			...
		}
	}
}
```

Although we can also do the same in this way:

```jsx{3-5}
class Component extends React.Component {
	// ... constructor(si es necesario)
	state = {
		...
	}
}
```

In this way we no longer need the constructor (except for specific cases) and our code looks more elegant :sunglasses:.

#### propTypes and defaultProps

`propTypes` and the `defaultProps` sare static properties. With ES6, they are defined in this way:

```jsx{2-4,6-8}
class Component extends React.Component {
	static propTypes = {
		...
	}

	static defaultProps = {
		...
	}
}
```

#### Writing our own functions

```jsx{4-6,8-10}
class Component extends React.Component {
  // ...

  fetchData = () => {}

  updateMenu = () => {}
}
```

Defining the functions in this way will no longer be necessary to **bind** the functions in the **constructor**.

:tada: Finally, this would be our component:

```jsx
class Component extends React.Component {
  // Constructor
  constructor(...props) {
    super(...props)
    // ...
  }

  // state
  state = {
    //...
  }

  // Lifecycle functions of react 
  componentDidMount() {}

  componentDidUpdate() {}

  // Our functions
  fetchData = () => {
    // ...
  }

  updateMenu = () => {
    // ...
  }

  // render function
  render() {
    return <div>Hello World</div>
  }
}
```

### 3.- Properties of the components

If your component has many properties, place each property on a separate line. For example:


```jsx
<input name='name' value={name} className='ContactForm__input' placeholder='Nombre' type='text' required onChange={this.handleChange} />
```

It would look better as:

```jsx
<input name='name' value={name} className='ContactForm__input' placeholder='Nombre' type='text' required onChange={this.handleChange} />
```

### 4.- Javascript within JSX

#### Single line

Add a space at the ends of the code.


```jsx
<h1>{ this.state.title }</h1>
<p>{ this.getBody() }</p>
```

#### Multiple lines

Devise the keys and leave the key left and right on a separate line each.


```jsx
<div>{this.date && <time>this.date</time>}</div>
```

### Conclusion

Having the defined structure of our code is very important especially when working in teams, following guidelines and syntactic and semantic rules will make our **code cleaner**.
