import {Component,ElementRef,OnInit,ViewChild} from '@angular/core'
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import { TextField } from "ui/text-field";
import * as SocialShare from "nativescript-social-share"

@Component({
  selector:'list',
  templateUrl:'pages/list/list.html',
  styleUrls:['pages/list/list-common.css','pages/list/list.css'],
  providers:[GroceryListService]
})

export class ListComponent implements OnInit{
  groceryList:Array<Grocery>;
  grocery:string='';
  isLoading:boolean=false;
  listLoaded:boolean=false;
  @ViewChild('groceryTextField') groceryTextField:ElementRef;
  constructor(private groceryListService:GroceryListService){}
  ngOnInit(){
    this.isLoading=true;
    this.groceryListService.load()
      .subscribe(
        (list)=>{
          this.groceryList=list ;
          this.isLoading=false;
          this.listLoaded=true;
        },
        ()=>alert('fetch groceryList error')
      )
  }
  add(){
    if(this.grocery.trim()===''){
      alert('Enter a grocery item');
      return;
    }

    let textField=<TextField>this.groceryTextField.nativeElement;

    textField.dismissSoftInput();

    this.groceryListService.add(this.grocery)
    .toPromise()
    .then(resp=>{
      this.groceryList.push(resp);
      this.grocery='';
    })
    .catch(()=>{
      alert({
        message:'An error occurred while adding an item to your list.',
        okButtonText:'OK'
      });
      this.grocery='';
    });
  }
}