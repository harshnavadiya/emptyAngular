import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginManagementComponent } from './login-management/login-management.component';
import { BaseManagementComponent } from './base-management/base-management.component';
import { AuthguardGuard } from './authguard.guard';
import { DashboardManagementComponent } from './dashboard-management/dashboard-management.component';

const routes: Routes = [{
  path:'login',
  component:LoginManagementComponent
},{
  path:'',
  component:BaseManagementComponent,
  canActivate:[AuthguardGuard],
  children:[{
    path:'',
    component:DashboardManagementComponent
  }]
}];

// const routes: Routes = [{
//   path: 'login',
//   component: AdminLoginComponent
// },
//   {
//     path: '',
//     component: BaseDesignComponent,
//     canActivate: [AuthGuard],
//     children: [{
//       path: 'age',
//       component: AgeManagementComponent
//     },
//     {
//       path: 'categories',
//       component: CategoriesManagmentComponent
//     },
//     {
//       path: 'faq',
//       component: FaqManagmentComponent
//     },
//     {
//       path: 'ingredient',
//       component: IngredientManagmentComponent
//     },
//     {
//       path: 'user-list',
//       component: UserManagementComponent
//     },
//     {
//       path: 'recipes',
//       component: RecipesManagmentComponent,
//       children: [
//         {
//           path: '',
//           component: RecipesListComponent
//         },
//         {
//         path: 'add',
//         component: RecipesAddComponent
//         },
//         {
//         path: 'edit/:recipes_id',
//         component: RecipesEditComponent
//         },{
//           path:'rating/:recipes_id',
//           component:RecipesRatingComponent
//         }
//       ]
//     },
//       {
//         path: 'meal-planner',
//         component: MealPlanManagementComponent,
//         children: [
//           {
//             path: '',
//             component: PlanListComponent
//           },
//           {
//             path: 'add',
//             component: PlanAddComponent
//           },
//           {
//             path: 'edit/:plan_id',
//             component: PlanEditComponent
//           }
//         ]
//       },
//     {
//       path: 'unit',
//       component: UnitManagmentComponent
//     }
//     ]
//   },
//   { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
