import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { SohoDropdownComponent } from '../../components/dropdown';
import { SohoButtonComponent } from '../../components/button';

@Component({
  selector: 'soho-dropdown-demo',
  templateUrl: 'dropdown.demo.html',
  directives: [ SohoButtonComponent, SohoDropdownComponent, REACTIVE_FORM_DIRECTIVES ],
})
export class DropdownDemoComponent implements OnInit {
  private options: Array<Object> = [
    { value: 'AL', text: 'Alabama' },
    { value: 'CA', text: 'California' },
    { value: 'DE', text: 'Delaware' },
    { value: 'NY', text: 'New York' },
    { value: 'WY', text: 'Wyoming' },
  ];
  private counter = 0;
  private model = { // tslint:disable-line
    single: '',
    readOnly: 'DE',
    modifiable: this.options[3],
  };
  private showModel = false;

  constructor() { }
  ngOnInit() { }
  onAddOption() {
    this.options.push({ value: 'test' + this.counter, text: 'Test ' + this.counter });
    this.counter++;
  }
  onRemoveOption() {
    this.options.pop();
  }
  toggleModel() {
    this.showModel = !this.showModel;
  }
}