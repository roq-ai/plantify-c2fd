import { CustomerInterface } from 'interfaces/customer';
import { PlantInterface } from 'interfaces/plant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  plant_id: string;
  quantity: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  plant?: PlantInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  plant_id?: string;
  status?: string;
}
