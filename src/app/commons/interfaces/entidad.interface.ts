import { ITipoContribuyente } from './tipo-contribuyente.interface';
import { ITipoDocumento } from './tipo-documento.interface';

export interface IEntidad {
  id: number;
  nro_documento: string;
  razon_social: string;
  nombre_comercial: string;
  direccion: string;
  telefono: string;
  estado: boolean;
  tipo_contribuyente: ITipoContribuyente;
  tipo_documento: ITipoDocumento;
}
