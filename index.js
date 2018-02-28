var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  var num = katzDeliLine.length + 1;
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${num} in line.`;
}

function nowServing() {
  var numOne = katzDeli[0];
  return function() {
    if(katzDeli.length === 0) {
      return `There is nobody waiting to be served!`;
    } else {
      katzDeli.shift(0);
      return `Currently serving ${numOne}.`;
    }
  }
}
var nowServ = nowServing()();
nowServ;


describe('nowServing', () => {
    it('returns the line is empty when no one is on line', () => {
      expect(nowServing([])).toEqual("There is nobody waiting to be served!");
    });

    it('returns an announcement about the person it is serving, and shifts the line', () => {
      const deliLine = ["Steven", "Blake", "Avi"]
      expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
      expect(deliLine).toEqual(["Blake", "Avi"]);
    });
  });