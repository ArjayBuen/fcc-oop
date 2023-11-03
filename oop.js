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