const taskDB = require('../model/model');

// create task
exports.create = (req, res) => {
  if(!req.body){
    res.status(400).send({ message : "Content can not be emtpy!"});
    return;
  }

  // New Task
  const task = new taskDB({
    description: req.body.description,
    category: req.body.category,
    dueDate: req.body.dueDate
  })

  task
    .save(task) 
    .then(data => {
      // res.send(data)
      res.redirect('/');
    })
    .catch(err =>{
      res.status(500).send({
          message : err.message || "Some error occurred while creating a create task operation"
      });
    });
}

// find all task
exports.find = (req, res) => {
  if(req.query.id){
    const id = req.query.id;

    taskDB.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({ message : "Not found task with id "+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Error retrieving task with id " + id})
        })

  }else{
    taskDB.find()
    .then(task => {
        res.send(task)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving task" })
    })
  }

  
}

// delete a task
exports.delete = (req, res) => {
  const id = req.params.id;

  taskDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Task was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Task with id=" + id
            });
        });
}