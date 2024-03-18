import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandsListComponent } from "./brands-list/brands-list.component";
import { AddBrandComponent } from "./add-brand/add-brand.component";

const routes: Routes = [
    {path: 'brand', children: [
        {path: '', pathMatch: 'full', component: BrandsListComponent},
        {path: 'add-brand', component: AddBrandComponent},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BrandRoutingModule {}