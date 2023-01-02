import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { RegisterComponent } from './register/register.component';
import { AstuceVillageoisComponent } from './astuce-villageois/astuce-villageois.component';
import { AstuceDetailsComponent } from './astuce-details/astuce-details.component';
import { AstuceCreatorComponent } from './astuce-creator/astuce-creator.component';

const routes: Routes = [
 {path :'', redirectTo: '/menu', pathMatch:'full'},
  {path: 'menu' , component: MenuViewComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'astuces/showAll', component:AstuceVillageoisComponent },
  { path: 'astuces/:id', component: AstuceDetailsComponent },
  {path: 'ajouterAstuce', component: AstuceCreatorComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




  
}
