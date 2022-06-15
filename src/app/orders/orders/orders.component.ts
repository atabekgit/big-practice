import { Component, OnInit } from '@angular/core';
import { IOrder, ICustomer } from '../../shared/interfaces';
import { DataService } from '../../core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer!: ICustomer;

  constructor(private dataService: DataService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      this.orders = orders;
      console.log(this.orders);

    });
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
      console.log(this.customer);
    });
  }

}
