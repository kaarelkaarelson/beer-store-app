import store from '../app/store';

export type CartState = ReturnType<typeof store.getState>;

type Beer = {
    id: number;
    uid: string;
    name: string;
    brand: string;
    style: string;
    hop: string;
    yeast: string;
    malts: string;
    ibu: string;
    alcohol: string;
    blg: string;
    quantity: number;
  };
  
  type CartItem = Beer & { quantity: number };
  
  type CartGroup = {
    [key: string]: {
      group: string;
      items: CartItem[];
    };
  };
  
  type Order = {
    cart: CartItem[];
    id: string;
    date: string;
  };
  
  export type { Beer, CartItem, CartGroup, Order };
  