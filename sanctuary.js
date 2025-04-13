//1
function animals(...names){
  if(names.length === 0){
    console.log("No Animal sightings..");
  }else{
    console.log("Animal sightings");
    names.forEach((animal,i) =>{
      console.log(`${i+1}.${animal}`);
    });
  }
  
}

animals("Tiger", "Cow");

//2
function sanctuary(habitat1, habitat2){
  const protectedAreas = [...habitat1,...habitat2]
  console.log(`list of protected areas: ${protectedAreas}`);
}

sanctuary(["Swamp", "Mangrove"], ["Cactus Field"]);

//Object 
const originalAnimal = {
  name: "Panda",
  population: 5,
  traits: {
    color: "black and white",
    diet: "bamboo"
  }
};

//3
const updatingAnimal = {...originalAnimal, population:10};
console.log(updatingAnimal)

//4
//Shallow copy using spread
const animalCopy = { ...originalAnimal };

//adding genetics to the copy only
animalCopy.genetics = {
  diversityScore: "High"
};

//Modified a nested property
animalCopy.traits.diet = "mixed bamboo";//traits points to the same object in memory in both originalAnimal amd animalCopy

console.log("Original:", originalAnimal);
console.log("Copy:", animalCopy)


//5, again both original and copy reference the same nested objs so ph will update in both if changed
const ecosystemHealth = {
  waterQuality: {
    pH: 7.2,
    contaminants: "low"
  },
  foodSupply: {
    abundance: "moderate",
    variety: "high"
  }
};

//Shallow copy
const copiedHealth = { ...ecosystemHealth };

//changing a nested property
copiedHealth.waterQuality.pH = 6.5;

console.log("Original Health:", ecosystemHealth);
console.log("Copied Health:", copiedHealth);


