import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from '@angular/fire/firestore';
import { ref } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class FireStoreService 
{
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { } // Inicializa AngularFireStorage en el constructor

  obtenerPeliculas(): Observable<any[]> {
    return this.firestore.collection('peliculas', ref => ref.orderBy('fechaEstreno')).valueChanges()
      .pipe(
        map((peliculas: any[]) => {
          return peliculas.map(pelicula => {
            const fechaEstreno = (pelicula.fechaEstreno as Timestamp);
            return { ...pelicula, fechaEstreno };
          });
        })
      );
  }

  obtenerActores(): Observable<any[]> 
  {
    return this.firestore.collection('actores', ref => ref.orderBy('edad')).valueChanges();
  }

  obtenerPaises(): Observable<any[]> {
    return this.firestore.collection('paises', ref => ref.limit(10)).valueChanges();
  }

  guardarActor(actor: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('actores').doc(id).set(actor);
  }

  guardarPelicula(pelicula: any): Promise<any> 
  {
    return this.firestore.collection('peliculas').add(pelicula);
  }


  guardarPeliculaConFoto(pelicula: any, foto: File): Promise<any> 
  {
    const fotoRef = this.storage.ref(`fotos/${foto.name}`);
    const tareaSubida = fotoRef.put(foto);
    pelicula.fechaEstreno = pelicula.fechaEstreno.toString();
    console.log(pelicula.fechaEstreno);

    return new Promise<void>((resolve, reject) => {
      tareaSubida.then(snapshot => {
      
        fotoRef.getDownloadURL().subscribe(url => {
    
          pelicula.fotoUrl = url;
       
          this.guardarPelicula(pelicula).then(() => {
            resolve(); 
          }).catch(error => {
            reject(error); 
          });
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

}
