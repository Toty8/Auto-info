import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../guards/auth.activate";

const routes: Routes = [
    {path: 'specification', children: [
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SpecificationRoutingModule {}