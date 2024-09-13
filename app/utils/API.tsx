import axios from 'axios';
import { FormulaGP } from '../models/formula';

let URL = "http://sporttrackerapi.sunlamander.tech/"

export const getFormulaGPs = async (): Promise<FormulaGP[]> => {
  try {
    const response = await axios.get<FormulaGP[]>(URL + 'formula');
    return response.data;
  } catch (error) {
    throw error;
  }
};
