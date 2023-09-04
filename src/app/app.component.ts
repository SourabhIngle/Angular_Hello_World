import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello-World-Day-1';
  imgUrl = "assets/logo-1586419574337.avif";
  url = "https://www.bridgelabz.com/";
  isMouseOver = false;
  userName: string = "";
  nameError: string="";


  ngOnInit(): void {
    this.title = "Hello Every One";
  }
  onClick(event: any) {
    console.log("Save butoon is clicked" + event)
    window.open(this.url, "_blank")
  }

onInput(event:any){
  console.log("Change Event Occured!", event.data);
  const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.userName)){
    this.nameError="";
    return;
  }
  this.nameError = "Name is Incorrect!"
}

}
