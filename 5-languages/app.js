const userLang = prompt('Select language: en, ru, de, fr ');
switch(userLang.toLowerCase()) {
    case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Добрый день!');
        break;
    case 'de':
        console.log('Guten Tag!');
        break;
    case 'fr':
        console.log('Bonjour!');
        break;
    default:
        console.log('Please select your language!');
}