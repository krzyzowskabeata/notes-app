import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  @Input({ required: true }) label!: string;
  @Input() placeholder!: string;
  @Input() value!: string;
  @Input() hint!: string;
  @Input() validators!: ValidatorFn[];

  @Output() searchEvent = new EventEmitter<string | null>();

  form = new FormGroup({
    search: new FormControl(this.value) // ToDo: Add validators, what if value changes in input?
  });

  ngOnInit(): void {
    this.form.controls.search.setValue(this.value);
    this.form.controls.search.setValidators(this.validators);

    this.form.controls.search.valueChanges
      .subscribe(value => this.searchEvent.emit(value));
  }

}
