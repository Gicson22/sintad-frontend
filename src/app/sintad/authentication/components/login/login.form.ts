import { FormGroup, FormControl, Validators } from '@angular/forms';
const baseForm = () => ({
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required]),
});

export const LoginForm = (): FormGroup => new FormGroup(baseForm());
