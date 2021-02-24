import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

interface Bubble {
  text: string;
  left: boolean;
  down: boolean;
  x: number;
  y: number;
  isChild: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('opacityAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(`300ms ease`),
        style({ opacity: 1 }),
      ]),
      transition('* => void', [
        animate(`300ms ease`),
        style({ opacity: 0 }),
      ]),
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    if (localStorage.getItem('firstOpen') === 'false')
      this.firstOpen = false;
    else 
      this.firstOpen = true;
  }

  selectedBubble: number | null = null;
  firstOpen: boolean;

  bubbles: Bubble[] = [
    { x: 154, y: 290, text: 'Barátságos a hangulat, amiben megkapja a gyerek a spirituális irányt is.', left: false, down: false, isChild: false },
    { x: 920, y: 590, text: 'Mi ugyan nem járunk templomba, de azt gondolom, a Biblia ismerete az általános tájékozottság része. Szeretnénk, ha gyermekünk is megismerkedne a kereszténységgel', left: false, down: false, isChild: false },
    { x: 670, y: 745, text: 'Különösen értékeljük, hogy személyes hangvétellel, személyre szabva tanítják a tárgyat.', left: false, down: false, isChild: false },
    { x: 732, y: 502, text: 'Sok órán kívüli tanulási, épülési lehetőséget biztosítanak a gyerekeknek, és a családoknak is. Ilyen volt adventkor a napi üzenetek, játékok küldése, a hittan versenyek és más programok.', left: false, down: false, isChild: false },
    { x: 184, y: 426, text: 'Kisfiamnak tanulási nehézségei vannak, hittanból mégis dicsérettel zárta a félévet. A hittantanár ugyanis minden kisdiákhoz megtalálja az utat.', left: true, down: false, isChild: false },
    { x: 330, y: 330, text: 'Biztos vagyok benne, hogy a hittanon átadott értékek meghatározó irányvonalai lesznek a gyermek életének. Második gyermekünk szeptemberben kezdi az iskolát, nem kérdés, hogy evangélikus hittanra  megy.', left: true, down: false, isChild: false },
    { x: 854, y: 656, text: 'Szeretnénk, hogy a gyerekek hite megerősödjék.', left: true, down: true, isChild: false },
    { x: 1090, y: 471, text: 'A szeretettel teli és bensőséges kapcsolat sokat jelent a gyerekeknek és nekünk is.', left: true, down: false, isChild: false },
    { x: 400, y: 815, text: 'A gyerekek játékos formában tanulják a bibliai történeteket. Fontos, hogy nem érzik magukat soha nyomás alatt. Mi nem bántuk meg, hogy az evangélikus hittant választottuk.', left: true, down: false, isChild: false },
    { x: 534, y: 454, text: 'Evangélikus - szép ez a szó, az evangéliumból származik, ami örömhírt jelent.', left: true, down: false, isChild: true },

    { x: 284, y: 456, text: 'A hittanóra a világon a legjobb. Mindig nagyon várom!', left: true, down: false, isChild: true },
    { x: 202, y: 565, text: 'A hittantanár meghallgat minket, elmondhatjuk hogy mi történt velünk, jó és rossz, és nem röhögnek ki.', left: true, down: false, isChild: true },
    { x: 855, y: 392, text: 'Nagyon szeretem a kézműveskedést, a kreatív feladatokat, és a könyvben a keresős játékokat, rejtvényeket.', left: false, down: false, isChild: true },
    { x: 733, y: 607, text: 'Szépek a történetek. Istenről meg Jézusról tanulunk.', left: true, down: false, isChild: true },
    { x: 254, y: 860, text: 'Jó, hogy kevesen vagyunk, így több odafigyelés jut mindenkinek. Nyugalom van az órákon.', left: false, down: false, isChild: true },
    { x: 387, y: 680, text: 'Nincs sok szabály. Hittanórán nem kell izgulni.', left: false, down: false, isChild: true },
    { x: 680, y: 390, text: 'Jó a közösség. Sokat beszélgetünk.', left: true, down: false, isChild: true },
    { x: 403, y: 507, text: 'Értelmes a téma, lehet énekelni, néha még gitározni is. Volt, amikor hittanórán egy idős bácsinak segítettünk.', left: false, down: false, isChild: true }
  ];

  onBackgroundClick() {
    this.selectedBubble = null;
  }

  onBubbleClick(index: number, event) {
    this.selectedBubble = index;
    this.firstOpen = false;
    localStorage.setItem("firstOpen", 'false');
    event.stopPropagation();
  }
}
