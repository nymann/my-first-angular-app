import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  add_server_disabled: Boolean = true;
  server_name: string = '';
  server_status: string = 'No server was created';
  ngOnInit(): void {
    setTimeout(() => {
      this.add_server_disabled = false;
    }, 2000);
  }

  public create_server() {
    this.server_status = 'Server was created';
  }

  public on_update_server_name(event: any) {
    this.server_name = (<HTMLInputElement>event.target).value;
  }
}
