import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkingDaysService {

  constructor() { }

  public getWorkingDays(): Observable<Date[]> {
    const workingDays = Array
      .from(Array(5).keys())
        .map((idx) => {
          const d = new Date(); 
          d.setDate(d.getDate() - d.getDay() + idx + 1); 
          return d; 
        });
      return of(workingDays);
  }
}
