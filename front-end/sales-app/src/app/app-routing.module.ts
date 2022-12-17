import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { ErrorComponent } from './error/error.component';
import { VisualComponent } from './visual/visual.component';
import { DatasetComponent } from './dataset/dataset.component';
import { PredictComponent } from './predict/predict.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'upload',component:UploadComponent,title: "Upload Page"},
  {path:'dataset',component:DatasetComponent,title: "Upload Page"},
  {path:'visual',component:VisualComponent,title: "Visualization"},
  {path:'predict',component:PredictComponent,title: "Forecasting"},
  {path:'**',component:ErrorComponent,title: "404-Error"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
