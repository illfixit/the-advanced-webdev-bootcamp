/* Advanced CSS Layout With Flexbox

WHAT IS FLEXBOX?
- It's a more efficient way to lay out, align and distribute space among items in a container
(even if their size is unknown)

All basic layouts are easily achieved using FLEXBOX!

Container Properties

flex-direction
justify-content
flex-wrap
align-items
align-content

Flex Item Properties
order
flex
flex-grow
flex-shrink
align-self

FIRST BIT OF MAGIC

* .container {
*     display: flex;
* }


TERMINOLOGY

flex container
***********************************************************
*      Main Axis                            |             *
* ----------------------------------------- |-----------> *
* ******************************************|*****        *
* *              **              *          |    *        *
* *              **              *          |    *        *
* *  flex item   **  flex item   *          |    *        *
* *              **              *          |    *        *
* *              **              *          |    *        *
* ******************************************|*****        *
*                                           | Cross Axis  *
*                                           V             *
***********************************************************

========================================================
========================================================
flex-direction
- specifies how items are placed in the flex container, defining the main axis and its direction

flex-direction: row; ------>
flex-direction: row-reverse;  <------
flex-direction: column; v 
flex-direction: column-reverse; ^

flex-wrap
specifies whether items are forced into a single line OR can be wrapped into multiple lines


Let's make our 9 boxes much larger

* .box {
*   width: 300px;
* }

|1|2|3|4|5|6|7|8|9|

WHAT IS GOING ON?? THOSE AREN'T 300px!

Add flex-wrap to our flex container

* .container {
*   flex-wrap: wrap;
* }

|1|2|3|4|5|6|
|7|8|9|

"There we go!"

wrap-reverse reverses the start/end of the cross axis

* .container {
*   flex-wrap: wrap-reverse;
* }

|7|8|9|
|1|2|3|4|5|6|
========================================================
========================================================
justify-content
Defines how space is distributed between items in flex container

Along the main axis

justify-content 
<<flex-end>>

* .container {
*   justify-content: flex-end;
* }

|            |1|2|3|4|

justify-content 
<<center>>

* .container {
*   justify-content: -> center;
* }

|      |1|2|3|4|     |

justify-content 
<<space-between>>

* .container {
*   justify-content: space-between;
* }

|1|   |2|   |3|   |4|


justify-content
<<space-around>>

* .container {
*   justify-content: space-around;
* }

| |1|  |2|  |3|  |4| |

========================================================
========================================================
align-items
- Defines how space is distributed between items in flex container

(!) Along the cross axis

align-items
<<flex-start>>

* .container {
*   align-items: flex-start;
* }

******************************
*   ** 1 ** 2 ** 3 ** 4 **   *
*   **   ** _ **   ** _ **   *
*   **   **   ** _ **   **   *
*   **   **   **   **   **   *
*   **   **   **   **   **   *
******************************

align-items
<<flex-end>>

* .container {
*   align-items: flex-end;
* }

******************************
*   **   **   **   **   **   *
*   **   **   ** _ **   **   *
*   **   ** _ **   ** _ **   *
*   ** _ **   **   **   **   *
*   ** 1 ** 2 ** 3 ** 4 **   *
******************************

align-items
<<stretch>>

* .container {
*   align-items: stretch;
* }

******************************
*   ** 1 ** 2 ** 3 ** 4 **   *
*   **   **   **   **   **   *
*   **   **   **   **   **   *
*   **   **   **   **   **   *
*   ** _ ** _ ** _ ** _ **   *
******************************

align-items
<<center>>

* .container {
*   align-items: center;
* }

******************************
*   **   **   **   **   **   *
*   ** _ ** _ ** _ ** _ **   *
*   ** 1 ** 2 ** 3 ** 4 **   *
*   ** _ ** _ ** _ ** _ **   *
*   **   **   **   **   **   *
******************************

align-items
<<baseline>>

* .container {
*   align-items: baseline;
* }


******************************
*   ** _ ** _ ** _ ** _ **   *
*   ** 1 ** 2 ** 3 ** 4 **   *
*   ** _ ** _ ** _ ** _ **   *
*   **   **   **   **   **   *
*   **   **   **   **   **   *
******************************


========================================================
========================================================
align-content
Defines how space is distributed BETWEEN ROWS in flex container

Along the cross axis

align-content
<<stretch>>

* .container {
*   align-content: stretch;
* }

*********
|1|2|3|4|
|5|6|7|8|
|9|
*********

align-content
<<flex-start>>

* .container {
*   align-content: flex-start;
* }

*********
|1|2|3|4|
|5|6|7|8|
|9|

*********

align-content
<<space-between>>

* .container {
*   align-content: space-between;
* }

*********
|1|2|3|4|

|5|6|7|8|

|9|
*********

align-content
<<space-around>>

* .container {
*   align-content: space-around;
* }

*********

|1|2|3|4|

|5|6|7|8|

|9|

*********

align-content
<<center>>

* .container {
*   align-content: center;
* }

*********

|1|2|3|4|
|5|6|7|8|
|9|

*********

========================================================
========================================================

***************************************************
*  Container Properties  *  Flex Item Properties  *
*                        *                        *
*  flex-direction        *  order                 *
*  justify-content       *  flex                  *
*  flex-wrap             *  flex-grow             *
*  align-items           *  flex-shrink           *
*  align-content         *  flex-basis            *
*                        *  align-self            *
*                        *                        *
***************************************************

========================================================
========================================================

align-self
allows you to override align-items on individual flex items



* .container {
*   align-items: flex-start;
* }
* 
* .box-2 {
*   align-self: flex-end;
* }

********************
* |1|      |3| |4| *
*                  *
*     |2|          *
********************



align-self

* .container {
*   align-items: flex-end;
* }
* 
* .box-3 {
*   align-self: stretch;
* }

********************
*         | |      *
*         | |      *
*   |1||2||3||4|   *
********************

========================================================
========================================================

order

specifies the order used to lay out items in their flex container


assign it to the individual items

* .box-1 {
*   order: 2
* }

|2||3||4||1| 

All items by default have an order of 0

* .box-1 {
*   order: 2
* }

|3||1||2||4|



order 
to make box-1 second in line...

.box-1 {order: 2;}
.box-2 {order: 1;}
.box-3, .box-4 {order: 3;}

|2||1||3||4|

========================================================
========================================================

So far, all of our items are equally sized

| |  | |  | |

What if I want a layout like this?

| ||     || |

flex
- Defines how a flex item will grow or shrink to fit the available space in a container
(it's actually a shorthand property for 3 other properties)

* flex:  
*   <'flex-grow'>
*        <'flex-shrink'>
*             <'flex-basis'>

flex-basis
- Sort of like width, but not.

Specifies the ideal size of a flex item BEFORE it's placed into a flex container.

flex-grow
- Dictates how the unused space should be spread amongst flex items

It's all about ratios!

========================================================
========================================================

flex-grow
To make all boxes share space evenly..

.box{
  flex-grow: 1;
}

| 1 | 2 | 3 |


flex-grow

* .box{
*   flex-grow: 1; 
* }
* .box-2{
*   flex-grow: 2;
* }

| 1 |  2  | 3 |

* .box{
*   flex-grow: 9; 
* }
* .box-2{
*   flex-grow: 18;
* }

| 1 |  2  | 3 |


box-1, box-2 {width: 100px}

||1||2|                |

* box-1, box-2 {
*   width: 100px;
*   flex-grow: 1;
* }

*     500px        500px
* |           ||           |
* |     1     ||     1     |
* |           ||           |


* box-1, box-2 {width: 100px};
* box-1 {
*   flex-grow: 1;
* }
* box-2 {
*   flex-grow: 4;
* }

*   260px        740px
* |       ||               |
* |   1   ||       1       |
* |       ||               |

========================================================
========================================================

flex-shrink
Dictates how items should shrink when there isn't enough space in contanier

*/
