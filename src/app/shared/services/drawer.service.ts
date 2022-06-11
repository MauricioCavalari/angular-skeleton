import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { IDrawer } from 'src/typings/drawer';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawer = new BehaviorSubject<IDrawer>({ open: false });
  public drawer$ = this.drawer.asObservable().pipe(distinctUntilChanged());

  close = (): void => this.setDrawer({ open: false });
  open = (): void => this.setDrawer({ open: true });
  toggle = (): void => this.setDrawer({ open: !this.getDrawer().open });

  getDrawer = (): IDrawer => this.drawer.value;
  setDrawer = (value: Partial<IDrawer>): void => {
    this.nextDrawer({ ...this.getDrawer(), ...value });
  };

  private nextDrawer = (value: IDrawer): void => this.drawer.next(value);
}
