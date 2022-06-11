import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoInline } from './info-inline.component';
registerLocaleData(ptBr);

describe('InfoInline', () => {
  let component: InfoInline;
  let fixture: ComponentFixture<InfoInline>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoInline],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoInline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Values on Card', () => {
    it("should show 'Value' with mask", () => {
      component.value = 1000.0;
      component.monetary = true;
      //component.secrecy = true;
      fixture.detectChanges();

      const element = fixture.debugElement.query(By.css('.value'));
      expect(element.nativeElement.textContent).toBe('R$1,000.00');
    });
  });
});
