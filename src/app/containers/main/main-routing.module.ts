import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@containers/main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard'
          },
          // {
          //   path: 'dashboard',
          //   loadChildren: () => import('@pages/dashboard/dashboard.routes').then(m => m.DashboardRoutes),
          // },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
