import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  logoPath: string = "../../assets/LOGO GOBIERNO DE CAMPECHE_ESCUDO_HORIZONTAL_BLANCO.png";

  constructor() { }

  ngOnInit(): void {
  }

}
