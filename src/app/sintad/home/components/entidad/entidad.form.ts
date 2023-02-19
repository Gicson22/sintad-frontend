import { FormGroup, FormControl, Validators } from '@angular/forms';
const baseForm = () => ({
  id: new FormControl(null),
  nro_documento: new FormControl(null, [Validators.required]),
  razon_social: new FormControl(null, [Validators.required]),
  nombre_comercial: new FormControl(null, [Validators.required]),
  direccion: new FormControl(null, [Validators.required]),
  telefono: new FormControl(null, [
    Validators.required,
    Validators.pattern('^([9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$'),
  ]),
  estado: new FormControl(true, [Validators.required]),
  tipo_contribuyente: new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]),
  tipo_documento: new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]),
});

export const EntidadForm = (): FormGroup => new FormGroup(baseForm());
