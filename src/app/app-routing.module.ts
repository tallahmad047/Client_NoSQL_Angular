import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './components/produit/produit.component';

const routes: Routes = [
  {
  component: ProduitComponent,
  path: 'products'
},
{
  path: '',
  component: ProduitComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
