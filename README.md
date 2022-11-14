# name of project
#### By Richelle Thorpe
#### desciption

## Technologies Used
- HTML
- CSS
- BOOTSTRAP
- JAVA SCRIPT
- MARKDOWN

## Description
This is an application that allows the user to select options to create a custom pizza and the site will display the unique cost of the pizza based upon the sections of the use. 

## Setup/Installation Requirements
- Clone this repository to your desktop.
- Navigate to the top level of the directory.
- Open index.html in your browser.

## Tests

Describe: Pizza()
Test: "It should return an object with the keys: (toppings, size)
Code: newPizza = new Pizza ("spinach", "large");
Expected Output: Pizza {toppings: 'spinach', size: 'large'}

Describe: Pizza.prototype.price()

Test: it will display price of $12 if size is small. 
Code: 
let newPizza = new Pizza("spinach", "small");
newPizza.price();
Expected Outut: 12

Test: it will increase price to $16 if size is medium. 
Code: 
let newPizza = new Pizza("spinach", "medium");
newPizza.price();
Expected Outut: 16

Test: it will increase price to $20 if size is large. 
Code: 
let newPizza = new Pizza("spinach", "large");
newPizza.price();
Expected Outut: 20

Test: it will increase the total cost by $.50 if spinach topping is added.
let newPizza = new Pizza("spinach", "large");
newPizza.price();
Expected Outut: 20.50

Test: it will increase the total cost by $.50 each if multiple toppings are added.
let newPizza = new Pizza(["spinach", "olives"], "large");
newPizza.price();
Expected Outut: 21

Test: it will increase the total cost by $2 each if meat toppings are added.
let newPizza = new Pizza(["spinach", "olives", "ham", "pepperoni"], "large");
newPizza.price();
Expected Outut: 25

## Known bugs

## License information
Copyright 2022 Richelle Thorpe;
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


