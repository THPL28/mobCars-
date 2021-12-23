import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  indice = 0
  cars: any[] = [

    {
      nome:       'Lancer Evolution X',
      modelo:      'Mitsubishi',
      foto:       'assets/img/lancer.jpg',
      descricao:   '2.0 turbo',
      descricao1:   ' 48 kgfm @ 3.500 rpm',
      descricao2:   '242 km/h',

    },

    {
      nome:       'Porshe',
      modelo:      '911',
      foto:       'assets/img/porshe.jpg',
      descricao:   '6 cilindros',
      descricao1:   '45,9 kgfm',
      descricao2:   ' 293 km/h ',
    },

    {
      nome:       'Lamborghini',
      modelo:      'Aventador',
      foto:       'assets/img/lam.jpg',
      descricao:   'V10',
      descricao1:   '57,6 mkgf',
      descricao2:   ' 310 km/h ',
    },

    {
      nome:       'Camaro',
      modelo:      'Chevrolet Camaro',
      foto:       'assets/img/camaro.jpg',
      descricao:   'V8',
      descricao1:   '56,7 kgfm ',
      descricao2:   ' 250 km/h ',
    },

    {
      nome:       'Maclaren',
      modelo:      'Maclaren Senna',
      foto:       'assets/img/mclarensenna.jpg',
      descricao:   'V8 4.0 biturbo',
      descricao1:   '590 lb - ft ',
      descricao2:   ' 335 km/h ',
    },

    {
      nome:       'Bugatti',
      modelo:      ' Chiron ',
      foto:       'assets/img/bchiron.jpg',
      descricao:   '8.0 W16',
      descricao1:   '20,10 kg/kgfm',
      descricao2:   ' 474 km/h 295 mph',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
