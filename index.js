var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  var num = katzDeliLine.length + 1;
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${num} in line.`;
}

function nowServing() {
  var numOne = katzDeli[0];
    if(katzDeli.length === 0) {
      return `There is nobody waiting to be served!`;
    } else {
      katzDeli.shift(0);
      return `Currently serving ${numOne}.`;
    }
}

function currentLine(katzDeliLine) {
  
}



