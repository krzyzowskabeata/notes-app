import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent {

  private noteServive = inject(NoteService);
  notes$ = this.noteServive.getNotes();

  addBtn = 'Add new';

  addNote(): void {
    // ToDo Add action
  }

}
