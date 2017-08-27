import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimePickerComponent implements OnInit {
  isTimePickerEnabled = true;
  timePickerValue: Date = new Date();
  timePickerMeridianValue: Date = new Date();

  constructor() { }

  ngOnInit() { }

}
