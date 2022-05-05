const TodoModel = require('../model/todo_model')

exports.showIndex = (req, res) => {
    res.send("Running Node API")
}

exports.createTodo = (req,res) => {
    const todos = new TodoModel({
        id:req.body.id,
        name:req.body.name,
        description:req.body.description
    })
    todos.save()
    .then(data => {res.send(data)})
    .catch(error => {res.send(error)})
}

exports.getTodo = (req,res) => {
    TodoModel.find()
    .then(result => {
        res.send(result)
    })
    .catch(error => {
        res.send(400).send(error)
    })
}

exports.getTodoById = (req,res) => {
    TodoModel.findById(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(error => {
        res.send(error)
    })
}

exports.deleteTodoById = (req,res) => {
    TodoModel.deleteOne({
        _id:req.params.id
    }, (error) => {
        if(error)
        res.send(error)

        res.json({
            status:"Success",
            message:`Successfully deleted the todo with ID: ${req.params.id}`
        })
    })
}

exports.updateTodo = (req,res) => {
    TodoModel.findById(req.params.id, (error, tasks) => {
        if(error)
        res.send(error)
        tasks.name = req.body.name ? req.body.name: tasks.name
        tasks.description = req.body.description ? req.body.description: tasks.description

        tasks.save((error) => {
            if(error)
            res.send(error)   
            res.json({
                message: "Category Updated Successfully",
                data: tasks
            })
        })
    })   
}
