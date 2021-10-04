import { TableFieldTypes } from '../enums/table-field-types.enum';

export interface TableBodyConfig {
  field: string;
  type: TableFieldTypes;
  editable: boolean;
}
