import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificationRoutingModule } from './specification-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SpecificationsListComponent } from './specifications-list/specifications-list.component';
import { AddSpecificationComponent } from './add-specification/add-specification.component';
import { EditSpecificationComponent } from './edit-specification/edit-specification.component';
import { SpecificationItemComponent } from './specification-item/specification-item.component';



@NgModule({
  declarations: [
    SpecificationsListComponent,
    AddSpecificationComponent,
    EditSpecificationComponent,
    SpecificationItemComponent
  ],
  imports: [
    CommonModule,
    SpecificationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SpecificationModule { }
