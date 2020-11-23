import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { TodosComponent } from './todos/todos.component'
import { FormComponent } from './form/form.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
