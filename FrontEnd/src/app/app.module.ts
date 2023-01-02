import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { GetUserService } from './service/get-user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import { AstuceVillageoisComponent } from './astuce-villageois/astuce-villageois.component';
import { AstuceDetailsComponent } from './astuce-details/astuce-details.component';
import { AstuceCreatorComponent } from './astuce-creator/astuce-creator.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuViewComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AstuceVillageoisComponent,
    AstuceDetailsComponent,
    AstuceCreatorComponent,
    

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GetUserService,
  {provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
