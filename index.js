function scuberGreetingForFeet(){
}

function ternaryCheckCity(){
}

function switchOnCharmFromTip(){
}

describe('index.js', function () {
  describe('scuberGreetingForFeet()', function () {
    it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
    });

  });
});

function addFive(someNumber) {
 
  let result
  if (someNumber > 0) {
    result = someNumber + 5;
  }

  return result
}


addFive(10);
//=> 15

addFive(20);
//=> 25

addFive(-5);
//=> undefined

addFive(addFive(5));
