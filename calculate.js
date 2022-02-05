function calculate() {
  var sets = document.querySelector('name= "sets"');
  for (var count = 0, result = count; count <= sets; ++count) {
    result = count + result;
    console.log(result);
  }
  alert(
    `A "down workout" starting at ${sets} sets will result in ${result} repetions.\n \n GET AFTER IT!`
  );
}
