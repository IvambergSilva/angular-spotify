import { Routes } from "@angular/router";
import { AuthenticatedGuard } from "./guards/authenticated.guard";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule),
    },
    {
        path: 'player',
        loadChildren: () => import('./pages/player/player.module').then(module => module.PlayerModule),
        canLoad: [AuthenticatedGuard]
    }
]