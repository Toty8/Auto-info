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

@NgModule({
  declarations: [
    AppComponent,
    BrandsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    BrandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
