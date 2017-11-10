import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {FormBuilder, FormGroup ,FormControl , Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
const COMMA = 188;
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {MatSort} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  visible:boolean=true;
  separatorKeysCodes = [ENTER, COMMA];
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  mode:string='determinate';
  color = 'primary';
  modeBar = 'determinate';
  value = 50;
  bufferValue=20;
  startAt:Date; 
  // minDate=new Date(2017,11,1);
  // maxDate=new Date(2017,11,30);
  myFilter = (d: Date): boolean => {
    const day=d.getDay();
    let choosedDate=[(new Date(2017,10,2)).getTime(),(new Date(2017,10, 23)).getTime()];
    return !choosedDate.includes(d.getTime());
  }
  DatePickerChange(picker){
    console.log(picker._selected);
  }
  myControl: FormControl = new FormControl();
  
  autocompleteValues = [
    'One',
    'Two',
    'Three'
  ];
  filteredOptions: Observable<string[]>;
  ngOnInit(){
    this.filteredOptions=this.myControl.valueChanges
    .startWith(null)
    .map(val=>val? this.filter(val): this.autocompleteValues.slice());
  }



  filter(val: string): string[] {
    return this.autocompleteValues.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


  fruits=[
    {name:'Lemon'},
    {name:'Banana'},
    {name:'Apple'},
  ]
  options: FormGroup;
  states=[
    {name:'HCM', code: '1241512'},
    {name:'HaNoi', code: '124141'},
    {name:'Cao Bang', code: '21412'},
  ]
    
  addOrRemove(value){
    this.value+=value;
  }
  startStopProgress(){
    this.mode=(this.mode=='determinate')?'indeterminate':'determinate';
  }
  startStopProgressBar(){
    this.modeBar=(this.modeBar=='determinate')?'indeterminate':'determinate';
  }


  @ViewChild(MatSort) sort: MatSort;



  email=new FormControl('', [Validators.required, Validators.email]);
  addForm:FormGroup;
  // SVG register
  constructor(fb:FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.options = fb.group({
      hideRequired: false,
      floatPlaceholder: 'auto',
    });

    this.addForm=fb.group({
      position:['',Validators.required],
      name:['',Validators.required],
      weight:['',Validators.required],
      symbol:['',Validators.required]
    })

    

    iconRegistry.addSvgIcon('camera',sanitizer.bypassSecurityTrustResourceUrl('assets/images/camera.svg'));
    iconRegistry.addSvgIcon('play',sanitizer.bypassSecurityTrustResourceUrl('assets/images/play.svg'));
    iconRegistry.addSvgIcon('linamosa',sanitizer.bypassSecurityTrustResourceUrl('assets/images/monalisa.svg'));
  }


  onSubmit(form){
    console.log();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getValueRadio(group){
    console.log(group.value)
  }
  getValueSelect(select){
    console.log(select.value);
  }
  getSlideToggleValue(slideToggle){
    console.log(slideToggle.checked);
  }
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
    
  valueCall(group){
    console.log(group.value);
  }
  buttonToggle(){
    console.log("work");
  }
  toggleVisible(){
    this.visible=(this.visible)?false:true;
  }
  displayMessage(msg){
    console.log(msg);
  }


  //list selectedChange
  selectedChange(){
    console.log("ok");
  }
}


