import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { AngmapComponent } from './angmap/angmap.component';
import { TreeComponent } from './tree/tree.component';
import { HeadComponent } from './head/head.component';
import { MetaComponent } from './meta/meta.component';
import { FaultComponent } from './fault/fault.component';
import { TestComponent } from './test/test.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DelComponent } from './del/del.component';



const routes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: 'meta', component: MetaComponent },
  { path: 'add', component: AddComponent },
  { path: 'del', component: DelComponent },
  { path: 'edit', component: EditComponent },
  { path: 'fault', component: FaultComponent },
  { path: 'test', component: TestComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'head', component: HeadComponent },
  { path: 'map', component: AngmapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
