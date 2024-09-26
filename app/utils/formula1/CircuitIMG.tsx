import
 abu_dhabi_circuit from '../../../assets/formula/Abu_Dhabi_Circuit.png';
import australia_circuit from '../../../assets/formula/Australia_Circuit.png';
import austria_circuit from '../../../assets/formula/Austria_Circuit.png';
import bahrain_circuit from '../../../assets/formula/Bahrain_Circuit.png';
import baku_circuit from '../../../assets/formula/Baku_Circuit.png';
import belgium_circuit from '../../../assets/formula/Belgium_Circuit.png';
import brazil_circuit from '../../../assets/formula/Brazil_Circuit.png';
import canada_circuit from '../../../assets/formula/Canada_Circuit.png';
import china_circuit from '../../../assets/formula/China_Circuit.png';
import emilia_romagna_circuit from '../../../assets/formula/Emilia_Romagna_Circuit.png';
import great_britain_circuit from '../../../assets/formula/Great_Britain_Circuit.png';
import hungary_circuit from '../../../assets/formula/Hungary_Circuit.png';
import italy_circuit from '../../../assets/formula/Italy_Circuit.png';
import japan_circuit from '../../../assets/formula/Japan_Circuit.png';
import mexico_circuit from '../../../assets/formula/Mexico_Circuit.png';
import miami_circuit from '../../../assets/formula/Miami_Circuit.png';
import monaco_circuit from '../../../assets/formula/Monaco_Circuit.png';
import netherlands_circuit from '../../../assets/formula/Netherlands_Circuit.png';
import qatar_circuit from '../../../assets/formula/Qatar_Circuit.png';
import saudi_arabia_circuit from '../../../assets/formula/Saudi_Arabia_Circuit.png';
import singapore_circuit from '../../../assets/formula/Singapore_Circuit.png';
import spain_circuit from '../../../assets/formula/Spain_Circuit.png';
import usa_circuit from '../../../assets/formula/USA_Circuit.png';
import las_vegas_circuit from '../../../assets/formula/Las_Vegas_Circuit.png';

export const NameToCircuitIMG = (circuitName: string): string => {
    switch (circuitName) {
        case 'Bahrain Grand Prix':
            return bahrain_circuit;
        case 'Saudi Arabia Grand Prix':
            return saudi_arabia_circuit;
        case 'Australia Grand Prix':
            return australia_circuit;
        case 'Emilia Romagna Grand Prix':
            return emilia_romagna_circuit;
        case 'Miami Grand Prix':
            return miami_circuit;
        case 'Monaco Grand Prix':
            return monaco_circuit;
        case 'Azerbaijan Grand Prix':
            return baku_circuit;
        case 'Canada Grand Prix':
            return canada_circuit;
        case 'Great Britain Grand Prix':
            return great_britain_circuit;
        case 'Hungary Grand Prix':
            return hungary_circuit;
        case 'Italy Grand Prix':
            return italy_circuit;
        case 'Japan Grand Prix':
            return japan_circuit;
        case 'Mexico Grand Prix':
            return mexico_circuit;
        case 'Saudi Arabia Grand Prix':
            return saudi_arabia_circuit;
        case 'Singapore Grand Prix':
            return singapore_circuit;
        case 'Spain Grand Prix':
            return spain_circuit;
        case 'USA Grand Prix':
            return usa_circuit;
        case 'Abu Dhabi Grand Prix':
            return abu_dhabi_circuit;
        case 'Brazil Grand Prix':
            return brazil_circuit;
        case 'China Grand Prix':
            return china_circuit;
        case 'Netherlands Grand Prix':
            return netherlands_circuit;
        case 'Austria Grand Prix':
            return austria_circuit;
        case 'Belgium Grand Prix':
            return belgium_circuit;
        case 'Las Vegas Grand Prix':
            return las_vegas_circuit;
        case 'Qatar Grand Prix':
            return qatar_circuit;
        default:
            return "";
    }
};
