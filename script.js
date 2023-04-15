/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

     
  let result = arr.map(employee => {
    if (employee.profession == "developer")

        console.log(employee);
})

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  let result = arr.forEach(employee => {
    if (employee.profession == "developer")

        console.log(employee);

})
}

function addData() {
  //Write your code here, just console.log

  let obj4 ={id:4,name:"susan",age:"20",profession:"intern"} ;
    
  arr.push(obj4);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log

  arr= arr.filter(employee => employee.profession !== 'admin');
  console.log(arr);

}

function concatenateArray() {
  //Write your code here, just console.log

  let array2=[{ idno: 10, Studentname: "john", age: "18"},
     { idno: 20, Studentname: "jack", age: "20" }, 
     { idno: 30, studentname: "karen", age: "19"  }]

    console.log(arr.concat(array2));
}
