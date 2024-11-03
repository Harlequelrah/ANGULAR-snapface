import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  {
  constructor(private router: Router) { }
  emailInput!: string;
  routeToFaceSnaps() {
  this.router.navigateByUrl('/facesnaps');
  }
  onSubmitForm(form:NgForm): void {
    console.log(form.value)
  }

}
