import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  @Input({ required: true }) label!: string;

  @Input() placeholder!: string;
  @Input() hint!: string;

  @Input() set value(v: string) { this.form.controls.search.setValue(v); }
  @Input() set validators(vFn: ValidatorFn[]) { this.form.controls.search.setValidators(vFn); }

  @Output() searchEvent = new EventEmitter<string | null>();

  form = new FormGroup({
    search: new FormControl(this.value)
  });

  ngOnInit(): void {
    this.form.controls.search.valueChanges
      .subscribe(value => this.searchEvent.emit(value));
  }

}
