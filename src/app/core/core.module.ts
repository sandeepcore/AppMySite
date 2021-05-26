import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatNativeDateModule } from "@angular/material/core";
//import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DragDropModule } from "@angular/cdk/drag-drop";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,
        MatExpansionModule,
        MatIconModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatDialogModule,
        MatNativeDateModule,
        MatMenuModule,
        MatSortModule,
        DragDropModule,
        MatToolbarModule,
        MatTooltipModule,
    
  ],
  exports: [
  ]
})
export class CoreModule { }
