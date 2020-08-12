import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input("currentStep") currentStep: number;
  @Input("totalSteps") totalSteps: number;

  constructor() { }

  ngOnInit(): void {
  }

}
