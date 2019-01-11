# Answers

1.  What is React JS and what problems does it try and solve?
-- React JS is a component library for building web applications which was developed by a team of developers at Facebook Inc to solve the problem of scalability by creating a more efficient way of managing large amounts of data through reusable components and class constructors. React utilizes a virtual DOM where it renders state data to the browser and only updates the right data when there are changes.

2.  What does it mean to _think_ in react?
-- To think in react means to break down an application into components with a hierarchical structure such as a tree, where those components are then built up to interact with one another to render the application or User Interface.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
-- A class component makes use of state which always gets initialized in the constructor. A class/stateful component also makes use of the 'this' keyword which refers to a specific instance of the component.
-- On the other hand, functional components are just javascript functions which take in optional inputs 'props' and render them. Just like its definition, presentational components are centered on hoe thinks look and deals with describing the user Interface.

4.  Describe state.
-- A state is an object owned and limited to the component where it is declared. A state can be set and can change based on current data available to the declaring component. The state is also available to other child components as props.

5.  Describe props.
-- A prop is an input accepted by a parent component and passed down to child components through state. They are immutable/Read-Only. 
