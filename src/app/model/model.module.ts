import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ModelRoutingModule } from './model-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    SharedModule
  ]
})
export class ModelModule { }
