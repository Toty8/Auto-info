import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrandsListComponent } from './brand/brands-list/brands-list.component';
import {HttpClientModule} from '@angular/common/http'
import { UserModule } from './user/user.module';
import { BrandModule } from './brand/brand.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModelModule } from './model/model.module';
import { ModelsListComponent } from './model/models-list/models-list.component';
import { AppInterceptorProvider } from './app.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { GenerationModule } from './generation/generation.module';
import { SpecificationModule } from './specification/specification.module';

@NgModule({
  declarations: [
    AppComponent,
    BrandsListComponent,
    ModelsListComponent,
    NotFoundComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    BrandModule,
    ModelModule,
    GenerationModule,
    SpecificationModule,
    AppRoutingModule
  ],
  providers: [AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
