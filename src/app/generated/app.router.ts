import {Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {SampleComponent} from "./sample/sample.component";
import {Called1Component} from "./called1/called1.component";

export const appRoutes: Routes = [

  // { path: 'calledWithResolver/:id', component: Called2Component,  resolve:{ o: ComponentResolverService} },
  // { path: '', component: AppComponent },
  {path: 'books', component: BooksComponent},
  // { path: 'called/:id', component: Called2Component},
  //{ path: 'called2/:id', component: SampleComponent },
  {path: 'called2', component: SampleComponent},
  {path: 'called1', component: Called1Component},


];
