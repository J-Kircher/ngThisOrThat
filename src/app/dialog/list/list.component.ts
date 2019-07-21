import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: any[];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ListComponent>,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.items = this.storageService.loadFromLocalStorage();
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

  removeCol(items: string[], item: string) {
    items.splice(items.findIndex(_ => _ === item), 1);
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
}
