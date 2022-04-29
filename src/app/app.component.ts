import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'htmlIdAttribute';

  public dataWithId = [
    {
      name: 'First Attribute',
      id: 'FirstId'
    },
    {
      name: 'Second Attribute',
      id: 'SecondId'
    },
    {
      name: 'Third Attribute',
      id: 'ThirdId'
    },
  ];

  public getNewId(data: any) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return `${data.name} ${data.id} ${randomNumber}`;
  }
}
