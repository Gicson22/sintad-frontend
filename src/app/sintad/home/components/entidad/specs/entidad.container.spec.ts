import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentidadEndpoint } from '../../../endpoints/entidad.endpoint';
import { TipoContribuyentesEndpoint } from '../../../endpoints/tipo-contribuyente.endpoint';
import { TipoDocumentosEndpoint } from '../../../endpoints/tipo-documento.endpoint';
import { EntidadContainer } from '../entidad.container';

describe('EntidadContainer', () => {
  let component: EntidadContainer;
  let fixture: ComponentFixture<EntidadContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntidadContainer],
      imports: [HttpClientModule],
      providers: [
        IdentidadEndpoint,
        TipoDocumentosEndpoint,
        TipoContribuyentesEndpoint,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EntidadContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
