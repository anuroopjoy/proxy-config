import { Component, OnInit } from '@angular/core';
import { ServerApiService } from './server-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sample-proxy-config';

  constructor(private apiService: ServerApiService) {}
  async ngOnInit() {
    const users = await this.apiService.getUsers();
    console.log(users);
  }
}
