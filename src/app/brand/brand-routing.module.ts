import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandsListComponent } from "./brands-list/brands-list.component";
import { AddBrandComponent } from "./add-brand/add-brand.component";
import { AuthActivate } from "../guards/auth.activate";
import { ModelsListComponent } from "../model/models-list/models-list.component";
import { EditBrandComponent } from "./edit-brand/edit-brand.component";

const routes: Routes = [
    {path: 'brands', children: [
        {path: '', pathMatch: 'full', component: BrandsListComponent},
        {path: 'add-brand', component: AddBrandComponent, canActivate: [AuthActivate]},
        {path: ':brandId', component: ModelsListComponent},
        {path: ':brandId/edit', component: EditBrandComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BrandRoutingModule {}