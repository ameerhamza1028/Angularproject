import { Component, Input, HostListener } from '@angular/core';
import { ɵangular_packages_core_testing_testing_a } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp786';
  btnclick(){
    alert("Please Subcribe My Cannel");
  }
  clickonngif=true;
  clickonngif2=false;
  isvalid:boolean=true;
  changevalue(valid){
    this.isvalid=valid;
  }
  public choose='';
  setvalue(drp:any)
  {
    this.choose=drp.target.value;
  }
  Students:any[]=[
    {
      'name':'Hamza'
    },
    {
      'name':'Danish'
    },
    {
      'name':'Mateen'
    },
    {
      'name':'Usman'
    },
    {
      'name':'Umar'
    },
    ];
    students:any[];
    constructor(){
      this.students=[
        {
          studentID:1,
          name:'Hamza',
          gender:'Male',
          age:19,
        },
        {
          studentID:2,
          name:'Mateen',
          gender:'Male',
          age:11,
        },
        {
          studentID:3,
          name:'Najam',
          gender:'Male',
          age:30,
        },
        {
          studentID:4,
          name:'Umar',
          gender:'Male',
          age:29,
        },
        {
          studentID:5,
          name:'Usman',
          gender:'Male',
          age:21,
        },
      ];
    }
    getmorestudents():void{
      this.students=[
        {
          studentID:1,
          name:'Hamza',
          gender:'Male',
          age:19,
        },
        {
          studentID:2,
          name:'Mateen',
          gender:'Male',
          age:11,
        },
        {
          studentID:3,
          name:'Najam',
          gender:'Male',
          age:30,
        },
        {
          studentID:4,
          name:'Umar',
          gender:'Male',
          age:29,
        },
        {
          studentID:5,
          name:'Usman',
          gender:'Male',
          age:21,
        },
        {
          studentID:6,
          name:'Ameer',
          gender:'Male',
          age:21,
        },
      ];
    }
    trackbystudentid(index:number,student:any):string{
      return student.studentid;
    }
    Countrydetails:any[]=[
      {
        'country':"Pakistan",
        'people':[
          {
            "name":"Ameer Hamza"
          },
          {
            "name":"Hamza Subhani"
          },
          {
            "name":"Ali Hamza"
          },
        ]
      },
      {
        'country':"England",
        'people':[
          {
            "name":"John"
          },
          {
            "name":"Georage"
          },
          {
            "name":"David"
          },
        ]
      },
    ]
    people:any[]=[
      {
        'name':"Ameer Hamza",
        'country':"Pakistan"
      },
      {
        'name':"David",
        'country':"USA"
      },
      {
        'name':"Georage",
        'country':"England"
      },
      {
        'name':"Gayle",
        'country':"Indies"
      },
      {
        'name':"Warner",
        'country':"Australia"
      },
    ];
    getcolor(country){
      switch(country){
        case 'Pakistan':
          return 'green';
        case 'USA':
          return 'blue';
        case 'England':
          return 'red';
        case 'Indies':
          return 'purple';
        case 'Australia':
          return 'yellow';
      }
    }
  }
