import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component'; // import about component
import { PageNotFoundComponent } from './404/page-not-found.component'; // import 404 component

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
