import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfiguratorService} from '../configurator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step1',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  service = inject(ConfiguratorService);
}
