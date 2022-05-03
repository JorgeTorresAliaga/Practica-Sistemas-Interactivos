import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { LecturasComponent } from './lecturas/lecturas.component';
import { DeberesComponent } from './deberes/deberes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'lecturas', component: LecturasComponent},
  {path: 'deberes', component: DeberesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
