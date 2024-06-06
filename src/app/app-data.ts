import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './notes/note';
import { NoteData } from './notes/note-data';

export class AppData implements InMemoryDbService {

  createDb(): { notes: Note[]} {
    const notes = NoteData.notes;
    return { notes };
  }
}
