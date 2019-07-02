import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { OrganosComponent } from './components/organos/organos.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';
import { CallbackComponent } from './components/callback/callback.component';

import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'organos', component: OrganosComponent },
  { path: 'expediente', component: ExpedienteComponent, canActivate: [ AuthGuardService ] },
  { path: 'callback', component: CallbackComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
