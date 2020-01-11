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

```js
const items = [
{ name : 'Bike',     price: 100  },
{ name : 'TV',       price: 200  },
{ name : 'Album',    price: 10   },
{ name : 'Book',     price: 5    },
{ name : 'Computer', price: 1000 },
{ name : 'Phone',    price: 25   },
]
```

## 1. Filter Method (array.filter())

The first method we are going to talk about is filter method. Let's assume that we want to get all the items whose price is less than or equal to 100. All you need to do is use filter method to filter out all items which doesn't have price less than 100.

```js
const filteredItems = item.filter(item => item.price <= 100 )
console.log(filterItems)

/** expected output:
[{ name : 'Bike',     price: 100  },
{ name : 'Album',    price: 10   },
{ name : 'Book',     price: 5    },
{ name : 'Phone',    price: 25   },]
 **/
```

## 2. Map (array.map())

Map method allows you to take an array and convert it into new array, so all the items in the array is going to look slightly different.

```js
const mappedItems = item.map(item => item.name)
console.log(mappedItems)

// expected output: ['Bike','TV','Album','Book','Computer', 'Phone']
```

You can also do this for prices. This is very convenient method and could be used over a for loop too.

## 3. Find (array.find())

The find method allows to find a single object in an array.

```js
const foundItem = item.find(
item => item.name === 'Book'
)
console.log(foundItem)

// expected output: {'name' : 'Book' , price : 5}

```

If you use findIndex method the function will return the index of first appearance of the element in the array.

## 4. ForEach (array.foreach())

ForEach method doesn't return anything & works similarly to a for loop but its going to take a function as a parameter.

```js
 items.forEach(item => {
  console.log(item.price)
}

// expected output: 100 200 10 5 1000 25
```

Similarly, you can print out the names of all the elements or anything else you want to do with every item inside the array. It just makes working with the arrays when you need to loop over them so much easier since you don't have to write clunky long for loop syntaxes like you normally have to.

## 5. Some Method (array.some())

Array.some() always return true or false. Say if we want to check if some of the items in our array has price less than 100.

```js
const hasInexpensiveItems = items.some(  
 item => item.price < 100
)
console.log(hasInexpensiveItems)

// expected output: true
```

## 6. Every Method (array.every())

Array.every() is very similar to Array.some(), expect it checks if every item in the array falls under the condition passed in the function or else it will return false.

```js
const allItemsInexpensive = items.some(   
item => item.price < 100
)
console.log(allItemsInexpensive)

// expected output: false
```

## 7. Reduce Method (array.reduce())

It is very different than all the other array methods above. It's actually does some operation on the array and returns a combination of all those operations. So, if we want to know the sum of prices of all the items  in our array, this is how we'll do.

```js
const total = items.reduce( (currentTotal, item) => item.price + currentTotal) , 0)
console.log(total)

// expected output: 1340

```

As we see the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value & the second parameter in reduce() is the initial value of the accumulator(currentTotal) which is 0 in this case.

`(currentTotal, item) => item.price + currentTotal`

The above method is called reducer function which itself accepts two arguments. The first parameter will be output of the previous iteration & second parameter will be the current item. 

## 8. Includes Method (array.includes())

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
const items = [1, 2, 3, 4, 5]

console.log(array1.includes(2));
// expected output: true

console.log(array1.includes(10));
// expected output: false

console.log([1, 2, NaN].includes(NaN));
// expected output: true
```

And thats all 8 JavaScript Array Methods I wanted to cover. Hopefully from this video, you guys were able to learn why these javascript array methods are so useful and not only cleaning up your code but allowing you do complex logic in such small amout of code.

If you guys did enjoy this article please leave a like and checkout my other content. 

Happy Coding!
