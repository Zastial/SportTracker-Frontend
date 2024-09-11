export type FormulaGP = {
  id: number;
  name: string;
  race_type: string;
  total_laps: number | null;
  date: string;
  status: string;
  circuit: {
    id: number;
    location_id: number;
    image: string;
    name: string;
  };
  location: {
    id: number;
    city: string;
    country: string;
  };
};