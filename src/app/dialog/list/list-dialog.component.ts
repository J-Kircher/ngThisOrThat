import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from '../../service/storage.service';
import { DetailsDialogComponent } from '@app/dialog/details/details-dialog.component';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.scss']
})
export class ListDialogComponent implements OnInit {

  items: any[];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ListDialogComponent>,
    private dialog: MatDialog,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    if (this.data.list === 'albums') {
      this.items = this.storageService.loadAlbumsFromLocalStorage();
    }
    if (this.data.list === 'artists') {
      this.items = this.storageService.loadArtistsFromLocalStorage();
    }
    this.items.forEach(item => {
      item.pct = this.getPct(item);
      item.diff = item.wins - item.losses;
    });
    this.dataSource = new MatTableDataSource(JSON.parse(JSON.stringify(this.items)));
    this.dataSource.sort = this.sort;

    this.displayedColumns = Object.keys(this.items[0]);
    // this.displayedColumns.forEach(key => {
    //   console.log('key: \'' + key + '\', value: \'' + this.items[0][key] + '\'');
    // });

    // Remove image, wins, losses
    this.removeCol(this.displayedColumns, 'image');
    this.removeCol(this.displayedColumns, 'wins');
    this.removeCol(this.displayedColumns, 'losses');
  }

  // customTrackBy = (i, field) => `${i}${field.image}`;
  customTrackBy = (i, field) => `${i}${field}`;

  isNumeric(colName: any) {
    return !isNaN(this.items[0][colName]);
  }

  getCellHeader(colName: string) {
    return colName.replace(/^\w/, c => c.toLocaleUpperCase());
  }

  // getCellValue = (item: any[], colName: string): string | number => {
  //   return item[colName];
  // }

  removeCol(items: string[], item: string) {
    items.splice(items.findIndex(_ => _ === item), 1);
  }

  get totalEntryCount(): number {
    return !this.dataSource ? 0 : this.dataSource.data.length;
  }

  get entryCount(): number {
    return this.dataSource.filteredData.length;
  }

  applyFilter = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  dismiss() {
    this.dialogRef.close(false);
  }

  getPct(item: any) {
    const wins = item.wins || 0;
    const losses = item.losses || 0;
    if ((wins + losses) === 0) {
      return 0;
    } else {
      return ((wins / (wins + losses)) * 100).toFixed(1);
    }
  }

  showDetails(item: any) {
    const dialogName = this.data.list.replace(/^\w/, c => c.toLocaleUpperCase()).slice(0, -1) + ' Details';
    this.dialog.open(DetailsDialogComponent, {
      data: { title: dialogName, item: item, type: this.data.list },
      panelClass: 'details-container',
      minWidth: '500px'
    });
  }
}
