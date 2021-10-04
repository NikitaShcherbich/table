import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Column } from '../../interfaces/column.interface';
import { Data } from '../../interfaces/data.interface';
import { TableBodyConfig } from '../../interfaces/table-body.interface';
import { TableHeaderConfig } from '../../interfaces/table-header.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() public headerConfig: TableHeaderConfig[] = [];
  @Input() public bodyConfig: TableBodyConfig[] = [];
  @Input() public data: any[] = [];

  @Output() public deleteItem = new EventEmitter<any>();
  @Output() public addItem = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {}

  public onDeleteItem(item: any): void {
    this.deleteItem.emit(item);
  }

  public onAddItem(item: any): void {
    this.addItem.emit(item);
  }

  public sortNumber(firstElem: number, secondElem: number): number {
    return firstElem - secondElem || firstElem ? 1 : -1;
  }

  public sortString(firstElem: string, secondElem: string): number {
    if (firstElem > secondElem) {
      return -1;
    } else if (firstElem < secondElem) {
      return 1;
    } else {
      return 0;
    }
  }

  public sortColumn(column: Column): any {
    this.data = this.data.sort((a: any, b: any) => {
      if (column.direction) {
        if (typeof a[column.field] == 'number') {
          return this.sortNumber(a[column.field], b[column.field]);
        } else {
          return this.sortString(a[column.field], b[column.field]);
        }
      } else {
        if (typeof a[column.field] == 'number') {
          return this.sortNumber(b[column.field], a[column.field]);
        } else {
          return this.sortString(b[column.field], a[column.field]);
        }
      }
    });
    this.cdr.markForCheck();
  }
}
