import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  debounceTime,
  fromEvent,
  interval,
  map,
  Subject,
  take,
  takeUntil,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-time-control',
  imports: [],
  templateUrl: './time-control.component.html',
  styleUrl: './time-control.component.css',
})
export class TimeControlComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    interval(1000)
      .pipe(
        take(5),
        takeUntil(this.destroy$),
        map((val) => 'Interval: ' + val)
      )
      .subscribe((val) => console.log(val));

    timer(2000, 1000)
      .pipe(
        take(3),
        takeUntil(this.destroy$),
        map((val) => 'Timer: ' + val)
      )
      .subscribe((val) => console.log(val));

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe((event: any) => {
        console.log('Input event:', event.target.value);
      });
  }

  stop() {
    this.destroy$.next();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
