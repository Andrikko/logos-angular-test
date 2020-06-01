import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

interface Country {
  name: string;
  checked: boolean;
  status: string;
  area: number;
  population: number;
  date: Date;
}

//1. structures - NgIf ngFor
//2. attributed - ngStyle, ngClass,


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  countries: Country[] = [
    {
      name: 'Ukraine',
      checked: true,
      status: 'Done',
      area: 535344,
      population: 54332,
      date: new Date()
    },
    {
      name: 'Canada',
      checked: true,
      status: 'Done',
      area: 53554,
      population: 1221221,
      date: new Date()
    },
    {
      name: 'China',
      checked: true,
      status: 'Done',
      area: 535344,
      population: 12221,
      date: new Date()
    },
    {
      name: 'France',
      checked: true,
      status: 'Done',
      area: 5322244,
      population: 12131221,
      date: new Date()
    },
    {
      name: 'Spain',
      checked: true,
      status: 'Done',
      area: 5344,
      population: 12131,
      date: new Date()
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

  changeCheckboxValue(country: Country) {
    country.checked = !country.checked;
    country.status = country.checked ? 'Done' : 'In progress';
  }

  edit(country: Country, index: number) {
    this.emitValueToEdit.emit({country: country, index: index});
    // this.emitValueToEdit.emit({country, index});
  }

  delete(index) {
    this.countries.splice(index, 1);
  }


}
