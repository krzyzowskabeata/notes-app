import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent implements OnInit, OnDestroy {

  private noteServive = inject(NoteService);

  addBtn = 'Add new';
  sub!: Subscription; 

  ngOnInit(): void {
      this.sub = this.noteServive.getNotes().subscribe(n => console.log(n)); // ToDo: Change for async pipe
  }

  addNote(): void {
    // ToDo Add action
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

}
