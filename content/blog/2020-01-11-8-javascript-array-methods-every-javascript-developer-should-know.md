---
model: post
title: 8 Javascript array methods every javascript developer should know!
description: 8 Javascript array methods every javascript developer should know!
path: 8-Javascript-array-methods-every-javascript-developer-should-know
image: ../images/javascript-array-methods.jpg
date: 2020-01-11T07:50:50.162Z
published: true
style: default
tags:
  - JavaScript
  - Array Methods
---
 Arrays is one the most common thing you are going to use as a programmer. So, today I'm going to cover 8 javascript array methods which are going to make your life so much easier and so much enjoyable.

Below  we have array of items which we are going to use with different array methods.

```
const items = [{ name : 'Bike',     price: 100  },{ name : 'TV',       price: 200  },{ name : 'Album',    price: 10   },{ name : 'Book',     price: 5    },{ name : 'Computer', price: 1000 },{ name : 'Phone',    price: 25   },]
```

## 1. Filter Method (array.filter())

The first method we are gonna talk about is filter method. Lets assume that we want to get all the items whose price is less than or equal to 100. All you need to do is use filter method to filter out all items which doesn't have price less than 100.

```
const filteredItems = item.filter(item => item.price <= 100 )console.log(filterItems)/** Result[{ name : 'Bike',     price: 100  },{ name : 'Album',    price: 10   },{ name : 'Book',     price: 5    },{ name : 'Phone',    price: 25   },] **/
```

## 2. Map (array.map()) 

Map method allows you to take an array and convert it into new array, so all the items in the array is going to look slightly different.

```
const mappedItems = item.map(item => item.name)console.log(mappedItems)/** Results['Bike','TV','Album','Book','Computer', 'Phone']**/
```

You can also do this for prices. This is very convenient method and could be used over a for loop too.

## 3. Find (array.find()) 

The find method allows to find a single object in an array.

```
const foundItem = item.find(item => item.name === 'Book')console.log(foundItem)/** Results{'name' : 'Book' , price : 5}**/
```

If you use findIndex method the function will return the index of first appearance of the element in the array.

## 4. ForEach (array.foreach)
