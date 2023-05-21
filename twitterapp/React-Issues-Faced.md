1. useEffect on Context
    ChatGPT
    The useEffect hook in React is commonly used for handling side effects in functional components. While it is typically used to handle effects related to component lifecycle, such as fetching data from an API or subscribing to events, it can also be used in conjunction with context.

    When it comes to using useEffect with context, there are a few scenarios to consider:

    Consuming Context Data: If your component needs to consume context data and perform some side effects based on changes to that data, you can use useEffect in combination with the useContext hook. The useContext hook allows you to access the context value within your component, and you can then use useEffect to watch for changes in the context value and trigger appropriate side effects.


2. Big Issue in modifying SVG data, filling custom color, creating and exporting a SVG component out of it !!!!