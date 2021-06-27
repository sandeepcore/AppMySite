import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppModel } from '../../Model/AppModel';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.scss']
})
export class AddAppComponent implements OnInit {

  appData:AppModel=new AppModel();
  @Output() emitClose:EventEmitter<boolean>=new EventEmitter();
  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  closeApp(){
    this.emitClose.emit(true);
  }

  addApp(){
    this.appService.addApp(this.appData).subscribe(v=>{
      this.emitClose.emit(true);
    })
  }
}
