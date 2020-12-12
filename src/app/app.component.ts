import { Component } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  template:
    `<mat-card>
      <mat-card-header>
        <mat-card-title>Overlay Loading Components</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <button mat-raised-button
                color="primary"
                (click)="showOverlay()">Show Overlay</button>
      </mat-card-content>
    </mat-card>`
})
export class AppComponent {

  constructor(private overlay: Overlay) { }

  // tslint:disable-next-line:typedef
  showOverlay() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    overlayRef.attach(new ComponentPortal(LoaderComponent));
  }
}
