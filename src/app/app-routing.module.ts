import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionComponent } from './action/action.component';
import { UsersComponent } from './users/users.component';
import { Action1Component } from './users/action/action1/action1.component';
import { SettingsComponent } from './settings/settings.component';
import { Action2Component } from './settings/action2/action2/action2.component';
import { Edit5Component } from './action/edit5/edit5/edit5.component';
import { StatComponent } from './action/statistics/stat/stat.component';
import { NewdevicesComponent } from './newdevices/newdevices.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {
    path: 'dashboard-dialog',
    loadChildren: () => import('./dashboard/dashboard-dialog.module').then(m => m.DashboardDialogModule),
  },
  {path:'action',component:ActionComponent},
  {path:'users',component:UsersComponent},
  {path:'action1',component:Action1Component},
  {path:'settings',component:SettingsComponent},
  {path:'action2',component:Action2Component},
  {path:'edit5',component:Edit5Component},
  {path:'stat',component:StatComponent},
  {path:"newdevices",component:NewdevicesComponent}
  
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
