export interface Ship {
  last_ais_update: string | null;
  legacy_id: string;
  model: string | null;
  type: string;
  roles: string[];
  imo: number | null;
  mmsi: number | null;
  abs: number | null;
  class: number | null;
  mass_kg: number | null;
  mass_lbs: number | null;
  year_built: number | null;
  home_port: string;
  status: string;
  speed_kn: number | null;
  course_deg: number | null;
  latitude: number | null;
  longitude: number | null;
}
