import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-table-field',
  templateUrl: './table-field.component.html',
  styleUrls: ['./table-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableFieldComponent {
  @Input() public value: any;
  @Input() public config: any;
  @Input() public id: any;
  @Input() public isEditable: boolean = true;
  @Input() public inputType: string = '';

  @Output() public valueChange = new EventEmitter<any>();
  @Output() public edit = new EventEmitter<any>();

  @ContentChild('content') public contentRef: any;

  public isEdit: boolean = false;

  @HostListener('click')
  public onClick(): void {
    if (this.isEditable) this.isEdit = !this.isEdit;
  }

  public onInputClick(event: Event): void {
    event.stopPropagation();
    if (this.inputType === 'checkbox') this.value = !this.value;
  }

  public onMouseLeave(): void {
    this.isEdit = !this.isEdit;
  }
}
