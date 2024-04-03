import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ModelRoutingModule } from './model-routing.module';
import { AddModelComponent } from './add-model/add-model.component';
import { FormsModule } from '@angular/forms';
import { EditModelComponent } from './edit-model/edit-model.component';
import { ModelsListComponent } from './models-list/models-list.component';



@NgModule({
  declarations: [
  
    AddModelComponent,
    ModelsListComponent,
    EditModelComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ModelModule { }
