import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {

  headerTitle = 'Notes';
  headerSubtitle = 'Manage your notes here';

  searchLabel = 'Search notes...';

  searchValueChange(value: string | null): void {
    // ToDo Add action
  }

}
