import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "TypiCode";

  texto2;

  cargar(v: string) {
    let url = "https://jsonplaceholder.typicode.com/posts/" + v;
    fetch(url)
      .then(val => {
        return val.json();
      })
      .then(val => {
        this.texto2 = val;
      });
  }

  cargarU(v: string) {
    let url = "https://jsonplaceholder.typicode.com/users/" + v;
    fetch(url)
      .then(val => {
        return val.json();
      })
      .then(val => {
        this.texto2 = val;
      });
  }
}
