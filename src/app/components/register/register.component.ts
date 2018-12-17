import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/model/user';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //Declaracion de varaibles.
  user: Array<User>; 
  newUser: User;
  createMode : boolean;
  SelectedUser: User;

  constructor(private userService:UserService) { 
    this.userService = userService;
    this.createMode = false;
  }
  ngOnInit() {
    // Instrucciones JQuery
    $(document).ready(function () {
      $('div > input.mp-bg-input').on('focus', function() {
          $('.mp-bg-input').removeClass('active');
          $(this).addClass('active');
      }); 
      $(window).scroll(function(){
        if ($(this).scrollTop() > 130) $('div.mp-bg-dark').addClass("hide").fadeOut("slow");
        else $('div.mp-bg-dark').removeClass("hide").fadeIn("slow");
      });
    });
  }

  onCreateUser() : void{
    this.newUser = new User; 
    this.userService.addUser(this.newUser)
    .subscribe((data:User)=>{
        this.user.push(data);
      }, error => console.log("error "+ error)
      
    ); 
   
  }

  onSelect(user:User):void{
    this.SelectedUser = user;
  }

}
