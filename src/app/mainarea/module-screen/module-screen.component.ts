import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-screen',
  templateUrl: './module-screen.component.html',
  styleUrls: ['./module-screen.component.scss']
})
export class ModuleScreenComponent implements OnInit {
  allFlag: boolean = true;
  // addFlag: boolean = false;
  defFlag: boolean = false;
  layoutFlag: boolean = false;
  abtFlag: boolean = false;
  cntFlag: boolean;
  constructor() { }

  ngOnInit() {
  }
  remvLayout(){
this.layoutFlag=false;
this.abtFlag=false;
this.cntFlag=false;
  }
  changeLayout(arg: any) {
    this.layoutFlag = true;
    if(arg == 'about'){
      this.abtFlag=true;
      this.cntFlag=false;
    }
    else if(arg == 'cnt'){
      this.abtFlag=false;
      this.cntFlag=true;
    }
  }
  filterSelect(arg: any) {

    if (arg == 'all') {
      this.allFlag = true;
      // this.addFlag = false;
      this.defFlag = false;

    }
    else if (arg = 'def') {

      this.defFlag = true;

      this.allFlag = false;
      // this.addFlag = false;
    }
    // else if (arg = 'add') {
    //   this.allFlag = false;
    //   this.addFlag = true;
    //   this.defFlag = false;
    // }

  }

}
