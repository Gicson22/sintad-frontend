import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioEndpoint } from '../../../endpoints/usuario.endpoint';
import { UsuarioContainer } from '../usuario.container';

describe('UsuarioContainer', () => {
  let component: UsuarioContainer;
  let fixture: ComponentFixture<UsuarioContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioContainer],
      imports: [HttpClientModule],
      providers: [UsuarioEndpoint],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
