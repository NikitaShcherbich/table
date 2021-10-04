import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { HeaderFieldModule } from '../header-field/header-field.module';
import { TableFieldModule } from '../table-field/table-field.module';
import { ActionFieldModule } from '../action-field/action-field.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableFieldModule,
    HeaderFieldModule,
    ActionFieldModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
