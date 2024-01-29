import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { Component } from '@angular/core';
import { DataDragonsService } from '@app/services/data-dragons.service';
import { DragonsData } from '@app/models/data-dragons';

@Component({
  selector: 'app-dragons-curiosity',
  standalone: true,
  imports: [CarouselModule, CardModule],
  templateUrl: './dragons-curiosity.component.html',
  styleUrl: './dragons-curiosity.component.scss'
})
export class DragonsCuriosityComponent {
  products?: DragonsData[] | any;

  responsiveOptions?: any[] | undefined;

  constructor(private productService: DataDragonsService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((products) => {
          this.products = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }
}
