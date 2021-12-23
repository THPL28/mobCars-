import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.css']
})
export class SaibaMaisComponent implements OnInit {
  indice = 0
  cars: any[] = [

    {
      nome:         'Lancer Evolution X',
      modelo:       'Mitsubishi',
      foto:         'assets/img/lancer.jpg',
      descricao:    '2.0 turbo',
      descricao1:   ' 48 kgfm @ 3.500 rpm',
      descricao2:   '242 km/h',
      tracao:       '4WD',
      cambio:       '6 marchas',
      zeroAcem:     '6.3 s',
      peso:         '1590 kg',
      portas:       '4',
      carroceiria:  'Sedan'
    },

    {
      nome:       'Porshe',
      modelo:      '911',
      foto:       'assets/img/porshe.jpg',
      descricao:   '6 cilindros',
      descricao1:   '45,9 kgfm',
      descricao2:   ' 293 km/h ',
      tracao:       'RWD',
      cambio:       '8 marchas',
      zeroAcem:     '4.2 s',
      peso:         '1515 kg',
      portas:       '2',
      carroceiria:  'Cupê'
    },

    {
      nome:       'Lamborghini',
      modelo:      'Aventador',
      foto:       'assets/img/lam.jpg',
      descricao:   'V10',
      descricao1:   '57,6 mkgf',
      descricao2:   ' 310 km/h ',
      tracao:       '4WD',
      cambio:       '7 marchas',
      zeroAcem:     '2.8 s',
      peso:         '1525 kg',
      portas:       '2',
      carroceiria:  'Cupê'
    },

    {
      nome:       'Camaro',
      modelo:      'Chevrolet Camaro',
      foto:       'assets/img/camaro.jpg',
      descricao:   'V8',
      descricao1:   '56,7 kgfm ',
      descricao2:   ' 250 km/h ',
      tracao:       'RWD',
      cambio:       '10 marchas',
      zeroAcem:     '4.2 s',
      peso:         '1709 kg',
      portas:       '2',
      carroceiria:  'Cupê'
    },

    {
      nome:       'Maclaren',
      modelo:      'Maclaren Senna',
      foto:       'assets/img/mclarensenna.jpg',
      descricao:   'V8 4.0 biturbo',
      descricao1:   '590 lb - ft ',
      descricao2:   ' 335 km/h ',
      tracao:       'RWD',
      cambio:       '7 marchas',
      zeroAcem:     '2.8 s',
      peso:         '1309 kg',
      portas:       '2',
      carroceria:   'Supercar'
    },

    {
      nome:       'Bugatti',
      modelo:      ' Chiron ',
      foto:       'assets/img/bchiron.jpg',
      descricao:   '8.0 W16',
      descricao1:   '20,10 kg/kgfm',
      descricao2:   ' 474 km/h 295 mph',
      tracao:       '4WD',
      cambio:       '7 marchas',
      zeroAcem:     '2.5 s',
      peso:         '1995 kg',
      portas:       '2',
      carroceiria:  'Cupê'
    },

  ];


  constructor(
    private endereco: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indice = this.endereco.snapshot.params['indice']
  }
}
