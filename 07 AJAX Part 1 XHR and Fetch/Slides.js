/* AJAX

Asynchronous
JavaScript
and
XML

AJAX IS NOT...
1) A Library
2) A Framework
3) A Technology

AJAX IS...
an approach

With AJAX, websites can send and request data from a server in the background without disturbing the current page
=>
Today's Single Page Apps

JavaScript
"The user scrolled to the bottom!"
"Quick, send a request to the server and get more content!"

Server
yeah, yeah here you go

JavaScript
"Now I'll just append the new data to the bottom of the page"

Making Requests with JavaScript
1) XMLHTTP Request
2) The Fetch API
3) 3rd Party Libraries: jQuery, Axios, etc.

XML AND
JSON

Data Formats
API's don't respond with HTML. 
API's respond with pure data, not structure.

They use more efficient data formats like XML and JSON

XML
Extended Markup Language

<pin>
  <title>Adorable Maine Coon</title>
  <author>Cindy S</author>
  <num-saves>1800</num-saves>
</pin>

XML is syntacticly similar to HTML, but it does not describe presentation like HTML does

JSON
JavaScript Object Notation

'pin': {
  'title': 'Adorable Maine Coon',
  'author': 'Cindy S',
  'num-saves': 1800
}

JSON looks (almost) exactly like JavaScript objects
JavaScript Object Notation

JSON is more commonly used these days because it works so well with JavaScript

Making Requests with JavaScript
1) XMLHTTP Request
2) Fetch API
3) 3rd Party Libraries: jQuery & Axios


XMLHTTP Requests
(Quite A Mouthful)

* var XHR = new XMLHttpRequest();
* XHR.onreadystatechange = function() {
*     if (XHR.readyState == 4 && XHR.status == 200) {
*       console.log(XHR.responseText);
*     }
* };
* XHR.open("GET", "https://api.github.com/zen");
* XHR.send();

WHAT ABOUT POST REQUESTS??

XMLHTTP Post Requests

* var XHR = new XMLHttpRequest();
* XHR.onreadystatechange = function() {
*   if (XHR.readyState == 4 && XHR.status == 200) {
*     console.log("it worked!");
*   }
* };
* 
* var url = "www.blah.com";
* XHR.open("POST", url);
* XHR.send("some data");

PROBLEMS WITH XHR
- Ugly, Bulky Syntax
- It's 16 Years Old
- No Streaming

ENTER THE FETCH API

This Is How You Make Fetch Happen

* fetch(url)
* .then(function(res) {
*   console.log(res);
* })
* .catch(function(error) {
*   console.log(error);
* });

Parsing JSON with Fetch

* fetch(url).then(function(res) {
*   return res.json();
* }).then(function(data) {
*   console.log(data);
* }).catch(function() {
*   console.log("problem!");
* });


Fetch 

// fetch(url, {  
//     method: 'POST',  
//     body: JSON.stringify({
//         name: 'blue',
//         login: 'bluecat',
//     })
// })    
// .then(function (data) {  
//   //do something 
// })  
// .catch(function (error) {  
//   //handle error 
// });

Handling Fetch Errors

// fetch(url)
// .then(function(res) {
//     if (!res.ok) {
//         throw Error(404); //up to you
//     }
//     return res;
// }).then(function(response) {
//     console.log("ok");
// }).catch(function(error) {
//     console.log(error);
// });

Refactoring Fetch

//  fetch(url)
//   .then(handleErrors)
//   .then(parseJSON)
//   .then(updateProfile)
//   .catch(printError)


No Support for Fetch in IE

*/
