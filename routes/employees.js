var express = require('express');
var router = express.Router();


let employees = [

        {id: 1, name: "Oliver Queen", title: "CEO", gender: "male", age: 38, languages: ["english", "spanish"]}, 
        {id: 2, name: "Ben Hur", title: "Security consultant", gender: "male", age: 25, languages: ["latin", "italian"]}, 
        {id: 3, name: "Jessica Alba", title: "Admin Assistant", gender: "female", age: 23, languages: ["english", "spanish"]}, 
        {id: 4, name: "Pepper Piper", title: "Quality Assurance", gender: "female", age: 32, languages: ["english", "spanish"]},
        {id: 5, name: "Red Sullivan", title: "Project Manager", gender: "male", age: 27, languages: ["russian", "english"]},
        {id: 6, name:"Juan Dela Cruz", title: "Manager", age: 23, gender: "male", languages: ["russian", "french"]},
        {id: 7, name:"Anna Salvador", title: "Junior Dev", age: 21, gender: "female", languages: ["english", "french"]},
        {id: 8, name:"Mark Bautista", title: "Senior Fullstack Dev", age: 28, gender: "male", languages: ["russion", "spanish"]},
        {id: 9, name:"Micheal Garcia", title: "CEO", age: 40, gender: "male", languages: ["english", "latin"]}    
    ];


router.get('/', (req, res) => {
  res.send(employees);
});


router.get("/:id", (req, res) => {
  const { id } = req.params;
  let result = employees.find((item) => {
      return item.id == Number(id);
  });
  res.status(200).send(result ? result : "Record not found!");
});

router.put("/:id", (req, res)=>{
  const { id } = req.params;

  let employee = employees.find((item) => {
      return item.id === Number(id);
  });

  employee.name = req.body.name;
  employee.title = req.body.title;
  employee.age = req.body.age;
  employee.gender = req.body.gender;

  res.status(200).send( employee );

});

router.post("/:id", (req, res)=>{
  const { id } = req.params;

  let lastItem =employees[employees.length - 1];
  console.log(req.body);
  let employee = {};

  employee.id = lastItem.id + 1;
  employee.name = req.body.name;
  employee.title = req.body.title;
  employee.age = req.body.age;
  employee.gender = req.body.gender;

  employees.push(employee);
  res.status(200).send( employee );

});

module.exports = router;
