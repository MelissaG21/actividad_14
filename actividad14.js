const comprarCasco = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Comprar Casco")
            }, 1000)
    })
}

const comprarGuantes = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Comprar Guantes")
            }, 2000)
    })
}

const paseo = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Pasear")
            }, 8000)
    })
}

const salirBici = async () => {
    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const pasear = await paseo();
    return ([casco,guantes, pasear]);
}

salirBici().then(res => console.log(res));