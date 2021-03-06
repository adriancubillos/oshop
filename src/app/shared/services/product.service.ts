import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    return this.db.list('products').push(product);
  }

  // getAll(): AngularFireList<Product> {
  //   return this.db.list('products');
  // }

  getAll() {
    return this.db
      .list('/products')
      .snapshotChanges()
      .pipe(map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() }))));
  }

  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId, product) {
    this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    this.db.object('/products/' + productId).remove();
  }
}
