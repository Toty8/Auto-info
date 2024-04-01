import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ImageUrlDirective } from './validators/image-url.directive';
import { EmailDomainDirective } from './validators/email-domain.directive';
import { AccountAgeByDaysPipe } from './pipes/account-age.pipe';


@NgModule({
  declarations: [
    LoaderComponent,
    ImageUrlDirective,
    EmailDomainDirective,
    AccountAgeByDaysPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoaderComponent,
    ImageUrlDirective,
    EmailDomainDirective,
    AccountAgeByDaysPipe
  ]
})
export class SharedModule { }
