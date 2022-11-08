var express = require('express');
var router = express.Router();

let data = [
    { id: 1, title: 'Create a project',  order: 1, completed: true, author: 'Diego Laura' },
    { id: 2, title: 'Take a cofféé',     order: 2, completed: true, author: 'Laong-Laan' },
    { id: 3, title: 'Write new article', order: 3, completed: true, author: 'Agap-ito Bagumbayan' },
    { id: 4, title: 'Walk toward home', order: 4, completed: false, author: 'Taga-Ilog' },
    { id: 5, title: 'Have some dinner', order: 5, completed: false, author: 'Dimas-Ilaw' },
];

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    let result = data.find((item) => {
        return item.id == Number(id);
    });
    res.status(200).send(result ? result : "Record not found!");
  });

router.post("/data", (req, res) =>{
  let result = {
    id: req.body.id,
    title: req.body.title,
    order: req.body.order,
    author: req.body.author,
  };
    data.push(result);
    res.status(200).send( result );
  });

router.put("/:id", (req, res)=>{
  const { id } = req.params;

  let result = data.find((item) => {
      return item.id === Number(id);
  });

  result.id = req.body.id;
  result.title = req.body.title;
  result.order = req.body.order;
  result.completed = req.body.completed;
  result.author = req.body.author;

  res.status(404).send( result );

});

router.delete("/:id",(req, res)=>{
  const { id } = req.params;
  data = data.filter(item=>item.id != Number(id));

  res.status(200).send("Record " + id + " has been deleted.");

});

module.exports = router;
  