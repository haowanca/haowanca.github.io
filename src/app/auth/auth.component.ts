import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {

    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    console.log("Hello1"); //1. This works perfectly
    console.log(JSON.stringify(this.afAuth.user.displayName)); //1. This works perfectly

  }
  logout() {
    this.afAuth.auth.signOut();
    console.log("Hello2"); //1. This works perfectly

    console.log(JSON.stringify(this.afAuth.user.displayName)); //1. This works perfectly

  }


  ngOnInit() {
  }

}
