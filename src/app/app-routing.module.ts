import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { RegisterComponent } from "./components/register/register.component";
import { NavbarComponent } from "./components/user/navbar/navbar.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { CreateArtifactComponent } from "./views/create-artifact/create-artifact.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: PresentationComponent },
  { path: "signup", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "create", component: CreateArtifactComponent },
  { path: "user", component: NavbarComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
