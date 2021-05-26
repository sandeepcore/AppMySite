import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log(worksheet["!cols"].keys().next())
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  public importFromFile(bstr: string): XLSX.AOA2SheetOpts {
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];
    const data = <XLSX.AOA2SheetOpts>(XLSX.utils.sheet_to_json(ws, { header: 1 }));

    return data;
  }

  downloadPdf(pdfUrl: string, pdfName: string) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }


  // generateExcel(json: any[], title: string) {


  //   const header = ["Request Date", "User Name", "Manager Name", "Leave Type", "Leave Balance", "Leave Duration", "Start Date", "End Date", "Total Hours", "Leave Reason", "Manager's Remark"]
  //   //Create workbook and worksheet
  //   let workbook = new Workbook();
  //   let worksheet = workbook.addWorksheet(title);
  //   //Add Row and formatting
  //   // let titleRow = worksheet.addRow([title]);
  //   // titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true }
  //   // worksheet.addRow([]);
  //   // let subTitleRow = worksheet.addRow(['Date : ' + new DatePipe('en-US').transform(new Date(), 'medium')])
  //   //Add Image
  //   // let logo = workbook.addImage({
  //   //   base64: logoFile.logoBase64,
  //   //   extension: 'png',
  //   // });
  //   // worksheet.addImage(logo, 'E1:F3');
  //   // worksheet.mergeCells('A1:D2');
  //   // //Blank Row 
  //   // worksheet.addRow([]);
  //   //Add Header Row
  //   let headerRow = worksheet.addRow(header);
  //   headerRow.font = { bold: true }

  //   // Cell Style : Fill and Border
  //   headerRow.eachCell((cell, number) => {
  //     cell.fill = {
  //       type: 'pattern',
  //       pattern: 'solid',
  //       fgColor: { argb: 'FFFFFF00' },
  //       bgColor: { argb: 'FF0000FF' }
  //     }
  //     cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
  //   })
  //   // worksheet.addRows(data);
  //   // Add Data and Conditional Formatting
  //   json.forEach(d => {
  //     let value: any[] = [];
  //     header.forEach(v => {
  //       // if(v==='Leave Balance'){
  //       //   value.push(new LeaveBalancePipe().transform(d[headerEnum[v]]))
  //       // }
  //       // else{
  //       // value.push(new DataTypePipe().transform(d[headerEnum[v]]))
  //       // }
        
  //     })
  //     let row = worksheet.addRow(value);
  //     let qty = row.getCell(5);
  //     let color = 'FF99FF99';
  //     if (+qty.value < 500) {
  //       color = 'FF9999'
  //     }
  //     qty.fill = {
  //       type: 'pattern',
  //       pattern: 'solid',
  //       fgColor: { argb: color }
  //     }
  //     // let qty9 = row.getCell(9);
  //     // if (qty9.value != null && qty9.value.length > 100) {
  //     //   row.alignment = { vertical: 'middle', horizontal: 'right' };
  //     //   qty9.alignment = { wrapText: true };
  //     // }
  //     // let qty10 = row.getCell(10);
  //     // if (qty10.value != null && qty10.value.length > 100) {
  //     //   row.alignment = { vertical: 'middle', horizontal: 'left' };
  //     //   qty10.alignment = { wrapText: true };
  //     // }
  //   }
  //   );
  //   worksheet.getColumn(2).width = 20;
  //   worksheet.getColumn(3).width = 20;
  //   worksheet.getColumn(4).width = 20;
  //   worksheet.getColumn(9).width = 30;
  //   worksheet.getColumn(10).width = 30;
  //   worksheet.addRow([]);
  //   //Footer Row
  //   // let footerRow = worksheet.addRow(['This is system generated excel sheet.']);
  //   // footerRow.getCell(1).fill = {
  //   //   type: 'pattern',
  //   //   pattern: 'solid',
  //   //   fgColor: { argb: 'FFCCFFE5' }
  //   // };
  //   // footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
  //   //Merge Cells
  //   // worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
  //   //Generate Excel File with given name
  //   const excelBuffer: any = workbook.xlsx.writeBuffer().then((data) => {
  //     let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //     // FileSaver.saveAs(blob, 'CarData.xlsx');
  //     FileSaver.saveAs(blob, title + '_report_' + new Date().toDateString() + EXCEL_EXTENSION);
  //   })
  // }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_report_' + new Date().toDateString() + EXCEL_EXTENSION);
  }

  generateUserExcel(json, title: string, head) {
   

    let header = []
    head.forEach(el => {
    header.push(el.header);
    });

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(title);


    

    let headerRow = worksheet.addRow(header);
    headerRow.font = { bold: true }
  

    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    worksheet.views = [
      {state: 'frozen', ySplit: 1}
]
  
        json.forEach(d => {
        let value: any[] = [];
        head.forEach(ele => {
          value.push(d[ele.field]);
        });

  
        let row = worksheet.addRow(value);
        row.alignment = { vertical: 'middle', horizontal: 'left' };
        
  
        let qty1 = row.getCell(1);
        if (qty1.value != null) {
        row.alignment = { vertical: 'middle', horizontal: 'left' };
        qty1.alignment = { wrapText: true };
        }
  
      })
      worksheet.columns.forEach(function (column, i) {
        var maxLength = 0;
        column["eachCell"]({ includeEmpty: true }, function (cell) {
            var columnLength = cell.value ? cell.value.toString().length : 10;
            if (columnLength > maxLength ) {
                maxLength = columnLength;
            }
        });
        column.width = maxLength < 10 ? 10 : maxLength;
    });
      // worksheet.getColumn(1).width = 20;
      // worksheet.getColumn(2).width = 15;
      // worksheet.getColumn(3).width = 15;
      // worksheet.getColumn(4).width = 10;
      
    
   
   
    const excelBuffer: any = workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      // FileSaver.saveAs(blob, 'CarData.xlsx');
      FileSaver.saveAs(blob, title + '_report_' + new Date().toDateString() + EXCEL_EXTENSION);
    })

  }

}


// enum headerEnum {
//   "Request Date" = 'Entry_Date',
//   "User Name" = 'UserName',
//   "Manager Name" = 'ManagerName',
//   "Leave Type" = 'LeaveType',
//   "Leave Balance" = 'Leave_Balance',
//   "Leave Duration" = 'Leave_Duration_Type_Name',
//   "Start Date" = 'Leave_Apply_Date_From',
//   "End Date" = 'Leave_Apply_Date_To',
//   "Total Hours" = 'Leave_Hours',
//   "Leave Reason" = 'Leave_Reason',
//   "Manager's Remark" = 'Approver_Comments'
// }


enum UserHeaderEnum {
  "Voter Name" = 'voter_name',
  "Tower Number" = 'tower_no',
  "Flat Number" = 'flat_no',
  "Gender" = 'gender'
}
enum Election{
  "Candidate Name"='candidateName',
  "Tower Number" = 'tower_no',
  "Flat Number" = 'flat_no',
  "Gender" = 'gender',
  "Vote Counts"='vcount'
}
