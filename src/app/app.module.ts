import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { NotesComponent } from './notes/notes.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NotesNotFoundComponent } from './notes/notes-not-found/notes-not-found.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesNotFoundComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
