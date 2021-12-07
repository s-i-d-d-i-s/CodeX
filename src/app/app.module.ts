import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { TemplateComponent } from './components/template/template.component';
import { LibraryComponent } from './components/library/library.component';
import { AppRoutingModule } from './angular-routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent,
    TemplateComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodeEditorModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
