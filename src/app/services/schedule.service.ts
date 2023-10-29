import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ISchedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private schedulesUrl = 'http://localhost:9090/schedules';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getSchedules(): Observable<ISchedule[]> {
    return this.http.get<ISchedule[]>(this.schedulesUrl);
  }

  getSchedule(id: string): Observable<ISchedule> {
    const url = `${this.schedulesUrl}/${id}`;
    return this.http.get<ISchedule>(url)
  }

  //////// Save methods //////////

  /** PUT: update the schedule on the server */
  updateSchedule(id: string, schedule: any): Observable<any> {
    const url = `${this.schedulesUrl}/${id}`;
    return this.http.put<ISchedule>(url, schedule);
  }

  //////// Delete methods //////////

  //**DELETE: delete the schedule on the server */
  deleteSchedule(id: string): Observable<ISchedule> {
    const url = `${this.schedulesUrl}/${id}`;
    return this.http.delete<ISchedule>(url);
  }
}
