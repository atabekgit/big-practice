import { environment } from './../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICustomer, IOrder } from '../shared/interfaces';
@Injectable()
export class DataService{

  constructor(private http:HttpClient){}

      getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(`${environment.baseUrl+'/customers'}`)
        .pipe(
          catchError(this.handleError)
        )
      }
      getCustomer(id: number) : Observable<ICustomer> {
        return this.http.get<ICustomer[]>(`${environment.baseUrl}/customers/${id}`)
          .pipe(
             // @ts-ignore
            map(customers => {
              let customer = customers.filter((cust: ICustomer) => cust.id === id);
              return (customer && customer.length) ? customer[0] : null;
            }),
            catchError(this.handleError)
          )
      }

      getOrders(id:number):Observable<IOrder[]>{
        return this.http.get<IOrder[]>(`${environment.baseUrl}/orders/${id}`)
        .pipe(
          map(orders=>{
            let custOrders = orders.filter((order:IOrder)=>order.id === id);
            return custOrders
          }),
          catchError(this.handleError)
        )
      }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return  throwError(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(error || 'Node.js server error');
  }
}
