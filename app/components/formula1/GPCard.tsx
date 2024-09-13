import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from '@rneui/themed';
import { FormulaGP } from '../../models/formula';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { EngToFr } from '../../utils/Language';

interface GroupedFormulaGP {
  name: string;
  location: {
    city: string;
    country: string;
  };
  circuit: {
    image: string;
  };
  events: FormulaGP[];
}

const FormulaGPCard: React.FC<{ gps: FormulaGP[] }> = ({ gps }) => {
    if (gps.length === 0) {
      return (
        <Card containerStyle={styles.card}>
          <Text>Aucun Grand Prix disponible</Text>
        </Card>
      );
    }
  
    const groupedGPs: GroupedFormulaGP = gps.reduce((acc, gp) => {
      if (!acc.name) {
        acc = {
          name: gp.name,
          location: gp.location,
          circuit: gp.circuit,
          events: [],
        };
      }
      acc.events.push(gp);
      return acc;
    }, {} as GroupedFormulaGP);
  
    groupedGPs.events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
    const startDate = parseISO(groupedGPs.events[0].date);
    const endDate = parseISO(groupedGPs.events[groupedGPs.events.length - 1].date);
    const dateRange = `${format(startDate, 'd', { locale: fr })} - ${format(endDate, 'd MMM', { locale: fr })}`.toUpperCase();

  return (
    <ScrollView>
        <Card containerStyle={styles.card}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.title}>{groupedGPs.name}</Text>
                    <Text style={styles.subtitle}>{groupedGPs.location.city}</Text>
                    <Text style={styles.dateRange}>{dateRange}</Text>
                </View>
            </View>
            <Card.Image source={{ uri: groupedGPs.circuit.image }} style={styles.image} />
            <ScrollView style={styles.eventsContainer}>
                {groupedGPs.events.map((event, index) => (
                <View key={event.id} style={[styles.eventItem, index === 0 && styles.nextEvent]}>
                    <View style={styles.eventContent}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.day}>{format(parseISO(event.date), 'd')}</Text>
                            <Text style={styles.weekday}>{format(parseISO(event.date), 'EEE', { locale: fr })}</Text>
                        </View>
                        <View style={styles.eventDetails}>
                            <Text style={styles.raceType}>{EngToFr(event.race_type)}</Text>
                            <Text style={styles.time}>{format(parseISO(event.date), 'HH:mm')}</Text>
                        </View>
                    </View>
                </View>
                ))}
            </ScrollView>
        </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  dateRange: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventsContainer: {
    // maxHeight: 200,
  },
  eventItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  eventContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  nextEvent: {
    borderLeftWidth: 4,
    borderLeftColor: '#FF0000', // Couleur de mise en évidence pour l'événement suivant
  },
  dateContainer: {
    alignItems: 'center',
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekday: {
    fontSize: 14,
  },
  eventDetails: {
    alignItems: 'flex-end',
  },
  raceType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: 'gray',
  },
});

export default FormulaGPCard;