
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let arr2 = [
    { id: 4, name: "jihan", age: "56", profession: "developer" , gender:"male "},
    { id: 5, name: "simaran", age: "45", profession: "admin" ,gender:"female"},
    { id: 6, name: "karan", age: "67", profession: "manager" , gender:"male"},
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let developer = arr.filter((item) => item.profession === "developer");
    console.log(developer.map((item) => item.name));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    let developerNames = [];
    arr.forEach((item) => {
      if (item.profession === "developer") {
        developerNames.push(item.name); // Push the name into the array if profession is developer
      }
    });
    console.log(developerNames); 
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4, name:"susan", age:"20", profession:"intern"});
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter((item) => item.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    console.log(arr.concat(...arr2));
  }
  