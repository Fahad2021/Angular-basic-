import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})
export class EInfoComponent implements OnInit {
  infoReceive1:string[]=[];
  infoReceive2:string[]=[];
  infoReceive3:string[]=[];

  getInfoFormService1(){
    this.infoReceive1=this.dservice.getInfo1()
  }
  getInfoFormService2(){
    this.infoReceive2=this.dservice.getInfo2()
  }
  getInfoFormService3(){
    this.infoReceive3=this.dservice.getInfo3()
  }

  constructor(private dservice:DataService) { }

  ngOnInit(): void {
  }
updateInfo(frm:any){
  this.dservice.addInfo(frm.value.location)
}
}
