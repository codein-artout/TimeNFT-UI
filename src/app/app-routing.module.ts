import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'for-users'
  },
  {
    path: 'for-users',
    loadChildren: () => import(`src/app/pages/user-view/user-view.module`).then(m => m.UserViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
