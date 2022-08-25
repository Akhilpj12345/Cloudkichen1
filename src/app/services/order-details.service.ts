import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }



  //foodDetails

  foodDetails =[
    {
      id:1,
      foodName:"oreo cheesecake ice cream",
      foodDetails:"oreo ice cream",
      foodPrice:109,
      foodImg:"https://i.postimg.cc/xjJstHfH/oreo.jpg"

    },
    {
      id:2,
      foodName:"sandwitch",
      foodDetails:" cheese sandwitch",
      foodPrice:150,
      foodImg:"https://i.postimg.cc/Hnp9YDCq/Cheese-Sandwich.webp"

    },
    {
      id:3,
      foodName:"falooda",
      foodDetails:"mixed falooda",
      foodPrice:200,
      foodImg:"https://i.postimg.cc/HL9tfsqw/falooda-12.jpg"

    },
    {
      id:4,
      foodName:"fresh juice",
      foodDetails:"fresh fruits",
      foodPrice:300,
      foodImg:"https://i.postimg.cc/zD7f2Lxz/juice.webp"

    },
    {
      id:5,
      foodName:"cream",
      foodDetails:"cream cake", 
      foodPrice:600,
      foodImg:"https://i.postimg.cc/7hK0qKDX/newcake.webp"

    },
  ]
}
