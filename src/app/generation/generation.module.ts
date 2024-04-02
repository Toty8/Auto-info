import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationRoutingModule } from './generation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddGenerationComponent } from './add-generation/add-generation.component';
import { GenerationsListComponent } from './generations-list/generations-list.component';
import { EditGenerationComponent } from './edit-generation/edit-generation.component';



@NgModule({
  declarations: [
    AddGenerationComponent,
    GenerationsListComponent,
    EditGenerationComponent
  ],
  imports: [
    CommonModule,
    GenerationRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class GenerationModule { }
