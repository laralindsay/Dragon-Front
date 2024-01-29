import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DataDragonsService } from '@app/services/data-dragons.service';
import { DragonsData } from '@app/models/data-dragons';

@Component({
  selector: 'app-home-dragons',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './home-dragons.component.html',
  styleUrl: './home-dragons.component.scss'
})
export class HomeDragonsComponent implements OnInit {
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
