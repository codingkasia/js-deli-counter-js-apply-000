var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  var num = katzDeliLine.length;
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${num} in line.`;
}

