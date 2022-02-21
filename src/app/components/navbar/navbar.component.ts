import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen:boolean = false

  @ViewChild('navbar', {static: false}) firstChild!: ElementRef;
  @ViewChild('mobileMenuIcon', {static: false}) mobileMenuIcon!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }){
  if(event.target.innerWidth >= 768){
    this.firstChild.nativeElement.classList.remove('bg-white', 'mt-4')
  }else{
    this.firstChild.nativeElement.classList.add('bg-white', 'mt-4')
  }
  }







  constructor() { }



  ngOnInit(): void {
    if(!this.isOpen){
      this.mobileMenuIcon.nativeElement.src='../../../assets/images/icon-close-menu.svg'
      this.mobileMenuIcon.nativeElement.ariaExpanded = this.isOpen
    }else{


  }

  }
}
