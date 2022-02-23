import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/user/navbar/navbar.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { AddCharacterComponent } from "./components/user/add-character/add-character.component";
import { ArtifactsListComponent } from './components/user/artifacts-list/artifacts-list.component';
import { AddArtifactComponent } from './components/user/add-artifact/add-artifact.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    PresentationComponent,
    AddCharacterComponent,
    ArtifactsListComponent,
    AddArtifactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
