import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private afStorage: AngularFireStorage, public fotoService: FotoService) { }

  async ngOnInit(){
    await this.fotoService.loadFoto();
  }

  TambahFoto(){
    this.fotoService.tambahFoto();
  }
}
