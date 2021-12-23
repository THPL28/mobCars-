import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: any[] = [
    { // índice 0
      indice:     0,
      logo:       'assets/img/logo_mit.png',
      nome:       'Lancer Evolution X',
      modelo:      'Mitsubishi',
      preco:      'R$ 110.000',
      foto:       'assets/img/lancer.jpg',
      descricao:  'O Lancer Evolution é alimentado com um motor 2.0 turbo de 37,7 kgfm de torque aliado a uma transmissão de dupla embreagem de seis marchas. A tração é integral e permite que o motorista escolha entre três modos diferentes, que facilitam a rodagem no asfalto, pisos de baixa aderência e piso escorregadio.'
    },
    { // índice 1
      indice:     1,
      logo:       'assets/img/logo_porshe.jpg',
      nome:       'Porshe',
      modelo:      '911',
      preco:      'R$ 109.000',
      foto:       'assets/img/porshe.jpg',
      descricao:  'Com o novo motor a potência ficava em 200 cavalos e fazia com que o Porsche 911 alcançasse 100 km/h em menos de 6 segundos. As versões 911 Turbo e 911 Carrera Turbo produzidas entre 1975 e 1977 vinham com um motor ainda mais potente que as versões mais “mansas” do Porsche 911 tradicional.',
    },
    { // índice 2
      indice:     2,
      logo:       'assets/img/logo_lam.jpg',
      nome:       'Lamborghini',
      modelo:      'Aventador',
      preco:      'R$ 3.200.000',
      foto:       'assets/img/lam.jpg',
      descricao:  'Motor 12 cilindros em V de 6,5 litros e 700 cv de potência. Aceleração de zero a 100 km/h em 2,9 segundos e velocidade máxima de incríveis 350 km/h. “O Aventador é um potente supercarrro, mas pode ser usado como um dócil automóvel urbano'
    },
    { // índice 2
      indice:     3,
      logo:       'assets/img/chevrolet.png',
      nome:       'Camaro',
      modelo:      'Chevrolet Camaro',
      preco:      'R$ 184.900',
      foto:       'assets/img/camaro.jpg',
      descricao:  'O Camaro é um coupé esportivo de porte médio da Chevrolet. Produzido desde 1966, trata-se de muscle car que seria a resposta da General Motors ao Ford Mustang, de 1964. Sua produção foi interrompida em 2002, mas a General Motors retomou a produção de uma nova versão em 2009.'
    },
    { // índice 2
      indice:     4,
      logo:       'assets/img/mclogo.png',
      nome:       'Maclaren ',
      modelo:      'Maclaren Senna',
      preco:      'R$ 6.816.116',
      foto:       'assets/img/mclarensenna.jpg',
      descricao:  'O McLaren Senna, possui o motor V8 turbo de 4 litros, sua potência é de 800 cv, onde o torque ultrapassa os 80 mkgf e o propulsor é central traseiro. Sua tração é traseira e assim gera até 800 kg de downforce. Para atingir esse número, o carro traz diversos apêndices aerodinâmicos, como a asa e o aerofólio móveis.'
    },
    { // índice 2
      indice:     5,
      logo:       'assets/img/blogo.jpg',
      nome:       'Bugatti',
      modelo:      ' Chiron ',
      preco:      'R$ 6.816.116',
      foto:       'assets/img/bchiron.jpg',
      descricao:  'O McLaren Senna, possui o motor V8 turbo de 4 litros, sua potência é de 800 cv, onde o torque ultrapassa os 80 mkgf e o propulsor é central traseiro. Sua tração é traseira e assim gera até 800 kg de downforce. Para atingir esse número, o carro traz diversos apêndices aerodinâmicos, como a asa e o aerofólio móveis.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
