import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('div > input.mp-bg-input').on('focus', function() {
          $('.mp-bg-input').removeClass('active');
          $(this).addClass('active');
      }); 
});

  }

}