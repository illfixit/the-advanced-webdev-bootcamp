/* Create React App and Props

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create React App

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Describe Webpack
+ Install Create React App
+ Make an application using Create React App

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Webpack
A module bundler for modern JavaScript applications

+ Combines different JS files into a bundle.js
+ Has a plugin system to run tools like babel
+ Also bundles other assets like css, images, etc

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create React App uses Webpack

Priorities
1. Learn React
2. Learn to configure Webpack

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

==========================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JavaScript Import Statement

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Import a component from another file
+ Export a component from a file
+ Use export default vs non default export

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

MDN Import

The static import statement is used to import read only live bindings which are exported by another module. Imported modules are in strict mode whether you declare them as such or not. The import statement cannot be used in embedded scripts unless such script has a type="module". Bindings imported are called live bindings because they are updated by the module that exported the binding.

There is also a function-like dynamic import(), which does not require scripts of type="module".

Backward compatibility can be ensured using attribute nomodule on the <script> tag.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
==========================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Props

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Define props
+ Use props inside of a component

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Props

- Immutable data passed to your components
- Accessible in your component as an object called: this.props

class ShowText extends Component {
  render() {
    // Inside the render method, we have
    // access to this.props (this refers
    // to the ShowText instance).

    return <div>{this.props.text}</div>;
  }
}


Passing In Props To A Component

<ShowText
  text="This is a prop named text"
/>

class ShowText extends Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Props Are Immutable

class ShowText extends Component {
  render() {
    // Never ever change this.props

    this.props.text = "WRONG!!";   // Causes a TypeError
    
    this.props = {}; // Never do this!!

    this.props.newProp = "Also wrong"; // Use default props

    return <div>{this.props.text}</div>;
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
==========================================================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

defaultProps

propTypes

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

Use defaultProps to give props a default value
Use propTypes to specify what props a component is expecting

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

defaultProps
Default values for props in a component

class IngredientList extends Component {
  static defaultProps = {
    ingredients: []
  }

  render() {
    return (
      <ul>
        {this.props.ingredients.map((ing, index) => (
           <li key={index}>{ing}</li>
         ))}
      </ul>
    );
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

defaultProps
This syntax also works

class IngredientList extends Component {
  render() {
    return (
      <ul>
        {this.props.ingredients.map((ing, index) => (
           <li key={index}>{ing}</li>
         ))}
      </ul>
    );
  }
}

IngredientList.defaultProps = {
  ingredients: []
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class App extends Component {
  static defaultProps = {
    recipes: [{
      title: "Spaghetti",
      ingredients: ["flour", "water"],
      instructions: "Mix ingredients",
      img: "spaghetti.jpg"
    }]
  }
  render() {
    return (
      <div>
        {this.props.recipes.map((r, index) => (
           <Recipe key={index} title={r.title}
                   ingredients={r.ingredients}
                   img={r.img} instructions={r.instructions}
           />
         ))}
      </div>
    );
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

PropTypes

Development time type checker for your props

Installation:

npm install --save prop-types

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import PropTypes from 'prop-types';

class IngredientList extends Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string)
                          .isRequired
  }
  render() {
    return (
      <ul>
        {this.props.ingredients.map((ing, index) => (
           <li key={index}>{ing}</li>
         ))}
      </ul>
    );
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

==========================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Facebook PropTypes Docs
https://facebook.github.io/react/docs/

typechecking-with-proptypes.html

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typechecking With PropTypes

Note:

React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead.

We provide a codemod script to automate the conversion.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. 

But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
