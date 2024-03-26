import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ImageUrlDirective } from './validators/image-url.directive';
import { EmailDomainDirective } from './validators/email-domain.directive';


@NgModule({
  declarations: [
    LoaderComponent,
    ImageUrlDirective,
    EmailDomainDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent,
    ImageUrlDirective,
    EmailDomainDirective
  ]
})
export class SharedModule { }
