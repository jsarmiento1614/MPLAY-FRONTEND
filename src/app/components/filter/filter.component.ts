import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){ 
      $('#section-filter > select > option').on('click', function() {
        $('.mp-button-reset').removeClass('d-none');
      }); 
      
      $('.button > button').on('click', function() {
        $('.mp-buttons').removeClass('selected');
        $(this).addClass('selected');
      }); 

      $(window).scroll(function(){
        if ($(this).scrollTop() > 730) $('div.mp-filter').addClass("fixed").fadeIn();
        else $('div.mp-filter').removeClass("fixed");
      });
    });
  }

}
