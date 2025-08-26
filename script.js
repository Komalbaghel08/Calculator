let store = "";
let cal = (value) => {
  let display = document.querySelector("#screen");

  
  const operators = ["+", "-", "*", "/", "%"];
  let lastChar = store.slice(-1);

  if (operators.includes(lastChar) && operators.includes(value)) {
    store = store.slice(0, -1) + value;
  } else {
    store += value;
  }

  display.innerHTML = store;
};


let res = () => {
  let display = document.querySelector("#screen");
  store = eval(store).toString();
  display.innerHTML = store;
};

let clr = () => {
  store = "";
  document.querySelector("#screen").innerHTML = "";
};

let delChar = () => {
  store = store.slice(0, -1);
  document.querySelector("#screen").innerHTML = store;
};
