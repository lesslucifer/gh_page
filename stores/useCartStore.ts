import { create } from 'zustand';

export interface CartItem {
  code: string;
  name: string;
  price: number;
  quantity: number;
  sizes: string;
  image: string;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (code: string, quantity: number) => void;
  removeFromCart: (code: string) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.code === product.code);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.code === product.code
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    });
  },

  updateQuantity: (code: string, quantity: number) => {
    set((state) => ({
      items: quantity === 0 
        ? state.items.filter(item => item.code !== code)
        : state.items.map(item =>
            item.code === code ? { ...item, quantity } : item
          ),
    }));
  },

  removeFromCart: (code) => {
    set((state) => ({
      items: state.items.filter(item => item.code !== code),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  get total() {
    return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },
})); 