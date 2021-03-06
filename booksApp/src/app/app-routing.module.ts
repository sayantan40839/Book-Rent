import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CartComponent } from './cart/cart.component';
import { EditbookComponent } from './editbook/editbook.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RentedBooksComponent } from './rented-books/rented-books.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children:[
      
      {
        path: '',
        redirectTo: 'booklist',
        pathMatch: 'full'
      },
      {
        path:'booklist',
        component:BooksListComponent
      },
      {
        path:'rented',
        component:RentedBooksComponent
      },
      {
        path:'wishlist',
        component: WishlistComponent
      },
      {
        path:'cart',
        component: CartComponent
      },
      {
        path:'profile',
        component: ProfileComponent,
        children:[
          { path:'',
            component:ViewprofileComponent,
            pathMatch:'full'
          },
          {path:'view',
          component:ViewprofileComponent},
          {
          path:'edit',
          component: EditprofileComponent
        }]
      }
      
    ]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:"addbooks",
    component: AddbookComponent
  },
  {
    path:"editbook/:id",
    component: EditbookComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    // canActivate: [false]
  },
  {
    path: 'userRegistration',
    component: UserRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }