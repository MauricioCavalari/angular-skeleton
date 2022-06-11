import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IDrawer } from 'src/typings/drawer';
import { DrawerService } from '../../services/drawer.service';
import { DrawerComponent } from './drawer.component';


describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to toggle(open) drawer', inject(
    [DrawerService],
    (drawerService: DrawerService) => {
      const toggleSpyOn = spyOn(drawerService, 'toggle');
      const openDrawer: IDrawer = { open: false };
      component.toggle(openDrawer);

      expect(toggleSpyOn).toHaveBeenCalled();
      expect(component.rotate).toEqual('rotated');
      expect(component.open).toEqual('opened');
    },
  ));

  it('should to toggle(close) drawer', inject(
    [DrawerService],
    (drawerService: DrawerService) => {
      const toggleSpyOn = spyOn(drawerService, 'toggle');
      const openDrawer: IDrawer = { open: true };
      component.toggle(openDrawer);

      expect(toggleSpyOn).toHaveBeenCalled();
      expect(component.rotate).toEqual('default');
      expect(component.open).toEqual('closed');
    },
  ));
});
