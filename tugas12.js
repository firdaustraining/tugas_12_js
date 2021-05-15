function buah() {
  var data = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log(data);
  data.pop();
  console.log(data);
  data.shift();
  return data;
}

console.log(buah());
