import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent
  ],
  exports: [
    CommonModule,
    FaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent
  ]
})
export class FaceSnapsModule { }