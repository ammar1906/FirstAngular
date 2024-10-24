import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf , NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';

  books : Array<any> = [ 
    {id: 1 , bookname:'example to remove '},
  

  ]
   booktoadd : string ='';



    addbook(newest:any){
      console.log(newest.value)
      this.books.push({id: this.books.length + 1, bookname : newest.value})

    }
    removebook(book:any){

      let index = this.books.indexOf(book)
      this.books.splice(index, 1 )
      
    }

    updatebook(book:any){
       let newval = prompt('add new ')
       let index = this.books.indexOf(book)
       this.books[index] = {id:index+1 , bookname : newval}

    }



}