### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  primitives
  - string
  - number
  - boolean
  - undefined
  - NaN
  - null
  - object

  //Googled Answer
  - string
  - number
  - boolean
  - undefined
  - null
  - object
  - SYMBOL

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess:
== 'outside'


Then, past the code in your console and explain why you were right/wrong.

 == The console read undefined. I think it showed undefined because, while the text variable is global, it was not being passed into the function and thus the console.log, which is itself a method, couldn't utilize it.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JavaScript Object Notation. It is used to transport data as objects - to APIs, across components, etc

  //Googled Answer
  JavaScript Object Notation readable format for storing and exchanging data. It is written in object notation and any JavaScript object can be converted into JSON and send that JSON to the server and vice versa.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  Closures are functions with their own privately scope variables. Closures are the returned function within functions.


  //Googled Answer
  A closure is a function having access to the parent scope, even after the parent function has closed.


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = assignment
  == loose equals (truthy / falsey). Doesn't compare exact type.
  === Compares type and ensures both values on either side are exactly the same


  //Googled Answer
  = assignment
  == equality operator: Type conversion is done and can equate values to be equal
  === identity operator: Does not type convert, so the values must be the same to return true
