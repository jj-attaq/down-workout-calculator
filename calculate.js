function caluclate() {
  var sets = document.getElementById("numberOfSets");
  for (var count = 0, result = count; count <= sets; ++count) {
    result = count + result;
    console.log(result);
  }
}
