// estas funciones son de ejemplo
import allData from "./data/rickandmorty/rickandmorty.js";
const characters = allData.results;

function filterAll(key, parameter) {
  return characters.filter((character) => character[key] === parameter);
}
function filterDead (){
return characters.filter ((character) => character.status === "Dead");
}
function filterAlive (){
return characters.filter ((character) => character.status === "Alive");
  }
function sortAll (order){
const charactersCopy = [...characters]; 
charactersCopy.sort((A,Z)=>{
if(order){
return A.name.localeCompare(Z.name);
}
else{return Z.name.localeCompare(A.name);
}
}); 
return charactersCopy
}

export { filterAll, filterDead, filterAlive,sortAll };


 

//export const example = () => {
// return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
