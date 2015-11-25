function float_or_var(str){
  if (str.substring(0,4) == "<OMF" || str.substring(0,4) == "<OMV"){
    return true;
  }
}


function float_var_strip(str){
    if (str.substring(0,4) == "<OMF"){
      return parseFloat(str.slice(10,-3));
    }
    else if (str.substring(0,4) == "<OMV"){
      return str.slice(11,-3);
    }
}

function special_num_strip(str){
  return str.slice(22,-3);
}


function special_num(str){
  var check = str.substring(9,14)
  if (check == "nums1"){
    return true;
  }
  return false;
}

function strip_values(array){
  ret_array = [];
  for (i in array){
    if ( array[i] == parseInt(array[i]) ){
      ret_array.push(array[i]);
    }
    else if (float_or_var(array[i])){
      ret_array.push(float_var_strip(array[i]));
    }
    else if (special_num(array[i])){
      ret_array.push(special_num_strip(array[i]));
    }
  }
  return ret_array;
}


function inputParse(){
  var str = String(document.getElementById("formula1").value);
  str = str.slice(98,str.length-8);
  var sub_string = "<";
  var components = [];
  for (i = 1; i < str.length; i++){
    if (str[i] == "<"){
      if (sub_string != ""){
        components.push(sub_string);
      }
      sub_string = "";
    }
    sub_string += str[i];
    if (str[i] == ">"){
      if (sub_string != ""){
        components.push(sub_string);
      }
      sub_string = "";
    }
  }
  return components;
}

function button_pressed(){
  alert(inputParse());
}

