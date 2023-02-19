import { FormGroup, FormControl, Validators } from '@angular/forms';
const baseForm = () => ({
  id: new FormControl(null),
  nombre: new FormControl(null, [Validators.required]),
  estado: new FormControl(true, [Validators.required]),
});

export const TipoContribuyenteForm = (): FormGroup => new FormGroup(baseForm());
