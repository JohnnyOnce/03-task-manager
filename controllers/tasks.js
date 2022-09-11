const Task = require('../models/task')

const getAllTasks = (req, res) => {
  res.send('<h1>all items</h1>')
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

const getTask = (req, res) => {
  res.send('<h1>get item</h1>')
}

const updateTask = (req, res) => {
  res.send('<h1>update item</h1>')
}

const deleteTask = (req, res) => {
  res.send('<h1>delete item</h1>')
}

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
}