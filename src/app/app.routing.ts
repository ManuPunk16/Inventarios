import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActivesComponent } from './components/actives/actives.component';
import { CancellationsComponent } from './components/cancellations/cancellations.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: '',
    children: [
      { path: 'Activos', component: ActivesComponent },
      { path: 'Bajas', component: CancellationsComponent },
      { path: 'Transferencias', component: TransfersComponent },
      { path: '**', component: ErrorComponent }
    ],
  },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
