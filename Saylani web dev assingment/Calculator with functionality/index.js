function getnum (num){
    var result = document.getElementById("result");
    console.log(num);
    result.value += num;
}
function clearResult(){
    
  var result = document.getElementById("result");
  console.log("result",result);
  result.value = ""
}
function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}