var sets = prompt("How many sets do you want to do?");
for (var count = 0, result = count; count <= sets; ++count) {
  result = count + result;
  console.log(result);
}
