import axios from 'axios';
import { FormulaGP } from '../models/formula';

export const getFormulaGPs = async (): Promise<FormulaGP[]> => {
  try {
    const response = await axios.get<FormulaGP[]>('http://127.0.0.1:8000/formula');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données Formula GP:', error);
    throw error;
  }
};
