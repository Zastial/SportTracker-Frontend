import { ColorValue } from 'react-native';

interface ColorPalette {
  primary: ColorValue;
  secondary: ColorValue;
  accent: ColorValue;
  background: ColorValue;
  surface: ColorValue;
  text: ColorValue;
  textLight: ColorValue;
  success: ColorValue;
  error: ColorValue;
  warning: ColorValue;
  card: ColorValue;
}

export const LightPalette: ColorPalette = {
  primary: '#3498db',
  secondary: '#2ecc71',
  accent: '#e74c3c',
  background: '#f5f6fa',
  surface: '#ffffff',
  text: '#2c3e50',
  textLight: '#7f8c8d',
  success: '#27ae60',
  error: '#c0392b',
  warning: '#f39c12',
  card: '#ffffff',
};

export const DarkPalette: ColorPalette = {
  primary: '#3498db',
  secondary: '#2ecc71',
  accent: '#e74c3c',
  background: '#2c3e50',
  surface: '#34495e',
  text: '#ecf0f1',
  textLight: '#bdc3c7',
  success: '#27ae60',
  error: '#c0392b',
  warning: '#f39c12',
  card: '#34495e',
};