/**
 * Interface for the 'Users' data
 */
export interface UsersEntity {
  id: string | number; // Primary ID
  name: string;
  last_name: string;
  created_at: Date | string;
}
