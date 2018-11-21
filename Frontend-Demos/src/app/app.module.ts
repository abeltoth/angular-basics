import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeViewerComponent } from './components/tree-viewer/tree-viewer.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'treeviewer',
    component: TreeViewerComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TreeViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'treeviewer', component: TreeViewerComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
