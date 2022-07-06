let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

//  const sumSalaries = (obj)=>{
//     let sum = 0
//     for(let [key, val] of Object.entries(obj)){
//         if(key ==='salary'){
//             return val
//         }
//         else if(Array.isArray(val)){
//             for(let item of val){
//                 sum = sum + sumSalaries(item)
//             }
//         }
//         else if(typeof val ==='string' && key!=='salary'){ 
//             continue
//         }
//         else{
//             sum = sum + sumSalaries(val)
//         }

//     }
//     return sum
//  } 

// function sumSalaries(department) {
//     if (Array.isArray(department)) { // case (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//     } else { // case (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//       }
//       return sum;
//     }
// }

//  console.log(sumSalaries(company))
// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i
    let shooter = function() { 
      // create a shooter function,
      console.log(j); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.