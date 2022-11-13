import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { UserViewComponent } from './components/user-view/user-view.component';
import { CreatorsListComponent } from './components/creators-list/creators-list.component';


@NgModule({
  declarations: [
    UserViewComponent,
    CreatorsListComponent
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule
  ]
})
export class UserViewModule { }
