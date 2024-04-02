import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddModelComponent } from "./add-model/add-model.component";
import { AuthActivate } from "../guards/auth.activate";
import { EditModelComponent } from "./edit-model/edit-model.component";
import { GenerationsListComponent } from "../generation/generations-list/generations-list.component";

const routes: Routes = [
    {path: 'models', children: [
        {path: ':modelId',  component: GenerationsListComponent},
        {path: ':brandId/add-model', canActivate: [AuthActivate], component: AddModelComponent},
        {path: ':modelId/edit', canActivate: [AuthActivate], component: EditModelComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ModelRoutingModule {}