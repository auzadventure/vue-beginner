# Vue.js 101 Beginners 

1 Introduction
2 Directives
3 Components
4 Transitions 
5 Vue Router 



## Tea Break System

Lionel the Tech Lead wants to get Teabreak drinks for his students. He is going to send 1 person to the store to buy drinks. But how can I person remember what everyone else wants to drink? How does he know how much to collect for everyone?

<br>
#### Build a list system to capture 

- Name and Drink
- Filter to prevent Name from getting a drink 
- Use V-model to insert into a list
- Calculate the total amount of money collected
- System to calculate who paid and got their drink  

How To Add to a list 
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); 
```

###### Array Filter 

```
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
} 
```
