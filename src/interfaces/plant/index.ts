import { OrderInterface } from 'interfaces/order';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PlantInterface {
  id?: string;
  name: string;
  category: string;
  description?: string;
  image?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  organization?: OrganizationInterface;
  _count?: {
    order?: number;
  };
}

export interface PlantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  description?: string;
  image?: string;
  organization_id?: string;
}
