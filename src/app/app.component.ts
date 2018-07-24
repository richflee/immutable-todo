import { Component, OnDestroy, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

export interface TodoItem {
  label: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app';
  todoInput = '';
  items = List<TodoItem>([
    {
      label: 'Get milk',
      complete: false
    },
    {
      label: 'Pay rent',
      complete: false
    }
  ]);

  newTodoInput$ = new Subject<string>();
  unsubscribe$ = new Subject<void>();

  ngOnInit() {

    this.newTodoInput$
      .pipe(
        tap(this.addTodo.bind(this)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
        this.todoInput = '';
      });

    this.addTodo('Wash car');
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  addTodo(label: string) {
    const todo = {
      label: label,
      complete: false
    };
    this.items = this.items.push(todo);
  }



}
