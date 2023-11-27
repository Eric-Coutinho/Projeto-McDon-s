import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmComponent } from './adm/adm.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'adm', component: AdmComponent},
    { path:'newProduct', component: NewProductComponent},
    { path:'order', component: OrderComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

