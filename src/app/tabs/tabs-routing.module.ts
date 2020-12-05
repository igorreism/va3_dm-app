import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'listagem',
        loadChildren: () => import('../listagem/listagem.module').then(m => m.ListagemPageModule)
      },
      {
        path: 'contato',
        loadChildren: () => import('../contato/contato.module').then(m => m.ContatoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/listagem',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/listagem',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
