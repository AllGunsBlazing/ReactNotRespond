// what is jsx -> js + html
// so react before compiling transforms the code into a tree structure, all the tags are going to be in a tree
//that is what we are trying to do here

function customRender(reactElement, container) {
 /* //container - the place where you will inject the element

  // we inject here using domElement

  const domElement = document.createElement(reactElement.type); // this is an empty container so we put the values or also called as attributes
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  
  // error : null is not an object (evaluating 'container.appendChild'
  // JavaScript means you're trying to use the appendChild method on a variable that's currently null.
  //  This typically happens when the HTML element you're trying to modify doesn't exist or hasn't been fully loaded into the Document Object Model (DOM) when your JavaScript code runs

  we don't want to use 
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target); 

  again and again because if we increase the number of attributes we have to use n times 
  
  v2 - better will be we use loops 
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props [prop]);
  }
    //adding the container
    container.appendChild(domElement);
}

// this object shows what will be rendered on the page 
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google!",
};
// this means whoever uses the customreact will have to use in this structure
// now we want a method that renders this

const mainContainer = document.querySelector("#root");
// The Document method querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors. If no matches are found, null is returned.

customRender(reactElement, mainContainer);
// injecting reactElement into mainContainer but we don't know how this customRender will work
// basically we are calling the function


/*
this is what happens in react basically 

*/