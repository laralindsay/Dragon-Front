import { Component } from '@angular/core';
import { DragonsCuriosityComponent } from './dragons-curiosity/dragons-curiosity.component';
import { HomeDragonsComponent } from './home-dragons/home-dragons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HomeDragonsComponent, DragonsCuriosityComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
