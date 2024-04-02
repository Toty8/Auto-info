import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../guards/auth.activate";
import { AddGenerationComponent } from "./add-generation/add-generation.component";

const routes: Routes = [
    {path: 'generations', children: [
        {path: ':modelId/add-generation', canActivate: [AuthActivate], component: AddGenerationComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GenerationRoutingModule {}