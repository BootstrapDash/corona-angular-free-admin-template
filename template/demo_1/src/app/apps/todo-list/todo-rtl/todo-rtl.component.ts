import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-rtl',
  templateUrl: './todo-rtl.component.html',
  styleUrls: ['./todo-rtl.component.scss']
})
export class TodoRtlComponent implements OnInit {


  form;
  todoArray = [
    { task : 'لقاء مع فريق الحضرية' , completed : false },
    { task : 'تكرار مشروع للعميل الجديد' , completed : false },
    { task : 'اجتماع المشروع مع الرئيس التنفيذي' , completed : false },
    { task : 'متابعة فريق زيلا' , completed : false },
    { task : 'المستوى الأعلى لأنتوني' , completed : false }
  ];

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      todoitem : ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  addTodo() {
    let newTodoList = { task: '' , completed: false };
    newTodoList.task= this.form.value.todoitem;
    this.todoArray.push(newTodoList);
    this.form.reset();
  }
  removeTodoItem(item) {
   for(let i=0; i<=this.todoArray.length; i++) {
     if(item === this.todoArray[i]) {
       this.todoArray.splice(i, 1);
     }
   } 
  }
  changeTodoStatus(event,index) {
    if(event.target.checked) {
    this.todoArray[index]['completed'] = true; 
    } else {
      this.todoArray[index]['completed'] = false;
    }
  }

}
