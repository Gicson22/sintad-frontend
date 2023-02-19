import { FormGroup, FormControl, Validators } from '@angular/forms';
const baseForm = () => ({
  nombre: new FormControl(null, [Validators.required]),
  apellidos: new FormControl(null, [Validators.required]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  password: new FormControl(null, [Validators.required]),
  estado: new FormControl(true, [Validators.required]),
});

export const UsuarioForm = (): FormGroup => new FormGroup(baseForm());
