import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentlistComponent {
  @ViewChild('ConfirmationDialog') ConfirmDeleteDialog: any;
  @ViewChild('table', { static: false }) table!: ElementRef;

  constructor(public _adminService: AdminService, public dialog: MatDialog) {}

  downloadPDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');

    html2canvas(this.table.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 size
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      pdf.save('table.pdf');
    });
  }

  downloadExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    saveAs(data, 'table.xlsx');
  }

  ngOnInit(): void {
    this._adminService.GetAllStudents();
  }

  DeleteStudent(id: number) {
    this._adminService.DeleteStudent(id);
  }

  OpenDeleteStudentDialgo(studentId: number) {
    var dialog = this.dialog.open(this.ConfirmDeleteDialog);
    dialog.afterClosed().subscribe((result) => {
      if (result == 'yes')
        this.DeleteStudent(studentId)
    });
  }
}
