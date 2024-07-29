import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-singals',
  templateUrl: './singals.component.html',
  styleUrl: './singals.component.css',
})
export class SingalsComponent {
  todoName = '';
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    const item = todo.value;
    this.todos.update((todos) => [item, ...todos]);
  }
  removeTodo(index: number): void {
    this.todos.update((todos) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  }
}
