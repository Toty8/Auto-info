import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandRoutingModule } from './brand-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddBrandComponent } from './add-brand/add-brand.component';



@NgModule({
  declarations: [
    AddBrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule
  ]
})
export class BrandModule { }
