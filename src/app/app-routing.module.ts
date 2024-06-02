import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./modules/Landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./modules/Blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'proyectos',
    loadChildren: () =>
      import('./modules/Proyectos/proyectos.module').then(
        (m) => m.ProyectosModule
      ),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./modules/Servicios/servicios.module').then(
        (m) => m.ServiciosModule
      ),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./modules/Contacto/contacto.module').then(
        (m) => m.ContactoModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
