function inflationCalculator(){
    //Preuzimanje vrednosti iz HTML input elemenata(stopa inflacije, kolicina novca i godine)
    let inflationRate = document.querySelector('#inflationRate');

    let money=document.querySelector('#money')
    console.log(money.value);

    let years=document.querySelector('#years').value;


    //Konvertovanje vrednosti iz stringa u float kako bi mogli da vrsimo operacije nad uzetim vrednostima
    inflationRate=parseFloat(inflationRate.value);
    money=parseFloat(money.value); 
    year=parseFloat(years.value);

    //Racunanje stope inflacije
    let worth=money+(money*(inflationRate/100))
    console.log(worth)
    
    
    for(let i=1; i<years; i++){
        worth+=worth*(inflationRate/100);
    }
    console.log(worth);

    //Kreiranje elementa i ispisivanje stope inflacije

    worth=worth.toFixed(2);
    let newElement = document.createElement('div');

    newElement.className="new-value";
    newElement.innerText=`Danasnjih ${money}€ vredi isto kao ${worth}€ za ${years} godina.`;
    document.querySelector('.container').appendChild(newElement);
    

    
    

}