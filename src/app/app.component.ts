import { Component } from '@angular/core';
/*3rd step*/
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  trollForm: FormGroup;
  post: any;
  rant: string = '';
  troll: string = '';

  /* pass a  */
  constructor(private formBuilder: FormBuilder) {
    this.trollForm = formBuilder.group({
      /*define each form element*/
      troll: [null, Validators.required],
      rant: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200)
        ])
      ]
    });
  }

  createRant(post) {
    console.log('troll: ' + post.troll);
    console.log('rant:' + post.rant);
    this.troll = post.troll;
    this.rant = post.rant;
  }
}
