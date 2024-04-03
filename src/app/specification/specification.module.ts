import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificationRoutingModule } from './specification-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SpecificationsListComponent } from './specifications-list/specifications-list.component';



@NgModule({
  declarations: [
    SpecificationsListComponent
  ],
  imports: [
    CommonModule,
    SpecificationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SpecificationModule { }
