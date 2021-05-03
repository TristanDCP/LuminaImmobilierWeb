export default function PropertyStatus(nameStatus) {
    let result = '';
    switch (nameStatus) {
        case 1:
            result = 'A Vendre';
            break;
        case 2:
            result = 'En cours de vente';
            break;
        case 3:
            result = 'Vendu';
            break;
        default:
            break;
    }
    return result;
}