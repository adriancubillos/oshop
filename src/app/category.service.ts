import { Injectable } from '@angular/core';
import { snapshotChanges, AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  itemsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db
      .list('categories')
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
  }
}
