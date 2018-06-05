### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

The place where the computer stores context is the call stack. Every time a function is called, the current context is stored on top of the stack. When a function returns, it removes the top context from the stack that uses that context to continue execution.

Additionally, having this drawn out for me really helped clarify scope for functions being passed as arguments.

#### 2. What is a linter for? Do you think they are useful? Explain why/why not.

Linters help the programmer find errors in the code or ways to optimize their code as they write it. I think it can be useful to use as things become complicated, but I think it may be easy to rely on it as a crutch - and in some cases hurt (i.e. yelling that semi-colons aren't used on every line.)

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer.

  //Your Answer
Global scope is at the outermost accessibility and can be accessed by any function.

Local scope is the availability of variables within functions.

For example:
var a = "Hello"

function sayHi() {
  var b = "Brian"
  console.log(b) // This is invisible to any function outside of sayHi()
}

console.log(a) // "Hello"
console.log(b) // This will get an error

  //Googled Answer
A variable's scope is the range of the script where it is visible - either global or local. Global exists only once in a script and is visible in every function. Local has limited scope and exists only within the block that it is declared in.

#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises.

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource.

FreeCodeCamp is a great resource. The earlier JavaScript exercises are a little too easy, but overall I like the resource.


#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit -m "I'm about to push this file / directory!"
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other?

console.log will only display within the console and is not really useful outside of troubleshooting / debugging.

Return is a critical aspect of functions and outputs some sort of value when a function is called. Typically functions always have a return.

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

// Your Answer
Because JavaScript is "dynamically" typed, it means that the variable types can be inferred and constantly change by just using the assignment operator (=).

// Googled Answer
When the majority of its type checking is performed at run-time as opposed to at compile time. In dynamic typing, types are associated with values not variables.
