import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ScheduleDetailComponent } from './components/schedule-detail/schedule-detail.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { ScheduleCreateComponent } from './components/schedule-create/schedule-create.component';
const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'detail/:id', component: UserDetailComponent },
  {path: 'schedules', component: SchedulesComponent},
  {path: 'schedule_details/:id', component: ScheduleDetailComponent},
  {path: 'user_create', component: UserCreateComponent},
  {path: 'schedule_create', component: ScheduleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
