import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { getFormulaGPs } from '../utils/API';
import { FormulaGP } from '../models/formula';
import FormulaGPCard from '../components/formula1/GPCard';

export default function Formula1Screen() {
  const [loading, setLoading] = useState(true);
  const [formulaGPs, setFormulaGPs] = useState<FormulaGP[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchFormulaGPData = async () => {
    try {
      const data = await getFormulaGPs();
      setFormulaGPs(data);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      console.log('Erreur lors de la récupération des données Formula GP:', error);
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchFormulaGPData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchFormulaGPData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView 
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FormulaGPCard gps={formulaGPs} />
    </ScrollView>
  );
}