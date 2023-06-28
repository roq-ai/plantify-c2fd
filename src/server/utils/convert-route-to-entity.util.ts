const mapping: Record<string, string> = {
  campaigns: 'campaign',
  customers: 'customer',
  orders: 'order',
  organizations: 'organization',
  plants: 'plant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
