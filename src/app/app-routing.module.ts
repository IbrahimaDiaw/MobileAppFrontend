import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'departement', loadChildren: './pages/departement/departement.module#DepartementPageModule' },
  { path: 'create-departement', loadChildren: './pages/create-departement/create-departement.module#CreateDepartementPageModule' },
  { path: 'edit-departement/:id', loadChildren: './pages/edit-departement/edit-departement.module#EditDepartementPageModule' },  { path: 'employee', loadChildren: './pages/employee/employee.module#EmployeePageModule' },
  { path: 'absence', loadChildren: './pages/absence/absence.module#AbsencePageModule' },
  { path: 'conges', loadChildren: './pages/conges/conges.module#CongesPageModule' },
  { path: 'formation', loadChildren: './pages/formation/formation.module#FormationPageModule' },
  { path: 'edit-formation', loadChildren: './pages/edit-formation/edit-formation.module#EditFormationPageModule' },
  { path: 'create-formation', loadChildren: './pages/create-formation/create-formation.module#CreateFormationPageModule' },
  { path: 'create-absence', loadChildren: './pages/create-absence/create-absence.module#CreateAbsencePageModule' },
  { path: 'create-conges', loadChildren: './pages/create-conges/create-conges.module#CreateCongesPageModule' },
  { path: 'create-employee', loadChildren: './pages/create-employee/create-employee.module#CreateEmployeePageModule' },
  { path: 'edit-employee', loadChildren: './pages/edit-employee/edit-employee.module#EditEmployeePageModule' },
  { path: 'edit-absence', loadChildren: './pages/edit-absence/edit-absence.module#EditAbsencePageModule' },
  { path: 'edit-conges', loadChildren: './pages/edit-conges/edit-conges.module#EditCongesPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
