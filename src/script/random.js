export function random(max) {
    const numeros = []; 
    if(max == 1000000){
        for(let i = 0; i < max; i++){
            numeros.push(Math.floor(Math.random() * max));
        }
        return numeros; 
    }else{
        for(let i = 0; i < max; i++){
            numeros.push(Math.floor(Math.random() * max));
        }
        return numeros;
    }
}

process.send(random(1000000)); 