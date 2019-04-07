import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  itemsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    this.itemsRef = this.db.list('categories');
    return this.itemsRef
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))));
  }
}
