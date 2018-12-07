import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){ 
      $('#sidebar-btn').on('click', function() {
        $('#sidebar').toggleClass('visible');
        $('.mp-main').toggleClass('visible');
      });

  });
  }

}
