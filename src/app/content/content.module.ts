import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {Routes, RouterModule} from "@angular/router";
import {ContentRoutingModule} from "./content-routing.module";


@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule
  ],
  declarations: [IndexComponent]
})
export class ContentModule { }
