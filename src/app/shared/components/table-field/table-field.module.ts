import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFieldComponent } from './table-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableFieldComponent],
  imports: [CommonModule, FormsModule],
  exports: [TableFieldComponent],
})
export class TableFieldModule {}
