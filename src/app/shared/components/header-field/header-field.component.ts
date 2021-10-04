import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header-field',
  templateUrl: './header-field.component.html',
  styleUrls: ['./header-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderFieldComponent {
  @Input() public config: any;

  @Output() public sort = new EventEmitter<any>();

  public direction = false;

  public onSort(item: any): void {
    this.direction = !this.direction;
    this.sort.emit({ ...item, direction: this.direction });
  }
}
