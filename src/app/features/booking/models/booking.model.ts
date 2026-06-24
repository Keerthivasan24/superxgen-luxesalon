export interface BookingForm {
  name:     string;
  phone:    string;
  email:    string;
  notes:    string;
  promo:    string;
  agreePolicy: boolean;
  payAtSalon:  boolean;
}

export interface BookingPayload {
  salonId:   number;
  salonName: string;
  serviceId: number;
  serviceName: string;
  servicePrice: number;
  serviceDuration: number;
  stylistId:   number | null;
  stylistName: string | null;
  date:  string;
  time:  string;
  form:  BookingForm;
  total: number;
  tax:   number;
}

export interface BookingConfirmation {
  bookingId:  string;
  salonName:  string;
  serviceName:string;
  date:       string;
  time:       string;
  stylist:    string | null;
  total:      number;
}

export type BookingStep = 1 | 2 | 3;

// Pre-fill data passed via query params from salon-detail
export interface BookingQueryParams {
  salonId?:   string;
  serviceId?: string;
  stylistId?: string;
  date?:      string;
  time?:      string;
}

export const TAX_RATE = 0.18; // 18% GST

export const MOCK_SALONS_MINI: Record<number, { name: string; area: string; phone: string }> = {
  1: { name: 'Toni & Guy',          area: 'Koramangala', phone: '+91 98765 43210' },
  2: { name: 'Jean-Claude Biguine', area: 'Indiranagar', phone: '+91 98765 43211' },
  3: { name: 'Lakmé Salon Luxe',    area: 'MG Road',     phone: '+91 98765 43212' },
};