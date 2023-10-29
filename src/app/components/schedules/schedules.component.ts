import { Component, OnInit } from '@angular/core';
import { ISchedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  schedules: ISchedule[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.getSchedules();
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(schedules => this.schedules = schedules);
  }

  delete(schedule: ISchedule): void{
    if(confirm("Are you sure?") == true){
      this.schedules = this.schedules.filter(s => s !== schedule);
      this.scheduleService.deleteSchedule(schedule._id).subscribe();
    }
  }
}
