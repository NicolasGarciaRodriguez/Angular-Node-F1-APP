import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: "signup", loadChildren: () => import("./features/signup/signup.module").then(m => m.SignupModule)
  },
  {
    path: "signin", loadChildren: () => import("./features/signin/signin.module").then(m => m.SigninModule)
  },
  {
    path: "teams", loadChildren: () => import("./features/teams/teams.module").then(m => m.TeamsModule), canActivate: [AuthGuard]
  },
  {
    path: "drivers", loadChildren: () => import("./features/drivers/drivers.module").then(m => m.DriversModule), canActivate: [AuthGuard]
  },
  {
    path: "", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
