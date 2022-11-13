import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorsListComponent } from './components/creators-list/creators-list.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes: Routes = [
  {
    path: '', component: UserViewComponent, children: [
      {path: '', pathMatch: 'prefix', component: CreatorsListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }
