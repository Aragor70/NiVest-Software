import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/Todo';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  todo: Observable<Todo[]>;
  
  constructor() {
    
  }

  ngOnInit() {}

}
