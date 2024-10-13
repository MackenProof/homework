function crypto (pass) {
    const dataPass = pass.split('');
    if(dataPass.length >= 5) {          // проверка на длину пароля
        dataPass.reverse();
        // console.log(dataPass);
        let el1 = dataPass[2];
        dataPass[2] = dataPass[4];
        dataPass[4] = el1;
        // console.log(dataPass);
        let el2 = dataPass[3];
        dataPass[3] = dataPass[1];
        dataPass[1] = el2;
        // console.log(dataPass);
        let el3 = dataPass[0];
        dataPass[0] = dataPass[dataPass.length -1];
        dataPass[dataPass.length -1] = el3;
        // console.log(dataPass);

        return dataPass;
    }
    
};
const dataPassCrypto = crypto('Pavel');
function checkPass(passCheck) {
    if(passCheck.length >= 5) { 
        let el1 = dataPassCrypto[0];
        dataPassCrypto[0] = dataPassCrypto[dataPassCrypto.length -1];
        dataPassCrypto[dataPassCrypto.length -1] = el1;
        
        let el2 = dataPassCrypto[3];
        dataPassCrypto[3] = dataPassCrypto[1];
        dataPassCrypto[1] = el2;

        let el3 = dataPassCrypto[2];
        dataPassCrypto[2] = dataPassCrypto[4];
        dataPassCrypto[4] = el3;

        const dataPassUnCrypto = dataPassCrypto.reverse().join('');

        dataPassUnCrypto === passCheck ? console.log(true) : console.log(false);
    }
    
}
checkPass('Pavel');
