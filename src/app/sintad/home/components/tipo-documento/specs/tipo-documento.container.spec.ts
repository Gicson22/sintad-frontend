import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoDocumentosEndpoint } from '../../../endpoints/tipo-documento.endpoint';
import { TipoDocumentoContainer } from '../tipo-documento.container';


describe('TipoDocumentoContainer', () => {
  let component: TipoDocumentoContainer;
  let fixture: ComponentFixture<TipoDocumentoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoDocumentoContainer],
      imports: [HttpClientModule],
      providers: [TipoDocumentosEndpoint],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoDocumentoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
