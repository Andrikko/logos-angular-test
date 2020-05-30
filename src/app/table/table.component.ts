import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  countries = [
    {
      name: 'Ukraine',
      checked: true,
      status: 'Done',
      area: 535344,
      population: 54332
    },
    {
      name: 'Canada',
      checked: true,
      status: 'Done',
      area: 53554,
      population: 1221221
    },
    {
      name: 'China',
      checked: true,
      status: 'Done',
      area: 535344,
      population: 12221
    },
    {
      name: 'France',
      checked: true,
      status: 'Done',
      area: 5322244,
      population: 12131221
    },
    {
      name: 'Spain',
      checked: true,
      status: 'Done',
      area: 5344,
      population: 12131
    }
  ];

  @ViewChild('input', {static: false}) input;

  @Input() newCountry: any;
  @Input() editedCountry: any;
  @Output() emitValueToEdit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.newCountry && changes.newCountry.currentValue) {
      this.countries.push(changes.newCountry.currentValue);
    } else if (changes.editedCountry && changes.editedCountry.currentValue) {
      this.countries[changes.editedCountry.currentValue.index].name = changes.editedCountry.currentValue.newValue;
    }


  }

  ngOnInit(): void {
  }

  changeCheckboxValue(country) {
    country.checked = !country.checked;
    country.status = country.checked ? 'Done' : 'In progress';
  }

  edit(country, index) {
    this.emitValueToEdit.emit({country: country, index: index});
    // this.emitValueToEdit.emit({country, index});
  }

  delete(index) {
    this.countries.splice(index, 1);
  }


}
