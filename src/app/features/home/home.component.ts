import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutService } from 'src/app/shared/services/about.service';
import { DrawerService } from 'src/app/shared/services/drawer.service';
import { Paragraph } from 'src/typings/paragraph';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  check1: boolean | undefined
  check2: boolean | undefined

  private subscription = new Subscription()
  paragrafo: Paragraph = {} as Paragraph

  constructor(
    private drawerService: DrawerService,
    private aboutService: AboutService) {
    let sub = this.aboutService.getParagraph().subscribe(
      (response) => {
      this.paragrafo = response
    })
    this.subscription.add(sub)
  }

  ngOnInit(): void {
  }

  openModal(){
    this.drawerService.toggle()
  }

  closeModal(){
    this.drawerService.toggle()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
