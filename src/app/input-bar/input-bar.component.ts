import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent implements OnInit, OnChanges {

  @Input() text: string = 'Click';
  @Input() editValue: any;
  @Output() pushValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() editValueEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('myInput', {static: false}) myInput;

  value: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.editValue && changes.editValue.currentValue) {
      this.value = changes.editValue.currentValue.country.name;
    }
  }

  submit() {
    if (this.text === 'Add') {
      this.pushValue.emit({
        name: this.myInput.nativeElement.value,
        checked: true,
        status: 'Done',
        area: 5435435,
        population: 123241421
      });

      this.myInput.nativeElement.value = '';
    } else if (this.text === 'Save') {
      this.editValueEvent.emit({newValue: this.myInput.nativeElement.value, index: this.editValue.index});
    }

  }

}
