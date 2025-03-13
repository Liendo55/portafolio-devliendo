import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimony',
  imports: [TranslatePipe],
  templateUrl: './testimony.component.html',
  styleUrl: './testimony.component.css',
})
export class TestimonyComponent {}
