import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ListViewComponent,
    InputComponent
  ],
  exports: [
    ListViewComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
