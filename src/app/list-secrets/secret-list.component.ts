import {Component, OnInit} from '@angular/core';
import {Secret} from '../model/secret';
import {SecretService} from '../secret.service';

@Component({
  selector: 'app-secret-list',
  templateUrl: './secret-list.component.html',
  styleUrls: ['./secret-list.component.css']
})
export class SecretListComponent implements OnInit {
  secrets: Secret[] = [];


  constructor(private secretService: SecretService) {
  }

  ngOnInit(): void {
    this.secretService.findAll().subscribe(
      result => this.secrets = result
    );
  }

}
