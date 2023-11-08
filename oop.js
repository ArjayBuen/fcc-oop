let dog = {
    name:"Cloud",
    numLegs:4,
    // sayLegs: function(){return `This dog has ${dog.numLegs} legs.`}
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

  // Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
dog.sayLegs();

function Dog(){
    this.name="Sky";
    this.color="White";
    this.numLegs=4;
  }
// Only change code below this line
let hound=new Dog();

function Dog(name, color) {
    this.name=name;
    this.color=color;
    this.numLegs=4;
  }
  
  let terrier= new Dog("Blacky", "black");


  function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  let myHouse= new House(4);
  
  myHouse instanceof House;

  
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }


  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs=4;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");

  let ownPropss = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownPropss.push(property);
  } else{
    prototypeProps.push(property);
  }
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor===Dog){
    return true;
  } else {
    return false;
  }
}

Dog.prototype = {
  // Only change code below this line
  constructor: Dog,
  numLegs:4,
  eat:function(){
    console.log("yummy")
  },
  describe:function(){
    console.log(`${this.name} loves eating`);
  }
};

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck=Object.create(Animal.prototype); // Change this line
let beaglee=Object.create(Animal.prototype); // Change this line

function Dog() { }

// Only change code below this line
Dog.prototype=Object.create(Animal.prototype);

let beagleee = new Dog();

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let duckk = new Bird();
Bird.prototype.constructor=Bird;//
duckk.constructor;//

let beaglle = new Dog();
Dog.prototype.constructor=Dog;//
beaglle.constructor;//


function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

Dog.prototype.bark=function(){
  console.log(`Woof!`);
};

// Only change code above this line

let beaggle = new Dog();


function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly=function(){
  return `Alas, this is a flightless bird.`;
}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());



let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin= function(obj){
  obj.glide=function(){
    console.log(`Gliding!`);
  }
};
glideMixin(bird);
glideMixin(boat);


function Bird() {
  //this.weight=15
  let weight = 15;

  this.getWeight=function(){
    return weight;
  }
}


// function makeNest() {
  //   console.log("A cozy nest is ready");
  // }
  
  // makeNest();
  
  (function(){
    console.log("A cozy nest is ready");
  })();


// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };

let funModule=(function(){
  return{
    isCuteMixin:function(obj){
      obj.isCute=function(){
        return true;
      };
    },
    singMixin:function(obj){
      obj.sing=function(){
        console.log("Singing to an awesome tune");
      };
    }

  }
}) ();
