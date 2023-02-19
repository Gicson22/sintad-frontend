import { FormGroup, FormControl, Validators } from '@angular/forms';
const baseForm = () => ({
  id: new FormControl(null),
  nombre: new FormControl(null, [Validators.required]),
  descripcion: new FormControl(null, [Validators.required]),
  codigo: new FormControl(null, [Validators.required]),
  estado: new FormControl(true, [Validators.required]),
});

export const TipoDocumentoForm = (): FormGroup => new FormGroup(baseForm());
