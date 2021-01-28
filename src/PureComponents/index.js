/*
  * Pure Components Do not depend on or modify the state of variables outside their scope.
  * The variables inside that component should not be impacted or changed
  * by the outer scope variable/input arguments.
  ! It should not introduce following side effects:
  ! - Modifying any external variable or object property.
  ! - Logging data to the console.
  ! - Writing Data to a file.
  ! - Writing data to the network.
  ! - Triggering any external process.
  ! - Calling any other functions with side-effects.
  ! - Making Asynchronous Data Calls.

  * In react, The pure components do not re-render on giving the same value
  ! Prevents re-rendering of Component if props or state is the same.
  ! Takes care of “shouldComponentUpdate” implicitly.
  ! State and Props are Shallow Compared.
  ! Pure Components are more performant in certain cases.

  ! Note: The State and Props are Shallow Compared.
  ? How does shallow comparison works for the primitive and non-primitive?
  * Comparing change in primitive is no issue.
  *  Issue comes when you update the same non-primitive value as it is being used by reference,
  * the reference does not changes, so the pure-component does not updates.


  * Take Away
  * Use Pure Components for primitive value to avoid any major complexity.
  * Use Pure Components, in the case when the props and state changes are made to
  * primitive type variable, state and props changes to reference variable may
  * lead to incorrect results and inconsistent rendering.
  *
  * You can use pure-components for non-primitive data if you can change
  * the reference of the variable you are updating, either in state or in props
*/

// * Example 1: No re-rendering
import React, { PureComponent } from "react";

class PrimitivePureComponent extends PureComponent {
  state = {
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: 0 });
    }, 1000);
  }

  render() {
    return <p>{this.state.counter}</p>;
  }
}

export default PrimitivePureComponent;

export class NonPrimitivePureComponent extends PureComponent {
  state = {
    array: [1, 2, 3],
  };

  componentDidMount() {
    const { array } = this.state;
    let count = 0;
    setInterval(() => {
      this.setState({
        array: [...array, count + 1],
      });
      count++;
    }, 3000);
  }

  render() {
    const { array } = this.state;
    return <div>Length of array is {array.length}</div>;
  }
}
