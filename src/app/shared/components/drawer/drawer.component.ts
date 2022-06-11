
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDrawer } from 'src/typings/drawer';
import { DrawerService } from '../../services/drawer.service';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('opened', [
      state('closed', style({ maxHeight: '64px', minHeight: '0' })),
      state('opened', style({ maxHeight: '65vh', minHeight: '50vh' })),
      transition('closed => opened', [
        group([
          query('@*', [animateChild()], { optional: true }),
          animate('0.2s'),
        ]),
      ]),
      transition('opened => closed', [
        group([
          query('@*', [animateChild()], { optional: true }),
          animate('0.2s'),
        ]),
      ]),
    ]),
    trigger('rotated', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('300ms ease-out')),
      transition('default => rotated', animate('400ms ease-in')),
    ]),
  ],
})
export class DrawerComponent implements OnInit {
  drawer$: Observable<IDrawer> | undefined;
  rotate: string = '';
  open: string = '';

  constructor(private drawerService: DrawerService) {}

  ngOnInit() {
    this.rotate = 'default';
    this.open = 'closed';
    this.drawer$ = this.drawerService.drawer$;
  }

  toggle(drawer: IDrawer) {
    this.rotate = !drawer.open ? 'rotated' : 'default';
    this.open = !drawer.open ? 'opened' : 'closed';
    this.drawerService.toggle();
  }
}
