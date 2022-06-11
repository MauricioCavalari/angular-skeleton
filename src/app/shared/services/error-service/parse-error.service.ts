import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ParseErrorService {
  constructor(private route: Router) {}

  parse(error: any) {
    const httpCode = error.hasOwnProperty("status")
      ? error.status
      : error.httpCode;
    console.log(httpCode);
    switch (httpCode) {
      case 406:
        this.route.navigate([
          `erro/saldo_insuficiente`,
        ]);
        break;

      case 408:
        this.route.navigate([
          `erro/chave_incorreta`,
        ]);
        break;

      case 0:
        this.route.navigate([
          `erro/falha_conexao`,
        ]);
        break;

      default:
        this.route.navigate([
          `erro/algo_errado`,
        ]);
        break;
    }
  }
}
