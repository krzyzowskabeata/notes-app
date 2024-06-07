import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-not-found',
  templateUrl: './notes-not-found.component.html',
  styleUrl: './notes-not-found.component.scss'
})
export class NotesNotFoundComponent {

  title = 'No notes yet';
  instruction = 'Add a note to keep track of your learnings';
  addBtn = 'Add note';

}
