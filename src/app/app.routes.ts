import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    
    {path: ':id', component: DetailsComponent},
    
    {path: '**', redirectTo: '', pathMatch: 'full'}
];