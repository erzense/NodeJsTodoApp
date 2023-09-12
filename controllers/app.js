const express = require('express');
const Todos = require('../models/Todos')


const getAllTodo = async(req,res) => {
    const todos = await Todos.find({})
    res.status(200).render('homepage',{todos})
}


const createTodo = async(req,res) => {
    const todos = await Todos.find({})
    const todo = await Todos.create(req.body)
    console.log(todo)
    res.redirect('/homepage')
}

const deleteTodo = async(req,res) => {

    await Todos.deleteOne({_id:req.params.id}) 
    res.redirect('/homepage')
}





module.exports = {getAllTodo,createTodo,deleteTodo}