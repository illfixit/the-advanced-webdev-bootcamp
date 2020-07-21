/* CSS Animations Keyframes
 
Keyframes allow for much more complex 
multi-state animations
 
TRANSITIONS
- Go from state A to state B

KEYFRAMES
- Go from state A to state B to state C to state D to state E...



0%   color:red      font-size: 20px
25%  color:orange 
50%  color:yellow   font-size: 40px
75%  color:green
100% color:blue     font-size: 20px


Keyframe Syntax

Step 1: Define

// MUST START WITH @keyframes and name
* @keyframes rainbowtext {
*   0%{
*     color: red;
*     font-size:20px;
*   }
*   25%{
*     color:orange;
*   }
*   50%{
*     color:yellow;
*     font-size:40px;
*   }
*   75%{
*     color:green;
*   }
*   100%{
*     color: blue;
*     font-size:20px;
*   }
* }

Step 2: Apply

* p {
*   animation-name: rainbowtext; // MUST MATCH @keyframes NAME
*   animation-duration: 3s;
*   animation-timing-function: linear;
*   animation-delay: 0s;
*   animation-iteration-count: infinite;
* }

*
**
***
Let's take a look at some of the other  "newer" animation properties

All the usual suspects are here...

animation-name
animation-duration
animation-timing-function
animation-delay
 

animation-iteration-count
animation-fill-mode
animation-direction
animation-play-state
***
**
*

* * * * * * * * * * * * * * * * * * 
animation-iteration-count

How many times should it repeat?

animation-iteration-count: 1;
animation-iteration-count: 7;
animation-iteration-count: infinite;
* * * * * * * * * * * * * * * * * * 

* * * * * * * * * * * * * * * * * * 
animation-direction

animation-direction: forward;
animation-direction: reverse;
animation-direction: alternate;
* * * * * * * * * * * * * * * * * * 

* * * * * * * * * * * * * * * * * * 
animation-fill-mode

Specifies how an animation should apply styles before and after the animation

animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;
animation-fill-mode: none;
* * * * * * * * * * * * * * * * * * 

* * * * * * * * * * * * * * * * * * 
animation-play-state
Specifies whether the animation is running or paused

animation-play-state: paused;
animation-play-state: running;
* * * * * * * * * * * * * * * * * * 

Shorthand Animations

animation: 3s ease-in 1s 2 reverse both paused slidein;
animation: changecolor 3s linear 1s infinite alternate;
animation: jiggle 4s;

* * * * * * * * * * * * * * * * * * 
*/
