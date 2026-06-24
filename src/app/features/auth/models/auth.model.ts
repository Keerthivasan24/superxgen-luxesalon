export interface AuthUser {
  id:             number;
  name:           string;
  email:          string;
  phone:          string;
  avatar:         string;
  memberSince:    string;
  loyaltyTier:    'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  loyaltyPoints:  number;
  totalBookings:  number;
  totalSpent:     number;
  role:           'user' | 'owner';   // ← NEW
}

export type AuthMode = 'login' | 'register' | 'otp';
export type UserRole = 'user' | 'owner';             // ← NEW

export interface LoginPayload {
  email:    string;
  password: string;
  role:     UserRole;                                 // ← NEW
}

export interface RegisterPayload {
  name:     string;
  email:    string;
  phone:    string;
  password: string;
  role:     UserRole;                                 // ← NEW
  // Owner-only extra fields
  salonName?:    string;
  businessEmail?: string;
}

export const MOCK_USER: AuthUser = {
  id:            1,
  name:          'Ananya Sharma',
  email:         'ananya@luxesalon.in',
  phone:         '+91 98765 43210',
  avatar:        'A',
  memberSince:   'January 2024',
  loyaltyTier:   'Bronze',
  loyaltyPoints: 0,
  totalBookings: 0,
  totalSpent:    0,
  role:          'user',
};

export const MOCK_OWNER: AuthUser = {
  id:            2,
  name:          'Rajesh Menon',
  email:         'owner@toniandguy.in',
  phone:         '+91 98765 00001',
  avatar:        'R',
  memberSince:   'March 2023',
  loyaltyTier:   'Gold',
  loyaltyPoints: 0,
  totalBookings: 0,
  totalSpent:    0,
  role:          'owner',
};