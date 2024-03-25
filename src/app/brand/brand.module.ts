import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandRoutingModule } from './brand-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddBrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BrandModule { }
