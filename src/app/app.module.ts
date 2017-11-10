import { Dir } from '@angular/cdk/bidi';
import { TestComponent } from './components/test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSnackBarModule,MatTooltipModule,MatDialogModule,MatSortModule,MatPaginatorModule, MatTableModule, MatAutocompleteModule, MatNativeDateModule, MatDatepickerModule, MatSlideToggleModule, MatSliderModule, MatRadioModule, MatCheckboxModule, MatSelectModule, MatSidenavModule, MatMenuModule, MatInputModule, MatExpansionModule, MatListModule, MatTabsModule, MatCardModule, MatGridListModule, MatProgressBarModule, MatProgressSpinnerModule, MatFormFieldModule, MatChipsModule, MatButtonToggleModule, MatIconModule, MatToolbarModule, MatButtonModule, MatSort } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableNoFilterComponent } from './components/table-no-filter/table-no-filter.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogChildComponent } from './components/dialog/dialog-child/dialog-child.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarChildComponent } from './components/snackbar/snackbar-child/snackbar-child.component';
import { DialogUserComponent } from './components/table-no-filter/dialog-user/dialog-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TableNoFilterComponent,
    DialogComponent,
    DialogChildComponent,
    TooltipComponent,
    SnackbarComponent,
    SnackbarChildComponent,
    DialogUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component:AppComponent},
      {path:'test', component:TestComponent},
    ]),
    FlexLayoutModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [Dir],
  bootstrap: [AppComponent],
  entryComponents: [DialogChildComponent,SnackbarChildComponent,DialogUserComponent]
})
export class AppModule { }
