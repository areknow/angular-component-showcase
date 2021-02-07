import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [CommonModule, MatTableModule],
})
export class TableModule {}
