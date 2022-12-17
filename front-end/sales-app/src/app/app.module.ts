import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatasetComponent } from './dataset/dataset.component';
import { VisualComponent } from './visual/visual.component';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ErrorComponent } from './error/error.component';
import { PredictComponent } from './predict/predict.component';
import {PowerBIEmbedModule} from 'powerbi-client-angular';





@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoginComponent,
    DatasetComponent,
    VisualComponent,
    ErrorComponent,
    PredictComponent
  ],
  imports: [ BrowserModule,AppRoutingModule,FormsModule,HttpClientModule,MatIconModule,MatProgressBarModule,PowerBIEmbedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
