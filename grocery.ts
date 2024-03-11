class Grocery {

  private items: { [productId: number]: {  
    name: string; 
    imageUrl: string;
    price: number;
    quantity: number;
  }} = {};

  public addItem(productId: number, name: string, imageUrl: string, price: number, quantity: number = 1): void {
    console.log('adding product: ', name, imageUrl, price, quantity);

    if (this.items[productId]) {
      this.items[productId].quantity += quantity;
    } else {
      this.items[productId] = { name, imageUrl, price, quantity};
    }

  }

  public removeItem(productId: number): void {
    delete this.items[productId];
  }

  public getTotalPrice(): number {
    return Object.values(this.items).reduce((total, {price, quantity}) => total + price * quantity, 0);
  }

  public getItems(): { [productId: number]:{  
    name: string; 
    imageUrl: string;
    price: number;
    quantity: number;
  }}{ return this.items; }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const cart = new Grocery();
    console.log('Grocery Loaded 0')
    cart.addItem(1, "Milk", "assets/milk.jpeg", 4.75, 1)
    cart.addItem(2, "Bread", "assets/bread.jpeg", 5.86, 2)
    cart.addItem(3, "Eggs", "assets/eggs.jpeg", 3.47, 12)
    console.log('Grocery Loaded 1')
    const listElement = document.getElementById('grocery-list');
    console.log('Grocery Loaded 2')
    console.log(listElement)
    console.log('Grocery Loaded 3')
    const items = cart.getItems();
    console.log('Grocery Loaded 4')
    






    const containerElement = document.createElement('div');

    const imageElement = document.createElement('div');
    const nameElement = document.createElement('div');
    const quantityElement = document.createElement('div');
    const priceElement = document.createElement('div');
    const totalElement = document.createElement('div');
    totalElement.style.textAlign = 'right';
    totalElement.style.width = '200px';

    const imageNode = document.createTextNode(`Image`);
    const nameNode = document.createTextNode(`Name`);
    const quantityNode = document.createTextNode(`Quantity`);
    const priceNode = document.createTextNode(`Price`);
    const totalNode = document.createTextNode(`Total`);
    
    imageElement.style.fontWeight = 'bold';
    nameElement.style.fontWeight = 'bold';
    quantityElement.style.fontWeight = 'bold';
    priceElement.style.fontWeight = 'bold';
    totalElement.style.fontWeight = 'bold';

    imageElement.style.textAlign = 'center';
    nameElement.style.textAlign = 'left';
    quantityElement.style.textAlign = 'left';
    priceElement.style.textAlign = 'left';
    totalElement.style.textAlign = 'right';
    

    imageElement.appendChild(imageNode);
    nameElement.appendChild(nameNode);
    quantityElement.appendChild(quantityNode);
    priceElement.appendChild(priceNode);
    totalElement.appendChild(totalNode);

    containerElement.appendChild(imageElement);
    containerElement.appendChild(nameElement);
    containerElement.appendChild(quantityElement);
    containerElement.appendChild(priceElement);
    containerElement.appendChild(totalElement);

    listElement?.appendChild(containerElement);


    Object.values(items).forEach(( {name, imageUrl, price, quantity}) => {
      console.log('items: ', name, imageUrl, price, quantity)
      
      const containerElement = document.createElement('div');

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageElement.alt = name;

      const nameElement = document.createElement('div');
      const quantityElement = document.createElement('div');
      const priceElement = document.createElement('div');
      const totalElement = document.createElement('div');
      totalElement.style.textAlign = 'right';
      totalElement.style.width = '150px';

      const nameNode = document.createTextNode(`${name}`);
      const quantityNode = document.createTextNode(`${quantity}`);
      const priceNode = document.createTextNode(`$${price}`);
      const totalNode = document.createTextNode(`$${(quantity*price).toFixed(2)}`);
      

      nameElement.appendChild(nameNode);
      quantityElement.appendChild(quantityNode);
      priceElement.appendChild(priceNode);
      totalElement.appendChild(totalNode);

      containerElement.appendChild(imageElement);
      containerElement.appendChild(nameElement);
      containerElement.appendChild(quantityElement);
      containerElement.appendChild(priceElement);
      containerElement.appendChild(totalElement);

      listElement?.appendChild(containerElement);
      
    })

    const totalPriceElement = document.createElement('div');
    totalPriceElement.id = 'totalPrice';
    totalPriceElement.textContent = `Total: $${cart.getTotalPrice()}`

    // Add this element to the document right before the script tag.
    const scriptTag = document.body.getElementsByTagName("script")[0];
    document.body.insertBefore(totalPriceElement, scriptTag);
  })
