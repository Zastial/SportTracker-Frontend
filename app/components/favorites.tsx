import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import FormulaGPCard from '../components/formula1/GPCard';
import { getFormulaGPs } from '../utils/API';

interface FavoritesProps {
    favorites: string[];
}

export default function Favorites({ favorites }: FavoritesProps) {
    const [formulaGPs, setFormulaGPs] = useState<any[]>([]);

    const fetchFormulaGPs = useCallback(async () => {
        try {
            const data = await getFormulaGPs();
            setFormulaGPs(data);
        } catch (error) {
            console.log('Erreur lors de la récupération des données:', error);
        }
    }, []);

    useEffect(() => {
        if (favorites.includes('Formula1')) {
            fetchFormulaGPs();
        }
    }, [favorites, fetchFormulaGPs]);

    return (
        <View>
            {favorites.includes('Formula1') && <FormulaGPCard gps={formulaGPs} />}
        </View>
    );
}