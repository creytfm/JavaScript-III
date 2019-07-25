/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding: most common 80% usage; pic 1 let of dot at call time
* 2. Explicit binding: tell the content what the this is going to be, or use call apply or bind.
* 3. New binding: whenever you have a function invoke with the new keyword.
* 4. Window binding: will default to window or global style, will return undefined in strict mode.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2

// code example for Implicit Binding
var Animal = function(name, age){
    return{
        name: name,
        age: age,
        sayName: function(){
            console.log(this.name);
      },
    }
  };

var micah = Animal('micah', 10);
micah.sayName();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
var sayAge = function(){
    console.log('My age is' + " ", this.age + " " +',My name is' + " ", this.name );
};
var chris = {
    name: 'Chris',
    age: 31
};

sayAge.call(chris);