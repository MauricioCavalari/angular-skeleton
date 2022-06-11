import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FloatButtonComponent } from "../projects/pdpj-lib-components/src/lib/componentes/float-button/float-button.component";

describe("FloatButtonComponent", () => {
  let component: FloatButtonComponent;
  let fixture: ComponentFixture<FloatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FloatButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatButtonComponent);
    component = fixture.componentInstance;
    component.ngAfterContentInit();
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(component.bottom.value).toBe(false);
  });

  it("should changed", () => {
    expect(component.changed({ height: 0, offset: 0 })).toBeTruthy();
    Object.defineProperty(window, "pageYOffset", { value: 1000 });
    expect(component.changed({ height: 100, offset: 0 })).toBeFalsy();
  });

  it("should be static", () => {
    Object.defineProperty(window, "innerHeight", { value: 1000 });
    Object.defineProperty(window, "pageYOffset", { value: 1000 });
    window.dispatchEvent(new Event("scroll"));

    expect(component.container.nativeElement).toBeDefined();
    expect(component.container.nativeElement.offsetTop).toBe(0);
    expect(component.bottom.value).toBe(true);
  });
});
