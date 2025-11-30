export interface ColorSwatchProps {
  name: string;
  hex: string;
  className?: string;
  textColor?: string;
}

export interface TypographySampleProps {
  role: string;
  size: string;
  weight: string;
  sample: string;
  className?: string;
}

export enum StatusType {
  DELIVERED = 'Delivered',
  IN_TRANSIT = 'In Transit',
  PENDING = 'Pending',
  WAITING = 'Waiting',
  EXCEPTION = 'Exception'
}

export interface ShipmentData {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: StatusType;
  carrier: string;
  weight: string;
  destination: string;
}
