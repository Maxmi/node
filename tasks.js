#!/usr/bin/env node

const fs = require('fs');
const addTask = require('./commands/add.js');
const deleteTask = require('./commands/delete.js');
const {list} = require('./commands/list.js'); //why did i put it in {}?
const completeTask = require('./commands/complete.js');
const helpers = require('./commands/helpers.js');

var command = process.argv[2];
var task = id = process.argv[3];
var allTasks = helpers.getAll();

var result;
switch (command) {
  case 'add':
    result = addTask(task, allTasks);
    break;
  case 'list':
    result = list(allTasks);
    break;
  case 'complete':
    result = completeTask(id, allTasks);
    break;
  case 'delete':
    result = deleteTask(id, allTasks);
    break;
  default:
    result = 'Command not recognized';
}
console.log(result);
