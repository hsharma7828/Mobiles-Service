export class MobileModel {
  name: string;
  model_name: string;
  description: string;
  imageUrl: string;
  price: string;

  constructor(
    name: string,
    model_name: string,
    description: string,
    imageUrl: string,
    price: string
  ) {
    this.name = name;
    this.model_name = model_name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }
}
