<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 14` `W14D1`

---

# Context Day!
## lots of practice today
## PA released tonight!


---

## Review from yesterday...
- useState - component state
    - TOWTACRITPTSSFWANRIM!!!!!!!!
- useEffect - side effects
    - dependancy array
- React Component Lifecycle
- Forms
    - controlled inputs
    - front end validations




---

## What is context?
- global state for our applications
- our alternative to prop threading/drilling
- can even do more, like let sibling components share info


---

# Draw time! ✏️



---

## Reminder to Brad that he drew all he wanted too

- prop threading (only go down)
- parent/child render cycle
- using context instead
- how it helps us solve lots of issues
- we might not need it, depends on our app and its structure
- how we can have multiple contexts
- go to the docs!
- https://react.dev/reference/react/createContext



---


## The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---

# The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---

## More on context

- Context allows "global" data in a React application and stores a single value 
- Provider is used to wrap a React application to enable all components in the application to access the context's value. 
- A Consumer is a React component that reads a context's value.
- we can have multiple contexts if needed


---


## Wait did we just see that the Provider is a "wrapper"?

- its not talking about Snoop
- using our `props.children` here
- we saw this on Tuesday!
- this can wrap our entire `<App />`

```jsx
export default function PurpleWrapper(props){
    console.log("purple", props)
    return (
        <div style={{ color: "purple"}}>
            { props.children }
        </div>
    )
} 
```


---


## Context setup

- we should make a context folder inside our src folder for our contexts


```jsx
import { createContext } from 'react';

export const ThemeContext = createContext();
export const AuthContext = createContext();
```


---

## Using a Provider

- should be defined in our context files
- will allow us to provide other child components with the state and state setters defined in the component

```jsx
export default function ThemeProvider(props){
    const [theme, setTheme] = useState(speedy);

    return (
        <ThemeContext.Provider value={{ puppyType, setPuppyType}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
```


---

## Wrapping what components we want to have the context

- main.jsx, we don't come here often!
- if we need our whole app to be able to consume that context, then this is the place to do it!

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

---

## Consuming context

- yum?
- we use the useContext hook
- here we just grabbed the state, we can grab the setter too
```jsx
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Landing = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <h1 className={theme}> Welcome to our site! </h1>
  );
};

```

---



`useContext` will cause your component to re-render if the value of the
context changes. The flow of context will look something like this:

* The context value is set by the provider and will be stored and maintained as a state variable in the provider component
* The context value can be read by any consumer components
* When the value of the provider component's state variable changes, the
  provider component will re-render and the context's value will change
* The consumer components are subscribed to changes to the context value through the `useContext` hook so they will re-render even though there are no `props`  or component state changes.


---


## Lets implement a theme in Patchstagram

- great use case for context
- most if not all components will interact with a theme

---


## Lets practice

- pair through Practice: Context Dynamic Provider (30 min)
- pair through Practice: Context Dynamic Consumer (30 min)
- well come back and talk about it


---




## How did we do?
- lets implement another context in Patchstagram
- Posts can be stored in context (we will use redux for this next week)


---


## What now?
 - halway there... (Brad might sing)
 - Long Practice - Context with Tests
 - Greenhouse long practice! SO fun and great practice!
 - if you get done early, hit up those projects you didn't get to finish
 - PA will be released by EOD
 - Tomorrow is a study day. We will release the most amazing PA walkthrough video you have ever seen in the afternoon






