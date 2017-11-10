import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table-no-filter',
  templateUrl: './table-no-filter.component.html',
  styleUrls: ['./table-no-filter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableNoFilterComponent implements OnInit {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MatSort) sort: MatSort;


  constructor( 
    private fb:FormBuilder,
    public dialog: MatDialog) { }
  form:FormGroup;
  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
    this.form=this.fb.group({
      id: ['',Validators.required],
      name:['',Validators.required]
    })
  }

  createUser(form){
    this.exampleDatabase.addUser(form.value);
  }

  
  getDataEachRow(row){
    console.log(row);
    let dialogRef = this.dialog.open(DialogUserComponent, {
      width: '300px',
      // position:{top:'25px',left:'25px'},
      data: { row }
    });
    dialogRef.backdropClick().subscribe(result=>{
      console.log('backdrop Click');
    })

  }
}

const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for(let i=0;i<10;i++){ this.addDataTestUser()} 

   
  }

  /** Adds a new user to the database. */
  // addUser() {
  //   const copiedData = this.data.slice();
  //   copiedData.push(this.createNewUser());
  //   this.dataChange.next(copiedData);
  // }
  addDataTestUser(){
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }
  addUser(user) {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUserWithForm(user));
    this.dataChange.next(copiedData);
  }

  private createNewUserWithForm(user){
    return {
      id: user.id,
      name: user.name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }


  /** Builds and returns a new User. */
  private createNewUser() {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }
}




export class ExampleDataSource extends DataSource<any> {



  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase,
    private _paginator: MatPaginator,
    private _sort:MatSort
  ) {super();}

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
      this._filterChange,
      this._sort.sortChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      
      // console.log(this._exampleDatabase.data.slice());
      let datafilter= this._exampleDatabase.data.slice().filter((item:UserData)=>{
        let searchStr = (item.name + item.color).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;

      });


      // const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      
      let datapaginate=datafilter.splice(startIndex, this._paginator.pageSize);

      // console.log(datapaginate);
      return this.getSortedData(datapaginate);
      
    });
  }
  getSortedData(data): UserData[] {
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
        case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }


  disconnect() { }
}
