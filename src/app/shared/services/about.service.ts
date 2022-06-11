import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Paragraph } from 'src/typings/paragraph';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url = "http://localhost:3000/paragraph"
  subject = new BehaviorSubject<Paragraph>({} as Paragraph)

  constructor(private http: HttpClient) { }

  read(): Observable<Paragraph>{
    return this.http.get<Paragraph>(this.url)
  }

  setParagraph(response: Paragraph){
    this.subject.next(response);
  }

  getParagraph(){
    return this.subject.asObservable();
  }


}
