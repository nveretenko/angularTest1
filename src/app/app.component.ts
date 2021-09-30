import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetValueApiService } from './get-value-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list: Array<any> = [];
  form: FormGroup
  item: string;

  constructor(private getValueApiService: GetValueApiService) { }

  addValueApi() {
    this.getValueApiService.getValueApi()
      .subscribe(response => {
        this.item = JSON.stringify(response);
        this.list.push(this.item);
      });
      
  }

  onClick() {
    const item = Math.random().toString(36).substr(2, 5);
    this.list.push(item)
  }

  ngOnInit() {
    this.form = new FormGroup({
      'inputValue': new FormControl()
    })
  }

  submit() {
    const item = { ...this.form.value }
    this.list.push(item.inputValue)
    this.form.reset()
  }

}
