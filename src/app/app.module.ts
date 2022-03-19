import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//socket io
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';


//socket config
const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };


@NgModule({
  declarations: [AppComponent, DocumentListComponent, DocumentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
