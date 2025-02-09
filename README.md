# Code example of a simple React Application

In this repo we are going throught the basics of building components, importing and exporting, passing props and functions down to child components, utilizing `useState`, using `useEffect` and fetching simple data from JSON Placeholder.

The finished application can be view in the two included screenshots. One is when the signed in state is true and the other when it is false. The counter is just a basic counter that can increment and decrement the count. It is handled with `useState`. The posts that you can see are fetched from JSON placeholder inside a useEffect that only runs on the first render of the App component. The app component then passes down those props to a component that specifically handles the posts and maps out several individual post components. Each post component accepts props from the parent. More logic can be added to this structure based on the needs of the application.

## Recap of Friday the 7th of February

You can find the recordings of the lesson on this link: https://drive.google.com/drive/folders/19iY3qj49dm0if13C-WidRMQNjcFfthQT?usp=drive_link

In short we created a few components and passed around props and let React handler the rerender part whenever a prop is changed or updated. Remeber, props always flow from a parent component down to a child component so it's important to place the state at the right place _( i.e. in the right component )_. If several components need access to the same state it might be a good idea to 'lift' up the state to a common parent component.

We introduced `useState` by introducing a counter that can be incremented and decremented. We also added functionality for resetting the count just to make sure that we utilize the two differnet set-approaches, one with a callback as an argument and one with just the new value. We also created a login state that can be updated with a button click.

## Next steps for the application _( suggestions )_

1. Maybe include more examples of `useState`, the two that we have _( the counter and the login state )_ might be sufficient. Depends on the class.
2. Make the `AuthBadge.tsx` change color depending on the `authenticated` state, using classes.
3. Introduce `useEffect` and the different approaches regarding the dependency array. Give examples with logs when the different `useEffect` runs
4. Fetch data from the JSON placeholder in a useEffect. Handle the data accordingly.
5. Pass the data to dedicated components that renders out the data with a map and passes down props.
6. If time exists:
   - delete posts
   - edit posts
   - move posts
   - mark them as read
   - save data to local storage to prevent unessecary fetches to the JSON placholder API.
   - introduce custom hooks, create a simple hook, for example, that handles the authenticated state and use it in several components
