import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/produit';
import { ProduitService } from 'src/app/service/produit.service';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  title='projet NoSQL'


 

 // produit =new Array<Products>;
  produit!: Products[];


  constructor(private produitService: ProduitService) { }

    ngOnInit(): void {
      this.produitService.getAllProducts().subscribe((result): void => {
        console.log(result)
        this.produit=result;
      },error =>{
        console.log(error);
        this.title=error
      })
      
   
    }

   
}
