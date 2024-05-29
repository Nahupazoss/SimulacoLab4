import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes), provideFirebaseApp(() => 
    initializeApp({"projectId":"simulacro-41df7",
    "appId":"1:1015751022356:web:d3d824f2315a1f484f5401",
    "storageBucket":"simulacro-41df7.appspot.com",
    "apiKey":"AIzaSyChLGvWIxblyApCK1zJY6HO_GTpH3-002U",
    "authDomain":"simulacro-41df7.firebaseapp.com",
    "messagingSenderId":"1015751022356"})),
     provideAuth(() => getAuth()), 
     provideFirestore(() => getFirestore()),
     provideStorage(() => getStorage()),
     importProvidersFrom(AngularFireModule.initializeApp({
      apiKey: "AIzaSyChLGvWIxblyApCK1zJY6HO_GTpH3-002U",
      authDomain: "simulacro-41df7.firebaseapp.com",
      projectId: "simulacro-41df7",
      storageBucket: "simulacro-41df7.appspot.com",
      messagingSenderId: "1015751022356",
      appId: "1:1015751022356:web:dad2e59f4ea3d5b84f5401"
  }))]
};
