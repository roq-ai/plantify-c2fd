import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  name: string;
  address: string;
  phone: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  user?: UserInterface;
  _count?: {
    order?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  user_id?: string;
}
