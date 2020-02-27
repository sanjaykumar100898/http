import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { AngmapComponent } from './angmap/angmap.component';
import { TreeComponent } from './tree/tree.component';
import { HeadComponent } from './head/head.component';
import { MetaComponent } from './meta/meta.component';
import { FaultComponent } from './fault/fault.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DelComponent } from './del/del.component';

import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';

import{ HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    AngmapComponent,
    TreeComponent,
    HeadComponent,
    MetaComponent,
    FaultComponent,
    AddComponent,
    EditComponent,
    DelComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
