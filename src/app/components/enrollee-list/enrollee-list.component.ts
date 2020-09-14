import { Component, OnInit } from '@angular/core';
import { EnrolleeService } from 'src/app/services/enrollee.service';
import { Enrollee } from '../../interfaces/enrollee';

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeListComponent implements OnInit {
  public enrolleeList: Array<Enrollee> = [];
  public editIndex: number;
  public successMsg: string;
  constructor(private readonly enrolleeService: EnrolleeService) { }

  ngOnInit() {
    this.enrolleeService.getEnrolleee().subscribe(resp => {
      if (resp) {
        this.enrolleeList = resp;
      }
    });
  }

  public editEnrollee(index): void {
    this.editIndex = index;
  }

  public removeEnrollee(index): void {
    // API to delete record
    this.enrolleeList.splice(index, 1);
    this.successMsg = `Record deleted successfully`;
    // Will replace with a toaster service
    setTimeout(() => {
      this.successMsg = undefined;
    }, 3000);
  }

  public saveEnrollee(index): void {
    const enrollee = this.enrolleeList[index];
    if (enrollee) {
      this.enrolleeService.updateEnrolleee(enrollee.id, enrollee).subscribe(resp => {
        this.editIndex = undefined;
        this.enrolleeList[index] = resp;
        this.successMsg = `${resp.name} updated successfully`;
        // Will replace with a toaster service
        setTimeout(() => {
          this.successMsg = undefined;
        }, 3000);
      }, error => {
        this.editIndex = undefined;
        this.successMsg = undefined;
      });
    }
  }

}
