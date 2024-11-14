function calcolaSpese(){
    let bustaPaga = Number(document.getElementById('bustaPaga').value);
    if (isNaN(bustaPaga) || bustaPaga <= 0){
        alert("Inserisci una busa paga valida");
        return
    };

    let speseTotali = bustaPaga * 0.7;
    let svagoTotale = bustaPaga * 0.2;
    let risparmioTotale = bustaPaga * 0.1;

    let assicurazione = document.getElementById('checkAssicurazioe').checked ? 232 : 0;
    let bollo = document.getElementById('checkBollo').checked ? 100 : 0;

    let rataAuto = 224;
    let rataBollo = 150;
    let rataCasa = 300;
    let benzina = 160;
    let spesa = 200

    let speseFisse = rataAuto + bollo + rataCasa + assicurazione + benzina + spesa;

    let speseRimanente = speseTotali - speseFisse;

    document.getElementById('rimanenteDopoSpese').innerText = speseRimanente;
    document.getElementById('soldiPerSvago').innerText = svagoTotale;
    document.getElementById('soldiPerRisparmio').innerText = risparmioTotale;
};
