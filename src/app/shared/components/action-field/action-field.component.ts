import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-action-field',
  templateUrl: './action-field.component.html',
  styleUrls: ['./action-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionFieldComponent {}
