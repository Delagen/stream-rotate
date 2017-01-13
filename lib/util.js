var humanFormat=require("human-format");

module.exports.merge = function merge(obj, options){
  for(i in options) obj[i] = options[i];
  return obj;
};

module.exports.getBytes = function getBytes(size){
  var result = null;
  if(typeof size === "number") result = size;
  else if(typeof size === "string"){
      try {
        result = humanFormat.parse(size, {scale: "binary"});
      } catch(exc){}
  }
  return result;
};

module.exports.getTimestamp = function getTimestamp(d){
  var d = d || new Date();

  return zpad(d.getMonth()+1)
    + zpad(d.getDate())
    + (""+d.getFullYear()).slice(2)
    + "_"
    + zpad(d.getHours())
    + zpad(d.getMinutes())
    + zpad(d.getSeconds());
};

function zpad(n){ // zero pad
  return pad(n+"", 2, 0);
}
module.exports.zpad = zpad;

function pad(str, len, chr, right){
  while(str.length < len){
    if(right) str += chr;
    else str = chr + str;
  }
  return str;
}
module.exports.pad = pad;
