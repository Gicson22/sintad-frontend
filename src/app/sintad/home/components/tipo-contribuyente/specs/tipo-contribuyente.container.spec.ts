import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoContribuyentesEndpoint } from '../../../endpoints/tipo-contribuyente.endpoint';
import { TipoContribuyenteContainer } from '../tipo-contribuyente.container';

describe('TipoContribuyenteContainer', () => {
  let component: TipoContribuyenteContainer;
  let fixture: ComponentFixture<TipoContribuyenteContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoContribuyenteContainer],
      imports: [HttpClientModule],
      providers: [TipoContribuyentesEndpoint],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoContribuyenteContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
