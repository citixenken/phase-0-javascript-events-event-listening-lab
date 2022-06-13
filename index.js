function addingEventListener() {
  const input = document.getElementById("input");

  //   function clickPrompt() {
  //     alert("I've been clicked!");
  //   }
  //   input.addEventListener("click", clickPrompt);

  //shorthand
  input.addEventListener("click", function () {
    alert("I have been clicked!");
  });
}

//activating the eventListener
addingEventListener();
