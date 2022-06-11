import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Subscription } from 'rxjs';
import { distinctUntilChanged, map, share, throttleTime } from 'rxjs/operators';
import { IFloatButton } from './float-button.model';

@Component({
  selector: 'float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss'],
})
export class FloatButtonComponent implements AfterContentInit {
  @ViewChild('container', { static: false }) container!: ElementRef;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  @Input() label: any;

  sub = new Subscription();
  bottom = new BehaviorSubject<boolean>(false);

  get scroll$() {
    return merge(fromEvent(window, 'scroll')).pipe(
      throttleTime(10),
      map(this.mapper),
      distinctUntilChanged(this.changed.bind(this)),
      share(),
    );
  }

  changed(axys: IFloatButton) {
    const current = this.mapper();
    const height = current.height == axys.height;
    const offset = current.offset == axys.offset;
    return height && offset;
  }

  mapper(): IFloatButton {
    const height = document.body.offsetHeight;
    const offset = window.pageYOffset;
    return { height, offset };
  }

  ngAfterContentInit() {
    this.sub.add(this.scroll$.subscribe(this.recalc.bind(this)));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.bottom.unsubscribe();
  }

  recalc({ offset }: IFloatButton) {
    const button: HTMLDivElement = this.container.nativeElement;
    const buttonOffset = button.offsetTop - window.innerHeight;
    const bottom = buttonOffset < 0 || offset > buttonOffset + 48 + 32;
    this.bottom.next(bottom);
  }
}
