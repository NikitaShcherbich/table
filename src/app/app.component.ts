import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TABLE_BODY } from './shared/constants/table-body.constants';
import { TABLE_HEADERS } from './shared/constants/table-headers.constants';
import { Data } from './shared/interfaces/data.interface';
import { TableBodyConfig } from './shared/interfaces/table-body.interface';
import { TableHeaderConfig } from './shared/interfaces/table-header.interface';
import { DataApiService } from './shared/services/api/data.api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public headerConfig: TableHeaderConfig[] = TABLE_HEADERS;
  public bodyConfig: TableBodyConfig[] = TABLE_BODY;
  public data: Data[] = [];

  constructor(
    private dataApiService: DataApiService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.dataApiService.getData().subscribe((data: any) => {
      this.data = data.result;
      this.cdr.markForCheck();
    });
  }

  public deleteItem(item: Data): void {
    this.data = this.data.filter((value: any) => value != item);
  }

  public addItem(item: Data): void {
    const index = this.data.indexOf(item);
    this.data.splice(index + 1, 0, item);
  }
}
