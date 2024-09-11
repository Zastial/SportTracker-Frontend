import { View, Text, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { getFormulaGPs } from '../utils/API';
import { FormulaGP } from '../models/formula';

export default function Formula1Screen() {
  const [loading, setLoading] = useState(true);
  const [formulaGPs, setFormulaGPs] = useState<FormulaGP[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFormulaGPs();
        setFormulaGPs(data);
        console.log('Données récupérées:', data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {formulaGPs.map((gp) => (
            <Text key={gp.id}>{gp.name} - {gp.date}</Text>
          ))}
        </View>
      )}
    </View>
  );
}