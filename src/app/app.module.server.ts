import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
