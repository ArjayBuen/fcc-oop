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