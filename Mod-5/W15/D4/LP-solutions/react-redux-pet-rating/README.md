# Practice: React-Redux Rating Input

In this practice, you will create a rating input for a form using React icons.

## Setup

Clone the starter repo accessible from the `Download Project` button at the
bottom of this page.

1. In the terminal, `cd` into the __backend__ directory of the starter.
2. Install dependencies with `npm install`.
3. Copy the __.env.example__ file to a new file in the same location called
   __.env__.
   * The server should be listening for requests on port `8000`.
   * The SQLite3 database file should be __db/dev.db__.
4. Run
   * `npm run db:setup` - create the database and tables and insert seed data
   * `npm start` - start the backend server

In a different terminal, `cd` into the __frontend__ directory of the starter.

1. Run `npm install` in the __frontend__ directory.
2. Run `npm run dev` in the __frontend__ directory to start the server.
   * Note that the __package.json__ now defines a proxy of
     `http://localhost:8000`. This will effectively forward any unrecognized
     requests to the port (`8000`) on which your backend is listening.
3. Open [http://localhost:5173] to see the frontend.

## Objective

Your objective is to change the rating input on the Create Review and Edit
Review forms from a number-based input to an icon-based input.

__BEFORE__ The forms currently receive rating input like this::

![number-input-gif]

__AFTER__ You want to change the forms so that they instead receive input like
this:

![rating-input-gif]

## Rendering the Paws

First, change the look of the input from a number input to 5 icons.

Begin by installing the React icons package in your frontend folder:

```sh
npm install react-icons
```

Next, open __src/components/PawsRatingInput.jsx__. At the top of the file,
import the `FaPaw` icon from the [Font Awesome 6] (`fa6`) package of React
icons:

```jsx
import { FaPaw } from 'react-icons/fa6';
```

Find the number input rendered in the `PawsRatingInput` component. __Under__
that input, render a `div` with a `className` of `rating-input`. Inside the
`div.rating-input`, render 5 more `div`s with a paw icon nested inside each of
them:

```jsx
      <div className="rating-input">
        <div className="filled" >
          <FaPaw />
        </div>
        <div className="filled" >
          <FaPaw />
        </div>
        <div className="filled" >
          <FaPaw />
        </div>
        <div className="filled" >
          <FaPaw />
        </div>
        <div className="filled" >
          <FaPaw />
        </div>
      </div>
```

(Don't forget to add ghost tags--i.e., `<>`...`</>`--so there will still only be
one top-level element.)

Refresh the browser. You should see 5 filled icons next to the number input.

The `div`'s `className` can either be `"filled"` or `"empty"`. If it is
`"filled"`, then the icon will be a dark brown. If it is `"empty"`, then the
icon will be a light brown. (The colors are specified in
__frontend/src/index.css__.)

Try changing any of the `div`s to have a `className="empty"` instead of
`"filled"` and observe the difference.

The component's `rating` prop is a number from `1` to `5` that determines how
many paw icons should be filled. If the `rating` is a `1`, then only the
left-most paw icon should be filled. If the `rating` is a `3`, then only the
three left-most paw icons should be filled. And so on.

Add logic to each `div`'s `className` attribute to reflect this behavior.

Refresh the browser. The paw icons beside each number should now reflect the
number displayed on each review.

![paw-icon-rating-img]

## Adding a hover effect

Icon rating inputs typically determine an icon's color based on which icon--if
any--has a pointer hovering over it.

To add the hover effect on the paw icons, you can use an event listener called
`onMouseEnter`. The `onMouseEnter` event listener on a paw icon will trigger
when a user's cursor first enters the area of the paw icon.

To make the effect temporary without changing the `rating` prop of the
`PawRatingInput` component, you can create a new state variable called
`activeRating` within the `PawsRatingInput` component. This state variable will
represent the ordinal position of the paw icon that a user is hovering over.
Instead of relying on the `rating` prop to determine the `div` icon's `"filled"`
or `"empty"` class name, use the `activeRating` state.

When the `onMouseEnter` event listener for the left-most paw icon is triggered,
the `activeRating` component state should be set to `1`. This should make only
the left-most paw icon `"filled"` and the rest of the paw icons `"empty"`. If
the `activeRating` state is set to `3`, then only the three left-most paw icons
should be `"filled"`, etc.

![add-mouse-enter-effect-gif]

The initial value of the `activeRating` component state should be set to the
`rating` prop so that it will display the `rating` of the review before any
hover effects are triggered.

![paw-icon-rating-img]

Notice that the hover effect is permanent: the color remains even after the user
stops hovering over the paw icons. To reverse the hover effect, you can use
a second event listener, `onMouseLeave`. The `onMouseLeave` event listener on a
paw icon will trigger when a user's cursor leaves the area of the paw icon.

When the `onMouseLeave` event listener for _any_ paw icon is triggered,
the `activeRating` component state should be set to whatever the `rating` prop
value is. This should make the number of `"filled"` paw icons the same as the
value of the number input when no paw icon has a pointer hovering over it.

![add-mouse-leave-effect-gif]

## Disabling the input

You probably noticed that you cannot change the number in the number input
display unless a Create Review or Edit Review form is active. The hover effect
on the paw icons should behave similarly: if those forms are not active, the
effect should be disabled.

This is the expected behavior of a disabled rating input:

![disable-input-gif]

Add logic to the `onMouseEnter` and `onMouseLeave` event listeners for each
paw icon so that they do NOT change the `activeRating` state when the `disabled`
prop is `true`.

## If `rating` changes, update `activeRating`

When a user edits a review's rating, the paw icons should automatically update
to reflect any changes to the number input's value, like so:

![update-rating-gif]

To do this, add an effect to the `PawRatingInput` component so that if the
`rating` prop changes, the number of `"filled"` paw icons will also update to
reflect the new `rating` prop value.

## On input change

To fully replace the number input with the paw icons input, the paw icons need
to be able to change the `rating` prop of the `PawRatingInput` component on a
click event on any of the paw icons.

![on-input-change-gif]

The `onChange` prop is a function that changes the value of the `rating` prop
and is defined in the `ReviewForm` component. This function is configured to
change the value of `rating` ONLY IF it is added to an event listener of an
[HTML element with an expected `value` attribute]. HTML elements with a tag of
`div` are not expected to have a `value` attribute, so this function will
not work if you attach it to a click listener on one of those elements.

Change the `onChange` function so that it accepts a `number` and calls
`setRating` with the `number`.

Add an `onClick` event listener to each of the paw icon `div`s which calls the
`onChange` function with the paw icon's order number. For example, when the
left-most paw icon is clicked, `onChange(1)` should be called. When the third
paw icon is clicked, `onChange(3)` should be called.

Refresh the browser and observe that clicking on one of the paw icons when
the edit form is active changes the number input value appropriately.
When the form is submitted, the edited review should have the rating of the
paw icon that was clicked.

Remove the number input from the `PawRatingInput` component as this is no longer
necessary.

![rating-input-gif]

Congratulations! You just implemented your own custom complex form input! You
can adjust this input to use any icon--and any number of icons--in your future
projects!

## BONUS: DRY up your code

The `PawRatingInput` component has a lot of repetitive code. Try DRYing up your
code in that component so that you only define the `onMouseEnter`,
`onMouseLeave`, and `onChange` event listeners once. This is tricky! Take your
time!

Here are some hints that may help you construct a DRYer component:

1. Abstract the paw icon to a single function that takes in the order number of
   that paw icon and that returns a JSX element representing a single paw icon.
   Render the return of that function 5 times for each of the 5 paw icons.
2. When the input is `disabled`, you don't want the event listeners to be
   attached to the paw icon. How do you make the number of props passed into a
   JSX element variable?
   * When you want to dynamically pass in some props into a component or JSX
     element, you can use an object and spread the object into props. Here's
     [React documentation on how to forward props] which may help you understand
     how to spread an object into props.

[http://localhost:5173]: http://localhost:5173
[Font Awesome 6]: https://react-icons.github.io/react-icons/icons/fa6/
[number-input-gif]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/number-input.gif
[rating-input-gif]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/rating-input.gif
[HTML element with an expected `value` attribute]: https://www.w3schools.com/tags/att_value.asp
[React documentation on how to forward props]: https://beta.reactjs.org/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax
[paw-icon-rating-img]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/paw-icon-rating.png
[add-mouse-enter-effect-gif]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/add-mouse-enter-effect.gif
[add-mouse-leave-effect-gif]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/add-mouse-leave-effect.gif
[disable-input-gif]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/disable-input.gif
[update-rating-gif]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/update-rating.gif
[on-input-change-gif]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-15/rating-input-practice/on-input-change.gif
