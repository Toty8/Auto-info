import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../guards/auth.activate";
import { AddGenerationComponent } from "./add-generation/add-generation.component";
import { EditGenerationComponent } from "./edit-generation/edit-generation.component";

const routes: Routes = [
    {path: 'generations', children: [
        {path: ':modelId/add-generation', canActivate: [AuthActivate], component: AddGenerationComponent},
        {path: ':generationId/edit', canActivate: [AuthActivate], component: EditGenerationComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GenerationRoutingModule {}