import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../guards/auth.activate";
import { AddSpecificationComponent } from "./add-specification/add-specification.component";
import { EditSpecificationComponent } from "./edit-specification/edit-specification.component";
import { SpecificationItemComponent } from "./specification-item/specification-item.component";

const routes: Routes = [
    {path: 'specifications', children: [
        {path: ':specificationId', component: SpecificationItemComponent},
        {path: ':generationId/add-specification', canActivate: [AuthActivate], component: AddSpecificationComponent},
        {path: ':specificationId/edit', canActivate: [AuthActivate], component: EditSpecificationComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SpecificationRoutingModule {}