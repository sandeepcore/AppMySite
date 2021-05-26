import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() showTagNotes: boolean = true;
  @Input() data: any; //table data 
  @Input() sorting: boolean = true;
  @Input() advSearch: boolean = false;
  @Input() action: boolean = false;
  @Input() selectedOption = "Active"; // for active and archive
  @Input() cols=[]; // data of headers
  @Input() export: boolean = false; //for printing data
  @Input() header: any;  //array of header
  @Input() globalSearch: any;

  @Output() rowClick = new EventEmitter(); // for emmiting row data
  
  @ViewChild("paginator1", { static: true }) paginator1: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('search', { static: true }) searchElement: ElementRef;

  

  @Output() archive = new EventEmitter();
  @Output() restore = new EventEmitter();
  @Output() url = new EventEmitter();
  @Output() notes = new EventEmitter();
  @Output() tags = new EventEmitter();

  @Output() clickElsewhere = new EventEmitter<MouseEvent>(); 
 
  menuC;
  dataSource;
  tableFilters = [];
  exportArray: any;
  search: boolean = false;
  search_value: string;
  inp;
  inputField;
  dateFrom: Date;
  dateTo: Date;
  clearFilterFlag:boolean;

 
  constructor(private elementRef: ElementRef,
    //private excelService: ExcelService,
   // private toast: ToastrService
    ) { }
  
  ngOnInit() {
    const input: HTMLInputElement = this.elementRef.nativeElement as HTMLInputElement;
    input.focus();
    //input.s select();
    this.cols.forEach(e => {
      e.filter=false;
    });
    this.dataSource = new MatTableDataSource(this.data);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
  
    
    if(this.export){
     if(!this.clearFilterFlag){
      this.exportArray = this.dataSource.data;
     }

     //this.excelService.generateUserExcel(this.exportArray, 'Document', this.cols);
    }
    else{
      this.dataSource = new MatTableDataSource(this.data);
      this.refreshList();
      if(changes['globalSearch']){
       
        
        let found1: boolean = false;
      
          for(let i=0;i<this.tableFilters.length;i++){
            
            if(this.tableFilters[i].id == "globalSearch")
            {
             this.tableFilters[i].value = this.globalSearch.toLowerCase();
              found1= true;
              break;
            }
          }
          
           if(found1 == false && this.globalSearch){
            this.tableFilters.push({
              id: "globalSearch" ,
              value: this.globalSearch.toLowerCase(),
              optional: null
            });

           }
       
      }
    
    
     this.dataSource.filter = JSON.stringify(this.tableFilters);
  
    }

   
    
 
    
    if(this.ayu){
    
      this.cols[0].filter = true;
    }
    
    
    
  
}
@HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
 
      // Check if the click was outside the element
      if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
 
         this.clickElsewhere.emit(event);
      }
  }
  
  refreshList(){
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator1;
    if(this.sorting)  
    {
      this.dataSource.sort = this.sort;
    }
     
      this.dataSource.sortingDataAccessor = (item, property) => {
          
        for(let ele=0; ele<this.cols.length; ele++) {
          if( property == this.cols[ele].field && this.cols[ele].type == "Date"){
            let newDate = new Date(item[property]);
            return newDate;
          }
          else if(property == this.cols[ele].field && this.cols[ele].type == "Number"){
            return item[property]
          }
          
          }
       
       
          return item[property].trim().toLowerCase();
        
      }
    //     for (let index = 0; index < 10; index++) {
    //     console.log(index);
      
          
    //     }
     
    //   for(let i=0;i<this.cols.length;i++){
    //     console.log(this.cols[i].field);
        
    //     if(this.cols[i].field == property && this.cols[i].type.name == 'Date'){

    //       console.log("okie");
          
    //       let newDate = new Date(item[this.cols[i].field]);
    //           return newDate;

    //     }
    //     else{
    //       console.log("lskdnd");
          
    //       return item[property];
    //     }
    //   }
    

    //  }
      this.dataSource.paginator = this.paginator1;
      this.dataSource.filterPredicate = (data, filtersJson: string) => {
      
          const matchFilter = [];
      
          
          const filters = JSON.parse(filtersJson);
    
          filters.forEach(filter => {
            if(filter.optional && filter.value!=""){
               
              const val = data[filter.id] === null ? '' : data[filter.id];
              let newDate = new Date(val);
              let startDate= new Date(filter.value);
              
             
              if(filter.optional == 'dateFrom' && newDate >= startDate){
              
                       matchFilter.push(true);
              }
              else if(filter.optional == 'dateTo' && newDate<= startDate)
              matchFilter.push(true);
              else{
                matchFilter.push(false);
              }
            }
            else{
              if(filter.id == "globalSearch"){
                
                let found: boolean = false
                for(let i=0;i<this.header.length;i++)
                {
                  
                  
                  const val1 = String(data[this.header[i]] == null ? '' : data[this.header[i]]);
                  if(val1!=null){
                    
                    if((val1.toLowerCase()).includes(filter.value)){
                      matchFilter.push(true)
                      found = true;
                      break
                    }
                  }
                }
                if(found == false){
                  matchFilter.push(false)
                }
               
              }
              else{
                let val = String(data[filter.id] === null ? '' : data[filter.id]);
            
                matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase())); 
              }
             

            }
                      
          });
          // console.log(matchFilter);
          
            return matchFilter.every(Boolean);
        };
  }
  searchField = "";
  search_bar(field){
     
    if(this.searchField==field){
      this.searchField = '';
    }
    else{
    this.searchField = field;
    setTimeout(()=>{ 
    //  this.searchElement.nativeElement.focus();
    },0);
  }
    
    if(this.tableFilters.length>0)
    {
     this.inp=this.tableFilters.filter(v=>{if(v.id==field){return v}});
     if(this.inp.length>0)
     {
       this.inp=this.inp[0].value;
     }
    }
  }
  clear_search(){
      this.searchField = "";
  }
  filterClear(){

    this.tableFilters=[];
    if(this.globalSearch){
     
      
      this.tableFilters.push({
        id: "globalSearch" ,
        value: this.globalSearch.toLowerCase(),
        optional: null
      });
    
      this.refreshList();
      this.dataSource.filter = JSON.stringify(this.tableFilters);
     
    }

    this.cols.forEach(element => {
      element.filter=false;
    });
    
    
    this.searchField = "";
    this.inp='';
    this.clearFilterFlag=false;
    if(this.header.length > 1){
      this.clearDate();
    }
    this.ayu=false;
  }
  clearDate(col?){
    
    if(col){
    col.filter=false;
    for(let i=0;i<this.tableFilters.length;i++){
      if(this.tableFilters[i].id == col.field){
        this.tableFilters[i].value = "";
      }
    }
    }
    this.dateFrom= null;
    this.dateTo=null;
    
  
    this.dataSource.filter = JSON.stringify(this.tableFilters);
  
    let flag=false;
    this.tableFilters.forEach(v=>{
      if(v.value!="" && v.id != "globalSearch"){
        flag=true;
        this.clearFilterFlag=true;
      }
    })
    if(!flag){
      this.clearFilterFlag=false;
    }
    
  }
  applyAdvanceFilter(event, col, inputDate?){
    let found = false;

    
  
      if(inputDate){
        //this.cols[7].filter=true;
        this.inputField =event;
        if(this.tableFilters.length>0){
          for(let i=0;i<this.tableFilters.length;i++){
            
            if(this.tableFilters[i].id == col.field && this.tableFilters[i].optional == inputDate)
            {
              
             this.tableFilters[i].value = this.inputField;
              found= true;
              break;
            }
  
          }
          
           if(found == false){
             
            this.tableFilters.push({
              id: col.field,
              value: this.inputField,
              optional: inputDate
            });
           }
        }
         else{
          this.tableFilters.push({
            id: col.field,
            value: this.inputField,
            optional: inputDate
          });
        }
        
        
      } 
    else{
      this.search_value = (event.target as HTMLInputElement).value;
      this.inputField = (event.target as HTMLInputElement).value;
      if(this.tableFilters.length>0){
        for(let i=0;i<this.tableFilters.length;i++)
         if(this.tableFilters[i].id == col.field)
         {
          this.tableFilters[i].value = this.inputField;
           found= true;
           break;
         }
         if(found == false){
          this.tableFilters.push({
            id: col.field,
            value: this.inputField,
            optional: null
          });
         }
      }
       else{
        this.tableFilters.push({
          id: col.field,
          value: this.inputField,
          optional: null
        });
      }
    }
  
    
  
 
   
    this.refreshList();
  
  
    this.dataSource.filter = JSON.stringify(this.tableFilters);
    console.log(this.tableFilters);
    
    this.exportArray = this.dataSource.filteredData;
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
     
    if(this.tableFilters.length>0)
    {
     let index=this.tableFilters.filter(v=>{if(v.id==col.field){return v}});
     if(index.length>0)
     {
       if(index[0].value!="")
       {
       col.filter=true;
     }
      else
      {
      col.filter=false;
      }
    }
     console.log(this.cols);
    }
    let flag=false;
    this.tableFilters.forEach(v=>{
      if(v.value!=""){
        flag=true;
        this.clearFilterFlag=true;
      }
    })
    if(!flag){
      this.clearFilterFlag=false;
    }
    }
  
  menuItem;
  ayu: boolean=false;
  rowClicked(row,menuItem){
    this.ayu = this.cols[0].filter
    this.rowClick.emit(row);
  }
  rowArchive(menuItem){
    this.archive.emit(menuItem);
  }
  rowRestore(menuItem){
    this.restore.emit(menuItem);
  }
  rowUrl(menuItem){
    this.url.emit(menuItem);
  }
  rowNotes(menuItem){
    this.notes.emit(menuItem);
  }
  rowTags(menuItem){
    this.tags.emit(menuItem);
  } 
 


}
