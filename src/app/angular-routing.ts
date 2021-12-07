import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditorComponent } from "./components/editor/editor.component";
import { LibraryComponent } from "./components/library/library.component";
import { TemplateComponent } from "./components/template/template.component";

const routes: Routes = [
    { path: '', component: EditorComponent},
    { path: 'template', component: TemplateComponent},
    { path: 'lib', component: LibraryComponent},
  ];

  
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{
    
}