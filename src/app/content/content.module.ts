import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {path: 'index', component: IndexComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [IndexComponent]
})
export class ContentModule { }
