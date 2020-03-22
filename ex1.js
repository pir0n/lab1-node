"use strict";
let end = 1;
let datearr = [];
let task_list = [];
var readlineSync = require('readline-sync')
do {



  //object Task

  function Task(text_desc, urg_or_not, priv_shar, deadline) {
    this.text_desc = text_desc;
    this.urg_or_not = urg_or_not;
    this.priv_shar = priv_shar;
    this.deadline = deadline;
  }

  //Main menu
  /* var readlineSync = require('readline-sync'),
     optionss = ['insert a new task', 'remove a task', 'show all existing task, in alphabetic order', 'close program'],
     index = readlineSync.keyInSelect(optionss, 'What do you want to do?'); */

  let optionss = ['insert a new task', 'remove a task', 'show all existing task, in alphabetic order', 'close program'];
  let index = readlineSync.keyInSelect(optionss, 'What do you want to do?');


  // the part responsible for operating the menu
  switch (optionss[index]) {

    //insert new task
    case 'insert a new task':
      var task = new Task();
//
      task.text_desc = readlineSync.question('Please describe your task: ');
      if (task.text_desc == "") {
        do {
          task.text_desc = readlineSync.question('Please describe your task: ');
        } while (task.text_desc == "");
      }
//     
      var readlineSync = require('readline-sync'),
        u_o_n = ['urgent', 'not urgent'],
        index2 = readlineSync.keyInSelect(u_o_n, 'It is urgent or not? ', { defaultInput: 'not urgent' });
      task.urg_or_not = u_o_n[index2];
//
      var readlineSync = require('readline-sync'),
        p_s = ['private', 'share'],
        index3 = readlineSync.keyInSelect(p_s, 'It is private or shared task? ', { defaultInput: 'private' });
      task.priv_shar = p_s[index3]
//
      console.log("Pleas enter date in format: yyyy,mm,dd,hh,mm")
      let dates = readlineSync.prompt(["Pleas enter date in format: yyyy,mm,dd,hh:min:mm"]);
      datearr = dates.split(",");
      task.deadline = new Date(datearr)

      // push filled task in to the task_list array 
      //console.log(task)
      task_list.push(task);

      break;


    // remove a task
    case 'remove a task':

      console.log(task_list);
      let to_remove = readlineSync.questionInt(["\n Pleas enter which task do you want to remove(starting from index 0): "]);

      task_list.splice(to_remove, 1);

      console.log("Removed succefuly, this is your task list now: \n");
      console.log(task_list);


      break;

    //show a task
    case 'show all existing task, in alphabetic order':

      //sort by text describt 
      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const t_dA = a.text_desc.toUpperCase();
        const t_dB = b.text_desc.toUpperCase();

        let comparison = 0;
        if (t_dA > t_dB) {
          comparison = 1;
        } else if (t_dA < t_dB) {
          comparison = -1;
        }
        return comparison;
      }

      task_list.sort(compare);

      console.log(task_list);
      break;

    //close program 
    case 'close program':
      end = 0;
      break;
    default:
    // code block
  }



} while (end == 1);