import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{

  quantidade:number = 0

  constructor() { }
  
  adicionar() {
    this.quantidade += 1
  }
  
  decrementar() {
    this.quantidade -= 1
  }
  
  /* quando o primiero conteudo é iniciado */
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  /* depois da inicializacao da view */
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  /* apos alguma alteracao, verifica o conteudo */
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  /* apos alguma alteracao, verifica a view */
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnInit(): void {
    console.log("OnInit")
  }
  
  ngOnDestroy(): void {
    console.log("GoodBye My friend!");
  }
}

