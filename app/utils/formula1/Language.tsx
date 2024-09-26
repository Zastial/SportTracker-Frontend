export const EngToFr = (raceType: string): string => {
    switch (raceType) {
        case 'Race':
            return 'Course';
        case 'Sprint':
            return 'Sprint';
        case '1st Sprint Shootout':
            return 'Sprint Shootout 1';
        case '2nd Sprint Shootout':
            return 'Sprint Shootout 2';
        case '3rd Sprint Shootout':
            return 'Sprint Shootout 3';
        case '1st Qualifying':
            return 'Qualification 1';
        case '2nd Qualifying':
            return 'Qualification 2';
        case '3rd Qualifying':
            return 'Qualification 3';
        case '1st Practice':
            return 'Essais Libres 1';
        case '2nd Practice':
            return 'Essais Libres 2';
        case '3rd Practice':
            return 'Essais Libres 3';
        default:
            return raceType;
    }
};