import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { NgIf, UpperCasePipe,AsyncPipe,DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,UpperCasePipe,AsyncPipe,DatePipe],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private faceSnapsService: FaceSnapsService,private router:Router) { }
  snapForm!: FormGroup
  urlRegex!:RegExp
  faceSnapPreview$!: Observable<FaceSnap>
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group(
      {
        title: [null,Validators.required],
        description: [null,Validators.required],
        imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
        location: [null],
      },
      {
        updateOn:'blur'
      }
    )
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => (
        {
          ...formValue,
          id: 0,
          snaps: 0,
          createdAt:new Date()

        }
      ))
    );

  }
  onSubmitForm(): void {
    console.log(this.snapForm.value);
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => {
        this.router.navigateByUrl('/facesnaps');
      })
    ).subscribe();


  }

}
