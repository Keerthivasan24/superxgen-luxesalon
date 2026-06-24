import {
  Component, Input, OnInit, OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthMode, UserRole } from '../../models/auth.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls:  ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, OnDestroy {
  @Input() redirectUrl   = '/';
  @Input() initialMode: AuthMode   = 'login';
  @Input() initialRole: UserRole   = 'user';

  mode:         AuthMode  = 'login';
  selectedRole: UserRole  = 'user';

  loginForm!:    FormGroup;
  registerForm!: FormGroup;

  showLoginPass    = false;
  showRegisterPass = false;

  otpSent  = false;
  otpValue = '';
  otpPhone = '';
  otpTimer = 0;
  private otpInterval!: ReturnType<typeof setInterval>;

  constructor(
    private fb:   FormBuilder,
    public  auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.mode         = this.initialMode;
    this.selectedRole = this.initialRole;
    this.buildForms();
    this.auth.clearError();
  }

  private buildForms(): void {
    this.loginForm = this.fb.group({
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.registerForm = this.buildRegisterForm();
  }

  private buildRegisterForm(): FormGroup {
    const base: Record<string, any> = {
      name:     ['', [Validators.required, Validators.minLength(2)]],
      email:    ['', [Validators.required, Validators.email]],
      phone:    ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      agree:    [false, Validators.requiredTrue],
    };

    if (this.selectedRole === 'owner') {
      base['salonName'] = ['', [Validators.required, Validators.minLength(2)]];
    }

    return this.fb.group(base);
  }

  setMode(m: AuthMode): void {
    this.mode = m;
    this.auth.clearError();
  }

  setRole(role: UserRole): void {
    this.selectedRole = role;
    // Rebuild register form to add/remove salonName field
    this.registerForm = this.buildRegisterForm();
    this.auth.clearError();
  }

  submitLogin(): void {
    this.loginForm.markAllAsTouched();
    if (!this.loginForm.valid) return;
    this.auth.login({
      ...this.loginForm.value,
      role: this.selectedRole,
    });
  }

  submitRegister(): void {
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) return;
    this.auth.register({
      ...this.registerForm.value,
      role: this.selectedRole,
    });
  }

  googleAuth(): void {
    this.auth.loginWithGoogle(this.selectedRole);
  }

  // ── OTP ──────────────────────────────────────────────
  sendOtp(): void {
    if (!this.otpPhone || this.otpPhone.length < 10) return;
    this.otpSent  = true;
    this.otpTimer = 30;
    this.otpInterval = setInterval(() => {
      this.otpTimer--;
      if (this.otpTimer <= 0) clearInterval(this.otpInterval);
    }, 1000);
  }

  verifyOtp(): void {
    if (this.otpValue.length === 6) {
      this.auth.loginWithGoogle(this.selectedRole);
    }
  }

  get lf() { return this.loginForm.controls; }
  get rf() { return this.registerForm.controls; }

  ngOnDestroy(): void { clearInterval(this.otpInterval); }
}