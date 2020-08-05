/* Component Lifecycle Methods

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Component Lifecycle

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Describe the component lifecycle methods
>> Describe use cases for lifecycle methods

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lifecycle Methods

Mounting

>> constructor()
>> componentWillMount()
>> render()
>> componentDidMount()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lifecycle Methods

Unmounting

>> componentWillUnmount

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lifecycle Methods

Updating

>> componentWillReceiveProps(nextProps)
>> shouldComponentUpdate(nextProps, nextState)
>> componentWillUpdate(nextProps, nextState)
>> render()
>> componentDidUpdate(prevProps, prevState)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Forcing Update

Updating

forceUpdate(callback)

Skips shouldComponentUpdate and forces a render.  Should be avoided in most cases.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lifecycle Methods
https://facebook.github.io/react/docs/react-component.html

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Lifecycle Method Examples

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

componentWillUnmount

Example

const NUM_BOXES = 32;
class Boxes extends Component {
  constructor(props) {
    super(props);
    const boxes = Array(NUM_BOXES).fill()
      .map(this.getRandomColor, this);
    this.state = {boxes};

    this.intervalId = setInterval(() => {
      const boxes = this.state.boxes.slice();
      const ind = Math.floor(Math.random()*boxes.length);
      boxes[ind] = this.getRandomColor();
      this.setState({boxes});
    }, 300);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Flag App

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

REST Countries API

GET https://restcountries.eu/rest/v2/all

[ ...,
 {"name":"United States of America",
  "population":323947000, "latlng":[38.0,-97.0],
  "flag":"https://restcountries.eu/data/usa.svg"},

  {"name":"Mexico",

    "population":122273473,"latlng":[23.0,-102.0],

    "flag":"https://restcountries.eu/data/mex.svg"},
  ...

]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
