import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"tp-sala-de-juegos-e4119","appId":"1:1056489462609:web:ff318c419a7560ada75170","storageBucket":"tp-sala-de-juegos-e4119.appspot.com","apiKey":"AIzaSyDgBZCMSjqrvftUMSMYomEVTKMYRZ7_DR0","authDomain":"tp-sala-de-juegos-e4119.firebaseapp.com","messagingSenderId":"1056489462609"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};

const firebaseConfig = {
  apiKey: "AIzaSyDgBZCMSjqrvftUMSMYomEVTKMYRZ7_DR0",
  authDomain: "tp-sala-de-juegos-e4119.firebaseapp.com",
  projectId: "tp-sala-de-juegos-e4119",
  storageBucket: "tp-sala-de-juegos-e4119.appspot.com",
  messagingSenderId: "1056489462609",
  appId: "1:1056489462609:web:ff318c419a7560ada75170"
};