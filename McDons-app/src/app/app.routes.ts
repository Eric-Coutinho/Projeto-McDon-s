import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmComponent } from './adm/adm.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { TotemComponent } from './totem/totem.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrderKitchenComponent } from './order-kitchen/order-kitchen.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cliente', component: ClienteComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'adm', component: AdmComponent},
    { path:'newProduct', component: NewProductComponent},
    { path:'order', component: OrderComponent},
    { path:'orderKitchen', component: OrderKitchenComponent},
    { path: 'totem', component: TotemComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

