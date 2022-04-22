function calculate() {
  const sets = +document.getElementById('numberOfSets').value; // add a + in front of document to turn into number value, letters will be NaN
  for (i = 0, result = i; i <= sets; ++i) {
    result = i + result;
    // console.log(result);
  }
  console.log(typeof sets);
  //
  alert(`A "down workout" starting at ${sets} sets will result in ${result} repetions.\n \n GET AFTER IT!`);
  /*
  if (typeof document.getElementById('numberOfSets') !== "number") {
    alert(`Please enter a valid number.`)
  }
  else {
    alert(`A "down workout" starting at ${sets} sets will result in ${result} repetions.\n \n GET AFTER IT!`);
  }  
  */
}