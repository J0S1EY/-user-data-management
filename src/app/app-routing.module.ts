import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CRMHomeComponent } from './crmhome/crmhome.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '', component: CRMHomeComponent

  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'view-user/:id', component: ViewUserComponent
  },
  {
    path: 'edit-user/:id', component: EditUserComponent
  },
  {
    path: 'update-user/:id', component: UpdateUserComponent

  },
  {
    path: 'delete-user/:id', component: DeleteUserComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
