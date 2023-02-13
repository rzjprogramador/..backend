// let argAlvo = 'texto'
export const auxText1 = '+++principal+++'

const metodoRepo = (arg) => {
    const transformArg = `${arg} ++concatenado no metodoRepo >>>`
    return transformArg.toUpperCase()
}

export const metodoFazNada = (arg) => {
    return arg
}

export const mainPrincipal = (arg) => {
    const transformArg = `${arg} ${auxText1}`
    return metodoRepo(transformArg)
}

// console.log(mainPrincipal(argAlvo))