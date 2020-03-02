import React, { Component } from 'react'
import TarjetaFruta from '../TarjetaFruta/'


const AppFundamentos = () => ( //fundamentos
    <>
        <TarjetaFruta name = 'Sandia' price={5.00} />
        <TarjetaFruta name = 'Pera' price={2.00} />
        <TarjetaFruta name = 'Manzana' price={0.50} />
    </>
)

export default AppFundamentos