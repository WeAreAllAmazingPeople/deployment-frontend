import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SecretService} from '../secret.service';
import {CreateSecret} from '../model/create-secret';

@Component({
  selector: 'app-add-secret',
  templateUrl: './add-secret.component.html',
  styleUrls: ['./add-secret.component.css']
})
export class AddSecretComponent {

  secret: CreateSecret;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private secretService: SecretService) {
    this.secret = {secret: ''};
  }

  onSubmit(): void {
    this.secretService.save(this.secret).subscribe(
      result => this.gotoSecretList()
    );
  }

  gotoSecretList(): void {
    this.router.navigate(['/secrets']);
  }
}
