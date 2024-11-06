export const Features: {
  label: string;
  route?: string;
  allowedActions?: string[];
  children?: any[];
}[] = [
    {
      label: 'My Dashboard',
      route: '/app/dashboard',
      allowedActions: ['view'],
    }
  ];
