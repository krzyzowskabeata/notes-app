import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'api/notes';

  private http = inject(HttpClient);

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl)
      .pipe(
        // ToDo: Catch error
      );
  }

}
