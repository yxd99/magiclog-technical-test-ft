export interface Product {
  id:        string;
  name:      string;
  sku:       string;
  stock:     number;
  price:     number;
  user:      User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface User {
  id:    string;
  name:  string;
  email: string;
}
