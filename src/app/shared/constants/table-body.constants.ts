import { TableFieldTypes } from '../enums/table-field-types.enum';

export const TABLE_BODY: any[] = [
  {
    field: 'healthIndex',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'endDate',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'minValueDateTime',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'type',
    type: TableFieldTypes.String,
    editable: true,
  },
  {
    field: 'cowId',
    type: TableFieldTypes.Number,
    editable: false,
  },
  {
    field: 'animalId',
    type: TableFieldTypes.String,
    editable: false,
  },
  {
    field: 'eventId',
    type: TableFieldTypes.Number,
    editable: false,
  },
  {
    field: 'deletable',
    type: TableFieldTypes.Boolean,
    editable: true,
  },
  {
    field: 'lactationNumber',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'daysInLactation',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'heaageInDayslthIndex',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'startDateTime',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'reportingDateTime',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'alertType',
    type: TableFieldTypes.String,
    editable: true,
  },
  {
    field: 'duration',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'originalStartDateTime',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'endDateTime',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'daysInPregnancy',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'heatIndexPeak',
    type: TableFieldTypes.String,
    editable: true,
  },
  {
    field: 'newGroupId',
    type: TableFieldTypes.Number,
    editable: false,
  },
  {
    field: 'newGroupName',
    type: TableFieldTypes.String,
    editable: true,
  },
  {
    field: 'currentGroupId',
    type: TableFieldTypes.Number,
    editable: false,
  },
  {
    field: 'currentGroupName',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'destinationGroup',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'destinationGroupName',
    type: TableFieldTypes.String,
    editable: true,
  },
  {
    field: 'calvingEase',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'oldLactationNumber',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'newborns',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'cowEntryStatus',
    type: TableFieldTypes.String,
    editable: true,
  },
  {
    field: 'birthDateCalculated',
    type: TableFieldTypes.Boolean,
    editable: true,
  },
  {
    field: 'sire',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'breedingNumber',
    type: TableFieldTypes.Number,
    editable: true,
  },
  {
    field: 'isOutOfBreedingWindow',
    type: TableFieldTypes.Boolean,
    editable: true,
  },
  {
    field: 'interval',
    type: TableFieldTypes.Number,
    editable: true,
  },
];
