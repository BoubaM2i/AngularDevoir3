import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  users : any[] = [
    {
      nom : "Boubacar",
      prenom : "DEMBELE",
      email : "boubacar@dembele.fr",
      telephone : "0658256895",
      entreprise : "Société"
    }
  ]

  user : FormGroup = this.formBuilder.group({
    nom : ["", [Validators.required,Validators.minLength(2)]],
    prenom : ["",[Validators.required,Validators.minLength(2)]],
    email : ["", [Validators.required,Validators.email]],
    entreprise : ["", [Validators.required,Validators.minLength(2)]],
    telephone : ["", [Validators.required ,Validators.minLength(10)]],

  })

  submitted : boolean = false;

  constructor( private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  private addUser() : void {
    this.users.push(this.user.value)
    this.user.reset()
  }

  onSubmit () : void {
    this.submitted = true;
    if (this.user.valid) {
      this.addUser()
    } else {
      console.log("Formulaire invalide"); 
    }
  }

  get Bon () {
    return this.user.controls
  }

}
