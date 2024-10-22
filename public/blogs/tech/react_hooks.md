---
author: "Borneel Bikash Phukan"
title: "9 React Hooks that you should be aware of as a Frontend Developer"
date: "1st April, 2024"
description: "In React's ever-evolving landscape, mastering hooks is essential for frontend developers. From useState for state management to useId for unique IDs, this post explores ten crucial React hooks. With streamlined development, enhanced code readability, and optimized user experiences, these hooks unlock React's full potential. Whether you're new to React or a seasoned pro, mastering these tools is key for success in modern web development."
---

React is perhaps the most popular frontend framework as of 2024, and also the most rapidly evolving framework. Hence a lot of frontend developers spend countless hours trying to master the concepts in the framework. For beginners getting started with React, it is essential that developers learn the concepts of React hooks. But what are React Hooks? React Hooks are special functions that allow React components to manage stateful logic, side effects and “hook into” React state and lifecycle features without using a class component. These hooks streamline the development process and also enhance code readability and reusability. In this blog post, we'll explore ten essential React Hooks that React developers should be familiar with. Whether you're a seasoned developer or just getting started with React, understanding these hooks is key to harnessing the full potential of the framework.

**useState**: This is the most basic react Hook function that allows state management in functional components. This hook declares a state variable, which is preserved after the component exits, unlike normal variables which disappear after the functional component exits. The only argument that it holds is the initial state which can be a number, string or a boolean. This hook returns a pair of values, which are the current state, and the function updating it. Hence it is defined as:

const [counter, setCounter] = useState(0);
Here counter is the current state, setCounter is the function that will update the value of the current state, when the user performs some activity and 0 despite being the initial state, also defines what type of state it will be. To give an idea of how it looks like in code, here is an example:

```
import React, { useState } from 'react';
export default function functionalComponent() {
    const [counter, setCounter] = useState(0);
        return (
            <div>
            <p>Counter value: {count}</p>
            <button onClick={() =>
                setCounter(counter+1)}>Increment</button>
            </div>
        );
    }
```

**useEffect**: Oftentimes, developers want to give abilities like fetching data, subscribing to an event or DOM manipulation to a component. These activities are called side effects and can be added to a component using the useEffect hook. useEffect tells React what the component should do after it renders. The useEffect hook is called within the scope of the functional component and anything that's written within useEffect() is called after the component is fully mounted. It is important to remember that side effects in React exist in two types: without cleanup and with cleanup. This is how it looks like when useEffect contains no cleanup function:

```
import React, { useState, useEffect } from 'react';
export default function functionalComponent() {
  const [counter, setCounter] = useState(0);
useEffect(() => {
    document.title = 'Counter: ${count}';
  });
  return (
    <div>
      <p>Counter value: {counter}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**useReducer**: This is a React hook that is similar to useState but is useful when managing more complex state logic, for example when managing a state that involves multiple sub-values or when the next state depends on the previous one. The useReducer hook is used to store and update states. This hook combined with other in-built hooks like useContext, can act as a good alternative for other global state management tools like Redux or Recoil. The reducer hook requires two important arguments, a reducer function and an initial state. The reducer function is a function that takes the current state and an action, and returns the new state based on the action. Here is an example:

```
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
```

In this reducer function, the actions are increment and decrement and it increases and decreases the value of state respectively. This reducer function is then used in the useReducer hook in the following way:

```
const initialState = { counter: 0 }
const [state, dispatch] = useReducer(reducer, initialState)
```

This useReducer() hook has an array with two elements. The state contains the current state of the component, and the dispatch is a function that is used to dispatch actions to the reducer function (you may pass a third optional argument like initialFunc, if needed). When an action is dispatched, the reducer function is called with the current state and the action object, and it returns the new state.

The combined code makes the useReducer hook example look like this:

```
import React, { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export default const Counter = () => {
  // State initializer with useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};
```

**useContext**: Before we go ahead learning about this important hook, we need to understand what is a Context in React. A context is a feature that permits passing of data through the component tree without having to pass component props manually at every level. It prevents code duplication and better code readability. When Context is used within a React functional component, useContext hook is used to access the values within this context. useContext allows components to subscribe to a context created by a React.createContext provider component and access its current value within the component tree.
Let us see how it is used. First, we need to create a React context in the following way:

import React, { createContext } from "react";
const MyContext = createContext();
This function returns a Context object, which consists of a Provider component and a Consumer component. The Provider component is used to wrap the part of the component tree where you want to share the context, while the Consumer component is used to consume the context value. Let's presume, the Context has a provider which is defined in the following way:

```
<MyContext.Provider value="Context Provider value">
      <ChildComponent />
</MyContext.Provider>
```

The context will be shared in the component. So let us define the ChildComponent:

```
import React, { useContext } from 'react';
export default const ChildComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};
```

The Context values that have been provided to the child component needs to be accessed. Hence here we can use the useContext() hook. The useContext has only the Context object as an argument. It is worth remembering that the Context object does not necessarily hold the information but only represents the type of information provided or read from components.
As per the code, the context values are accessed and stored in the contextValue variable. To summarise it, the complete example is as follows:

```
import React, { createContext, useContext } from "react";
const MyContext = createContext();
<MyContext.Provider value="Context Provider value">
      <ChildComponent />
</MyContext.Provider>
const ChildComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};
```

**useCallback**: Imagine a situation where you have to call a computationally intensive function every time the component is rendered and re-rendered. This will make your component consume more resources and thereby impact your web application’s overall performance. Hence there should be a way for the resource intensive function definition to be cached and called only when it is needed, without having to re-render the function definition everytime. This is when the useCallback() hook comes handy. This hook is perhaps one of the most important hooks that was introduced in React v16.8.0 onwards.
This hook should always be called at the top level of the component. The function has two parameters: a function that needs to be cached, and a list of reactive values (dependencies) which are referenced inside the function. It may be props, states, or any other values referenced inside the function. Here is an example of how useCallback is used:

```
import React, { useState, useCallback } from 'react';
export default const functionalComponent= () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + step * multiplier);
  }, [step, multiplier]);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      <p>Multiplier: {multiplier}</p>
      <button onClick={() => setStep(step + 1)}>Step++</button>
      <button onClick={() => setMultiplier(multiplier + 1)}> Multiplier++</button>
      <button onClick={increment}>
      Increment
    </button>
    </div>
  );
};
```

Here I have defined three state variables which will be used in the useCallback hook. It has three different buttons which increase the different state values. The Increment button uses the increment callback function from the useCallback() hook, which has already been calculated and needs no additional re-rendering every time the component renders.

**useMemo**: Like useCallback, useMemo is also a default React hook used for memoizing expensive computations in functional components. In other words, it is used to cache the value of a calculation between renders. Here the value of expensive function calls are stored and only returned when the same inputs occur again. This optimizes the web application’s performances by preventing unnecessary recalculations, thereby saving time and computational energy.

The **_useMemo()_** hook has two arguments: a function and a dependency array. The function represents the expensive computation that needs to be performed and memoized, and the dependency array stores the values, which when changed triggers the recalculation of the cached results or the memoized value. When there is no change in the values of the dependency array, the cached memoized value is called, instead of unnecessarily recomputing the function in the hook, thus avoiding unnecessary resource utilization. Given here is an example of using the hook:

```
import React, { useState, useMemo } from 'react';
export default function MyComponent() {
  const [value, setValue] = useState(0);
  const memoizedValue = useMemo(() => {
    // Expensive Computation
    console.log("Calculating memoizedValue...");
    return value * 2;
  }, [value]); // Recompute memoizedValue only if 'value' changes
  return (
    <div>
      <div>Value: {value}</div>
      <div>Memoized Value: {memoizedValue}</div>
      <button onClick={() => setValue(prevValue => prevValue + 1)}>Increment Value</button>
    </div>
  );
};
```

Here the memoizedValue will only be recalculated if the value of the useState hook changes (using the increment button). The console.log message is only logged when the memoizedValueis recalculated.

It is worth remembering that the only difference between useCallback() and useMemo() hooks is that useCallback() returns the memoized callback function itself while the useMemo() returns the memoized value.

**useRef**: If you wish to prevent specific values, states, or portions of the DOM from triggering re-renders in your component, the useRef hook comes very handy. It allows you to store mutable values that don't re-render when the component updates, as well as being used for the retention of references to DOM elements.
When the component renders, states and variables are reset, but certain scenarios might require the state or variables to be preserved across re-renders. Here, the useRef Hook proves its utility by enabling the creation of references to values that persist between renders.

Also the useRef Hook plays a crucial role in handling DOM elements within React. Directly accessing and modifying DOM elements can be challenging without the useRef Hook. Utilizing useRef, you can acquire references to specific DOM elements and perform operations on them, thereby obviating the necessity for external libraries or intricate workarounds.

References variables can be created in the following way:

```
import { useRef } from 'react';
const refVar = useRef();
```

And can be defined as:

```
<div ref={refVar}>Reference variable</div>
```

The reference value can be accessed using the .current property in the following way:

```
const refValue = refVar.current;
console.log(refValue);
```

Now if you have to perform DOM manipulation using useRef hook, it can be done in the following way:

```
import React, { useRef } from 'react';
export default function App() {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
  };
    const clearInput = () => {
        inputRef.current.value = '';
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
}
```

Here we define an inputRef using the useRef hook, and two functions, focusInput and clearInput. These functions focus on the input element, and clear the input field respectively, which is possible thanks to the use of inputRef reference hook.

**useTransition**: Often, when a component contains multiple states and state changes, the UI can be blocked for the user, causing poor user experiences. Hence in order to enforce smooth transition, while at the same time managing multiple state changes, the useTransitionhook comes very useful. It helps in the smooth transitioning or change of the UI when the value of state changes.

The useTransitionhook is declared in the following way: const [startTransition, isPending] = useTransition(). It returns an array containing two items. The isPendingflag tells if a transition is pending and the startTransitionfunction triggers the state update as a Transition.
Let us look at an example as to how it is used:

```
import React, { useState, useTransition } from 'react';
export default function TransitionExample() {
const [showText, setShowText] = useState(false);
const [isPending, startTransition] = useTransition();
const handleClick = () => {
  startTransition(() => {
    setShowText(!showText);
  });
};
  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        Toggle Text
      </button>
      {isPending ? (
        <p>Transitioning...</p>
      ) : (
        <div
          style={{
            opacity: showText ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          {showText ? 'Hello world!' : 'Goodbye world!'}
        </div>
      )}
    </div>
  );
}
```

This code has a boolean state called showTextwhich is used to show or hide a default set of text, and a useTransitionhook with a duration of 500 milliseconds. The useTransitionhook is triggered on clicking the “Toggle Text” button and when isPendingstate is false, it smoothly transitions to the second condition, a courtesy of the useTransitionhook.

**useId**: This React hook is used for creating unique IDs for HTML forms that are unique across the React application and persist between re-renders. The unique ID exists until the component is removed and another unique ID is generated when re-inserted. The use of the useId hook is plain and simple:

```
function Form() {
const usernameID= useId();
const nameID= useId();
const emailID= useId();
return (
   <>
     <label for={usernameID}>Username</label>
     <input id={usernameID} type="text" placeholder={'Generated id --> ${usernameID}'} />
     <label for={nameID}>Name</label>
     <input id={nameID} type="text" placeholder={'Generated id --> ${nameID}'} />
     <label for={emailID}>Email</label>
     <input id={emailID} type="email" placeholder={'Generated id --> ${emailID}'} />
   </>
 )
}
```

Here I am creating 3 unique IDs using the useId hook. This ID is unique all across the React App and persists across multiple renders. However it will only be removed upon the removal of the component and on re-inserting the unique ID changes.

In conclusion, React hooks offer powerful tools for state management, side effects, and performance optimization. In this post, we've explored ten essential hooks—from useState for state management to useId for unique IDs.

Mastering these hooks is crucial for developers, enhancing code readability and unlocking React's full potential. Whether you're a beginner or seasoned pro, integrating these hooks into your projects can streamline development and improve user experiences.

So, dive in, experiment, and elevate your React skills. With hooks, the possibilities are endless. Happy coding!
