import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddModelComponent } from "./add-model/add-model.component";
import { AuthActivate } from "../guards/auth.activate";

const routes: Routes = [
    {path: 'models', children: [
        {path: ':brandId/add-model', canActivate: [AuthActivate], component: AddModelComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ModelRoutingModule {}