import { Component, OnInit } from '@angular/core';
// Services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  profile: any

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.profile.subscribe(profile => (this.profile = profile));
  }

}
