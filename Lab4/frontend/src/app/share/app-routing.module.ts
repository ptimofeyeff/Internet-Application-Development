import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StartPageComponent} from '../start-page/start-page.component';
import {MainPageComponent} from '../main-page/main-page.component';
import {AuthGuard} from './auth.guard';



const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'main', component: MainPageComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{
}
