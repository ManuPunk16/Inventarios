import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ActiveService } from 'src/app/services/actives.service';
import { Active } from 'src/app/models/actives';

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.css'],
  providers: [ActiveService]
})
export class ActivesComponent implements OnInit {

  public actives: Active[] = [];
  displayedColumns: string[] = ['id_bien', 'no_serie', 'descripcion', 'resguardante', 'marca'];
  dataSource = new MatTableDataSource<Active>;

  constructor(
    private _activeService: ActiveService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.getActives();
  }

  // Asignacion del servicio a la vista de mat-table desde mongo nojde.js
  public async getActives(): Promise<void>{
    this._activeService.getActives().subscribe(result => {
      this.actives = result.actives;
      this.dataSource = new MatTableDataSource(this.actives);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.actives);
    });
  }

  // public async _getActives(): Promise<void> {
  //   try {
  //     const res = await this._activeService.getActives().toPromise();
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
