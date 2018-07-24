import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { TodoItem } from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  @Input() todoItems: List<TodoItem>;

  constructor() { }

  ngOnInit() {
  }

}
