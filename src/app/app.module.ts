import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { TemplateComponent } from './components/template/template.component';
import { LibraryComponent } from './components/library/library.component';
import { AppRoutingModule } from './angular-routing';
import { RunnerComponent } from './components/runner/runner.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent,
    TemplateComponent,
    LibraryComponent,
    RunnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodeEditorModule.forRoot(),
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
