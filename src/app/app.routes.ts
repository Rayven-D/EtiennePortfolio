import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./components/home/home').then(m => m.Home)},
    {path: 'projects', loadComponent: () => import('./components/projects/projects').then(m => m.Projects)},
    {path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About)},
    {path: 'projects/streaming-platform', loadComponent: () => import('./components/project-details/streaming-platform/streaming-platform').then(m => m.StreamingPlatform)},
    {path: "**", redirectTo: 'home', pathMatch: 'full'}
];
