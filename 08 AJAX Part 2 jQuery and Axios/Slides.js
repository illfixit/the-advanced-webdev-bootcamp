/* AJAX Part 2 jQuery and Axios


AJAX With jQuery

jQuery
"The Write Less, Do More JavaScript Library"

<< Without jQuery >>
// function fadeIn(el) {
//   el.style.opacity = 0;

//   var last = +new Date();
//   var tick = function() {
//     el.style.opacity = +el.style.opacity 
//     + (new Date() - last) / 400;
//     last = +new Date();

//     if (+el.style.opacity < 1) {
//       (window.requestAnimationFrame && 
//         requestAnimationFrame(tick)) 
//         || setTimeout(tick, 16);
//     }
//   };
//   tick();
// }
//
// fadeIn(el);

<< With jQuery >>

// $(el).fadeIn();

The Same Applies For Making Requests!

Making A Request And Parsing JSON

<< Without jQuery >>

// var request = new XMLHttpRequest();
// request.open('GET', '/my/url');
//
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     var data = JSON.parse(request.responseText);
//   } else {
//     //do something
//   }
// };
//
// request.onerror = function() {
//   // There was a connection error
// };
//
// request.send();

<< With jQuery >>

// $.getJSON('/my/url', function(data) {
//   ...
// });

jQuery AJAX Methods
+ $.ajax
+ $.get        =  \
+ $.post       =  | Shorthand Methods
+ $.getJSON    = /


$.ajax
The "base" jQuery Method

// $.ajax({
//   method: "GET",
//   url: "some.api.com",
// })
// .done(function(res) {
//   console.log(res);
// })
// .fail(function(){
//   //do something
// })

just creates an XMLHttpRequest under the hood

What about parsing JSON?
- jQuery tries to get the type of data and parses it if it looks like JSON

AXIOS

axios.get
Makes a get request!

// axios.get(url)
// .then(function(res){
//   console.log(res.data);
// })
// .catch(function(e){
//   console.log(e);
// })

just creates an XMLHttpRequest under the hood

Handling Errors With Axios

// if (err.response) {
//   console.log("Problem With Response");
// } else if (err.request) {
//   console.log("Problem With Request!");
// } else {
//   console.log('Error', err.message);
// }


*/
