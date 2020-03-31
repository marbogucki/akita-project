import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '@app/core/auth/models/auth';
import { AuthService } from '@app/core/auth/state/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {
    this.signInForm = this.createSignInForm();
  }

  public signIn(): void {
    const credentials: Credentials = this.signInForm.value;
    this.authService.signIn(credentials).subscribe(() => this.route.navigateByUrl('/drivers'));
  }

  private createSignInForm(): FormGroup {
    return this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
