function cryptoPass (data) {
    const dataPass = data.split('');
    const averageIndexDataPass = Math.floor(dataPass.length / 2);
    const firstDataPass = dataPass.slice(0, averageIndexDataPass);
    const secondDataPass = dataPass.slice(averageIndexDataPass);

    [firstDataPass[0], secondDataPass[Math.floor(secondDataPass.length / 2)], firstDataPass[Math.floor(firstDataPass.length / 2)], secondDataPass[2], firstDataPass[firstDataPass.length -2], secondDataPass[secondDataPass.length -2]] = [secondDataPass[Math.floor(secondDataPass.length / 2)], firstDataPass[0], secondDataPass[2], firstDataPass[Math.floor(firstDataPass.length / 2)], secondDataPass[secondDataPass.length -2], firstDataPass[firstDataPass.length -2]];

    const newDataPass = firstDataPass.concat(secondDataPass).join('');
    return newDataPass;
};

const password = 'MyOriginalPassword';
const encryptedPassword = cryptoPass(password);
const decryptedPassword = cryptoPass(encryptedPassword);

function checkPassword (originalPassword) {
    if (!encryptedPassword || !originalPassword) {
        return false;
    }
    return originalPassword === decryptedPassword;
};

console.log(password, '-',encryptedPassword, '-', decryptedPassword, '-',checkPassword(password));