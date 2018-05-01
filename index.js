function takeANumber(arr,str) {
  arr.push(str);
  return `Welcome, ${str}. You are number ${arr.length} in line.`
}
function nowServing(arr) {

  if (arr.length==0) {
    return"There is nobody waiting to be served!"
  }
 var name=arr.shift()
 return `Currently serving ${name}.`
}
