function customRender(reactElement, container) {
  /*  const domElement = document.createElement(reactElement.type);
  domElement.textContent = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  container.append(domElement); */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (let prop in reactElement.props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.append(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click here to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
