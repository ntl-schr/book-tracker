import { Routes } from '@angular/router';
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { StatsComponent } from '../../components/stats/stats.component';

export const routes: Routes = [
  {
    path: '',
    component: SidemenuComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' }, // default route
      { path: 'overview', component: OverviewComponent },
      { path: 'books', component: BookListComponent },
      { path: 'stats', component: StatsComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
