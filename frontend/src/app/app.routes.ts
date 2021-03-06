import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from "app/rform/rform.component";
import { UserListComponent } from "app/user-list/user-list.component";
import { UserDetailsComponent } from "app/user-details/user-details.component";
import { LoginComponent } from "app/login/login.component";
import { AuthGuard } from "app/guards/auth.guard";
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [{ path: '', component: UserListComponent, pathMatch: 'full', canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'tform', component: TformComponent, canActivate: [AuthGuard] },
{ path: 'rform', component: RformComponent, canActivate: [AuthGuard] },
{ path: 'directives', component: UserListComponent, canActivate: [AuthGuard] },
{ path: 'roteparams/:username', component: UserDetailsComponent, canActivate: [AuthGuard] },
{ path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule', canActivate: [AuthGuard] }
/*{path:"**",component : EmployeeListComponent}*/];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

