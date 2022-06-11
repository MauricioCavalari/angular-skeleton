import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AboutService } from 'src/app/shared/services/about.service';
import { Paragraph } from 'src/typings/paragraph';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  paragrafo: Paragraph = {}

  constructor(
    private aboutService: AboutService,
    private router: Router
    ) { }

  /*ngOnInit(): void {
    this.aboutService.read().subscribe(paragrafo => {
      this.paragrafo = paragrafo
    },(error) => {
      console.log(error)
    })
  }*/

  ngOnInit(): void {
    this.aboutService.read().subscribe({
      next: (paragrafo) => {
        this.paragrafo = paragrafo
      },
      error: (error) => {
        this.router.navigate(['/error'])
      }
    })
  }

  goToHome(){
    this.aboutService.setParagraph(this.paragrafo)
    this.router.navigate(['/home'])
  }

}
