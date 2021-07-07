import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../model/ProductModel';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() isShow:boolean=false;
  @Input() product:ProductModel=new ProductModel();
  text:string='Create';
  id:string="";
  colorAttributes:string[]=[
    "black/233,333,333",
    "red/233,444,333",
    "brown/233,333,444"
];
sizeAttributes:string[]=[
    "XL",
    "S",
    "M",
    "XXL"
]
  constructor(private productService:ProductService) {
   }

  ngOnInit() {
    if(this.product!=null && this.product._id){
      this.text='Edit';
    }
  }

}
