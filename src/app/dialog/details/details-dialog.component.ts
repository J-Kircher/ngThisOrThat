import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {

  columns: string[];
  dataItem: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DetailsDialogComponent>,
  ) { }

  ngOnInit() {
    this.dataItem = JSON.parse(JSON.stringify(this.data.item));

    this.columns = Object.keys(this.dataItem);

    // Remove image from column list
    const idx = this.columns.findIndex(_ => _ === 'image');
    this.columns.splice(idx, 1);

    if (!this.dataItem.pct) {
      const pct = this.getPct(this.dataItem);
      this.columns.push('pct');
      this.dataItem.pct = pct;
    }

    if (!this.dataItem.diff) {
      const diff = this.dataItem.wins - this.dataItem.losses;
      this.columns.push('diff');
      this.dataItem.diff = diff;
    }
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

  getColumn(colName: string) {
    return colName.replace(/^\w/, c => c.toLocaleUpperCase());
  }

  dismiss() {
    this.dialogRef.close(false);
  }
}
