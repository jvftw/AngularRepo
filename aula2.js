const gasPrice =  6.66;
const etanolPrice =  5.79;
const tipoComb = 'Gasolina';
const gasKm = 10;
const distKm = 100;

if (tipoComb === 'Etanol'){
    const valorViagem = (distKm/gasKm)*etanolPrice;
    console.log(valorViagem);
}
    else if(tipoComb === 'Gasolina'){
    const valorViagem = (distKm/gasKm)*gasPrice;
    console.log(valorViagem);
}

