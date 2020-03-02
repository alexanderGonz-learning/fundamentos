import React, { Component } from 'react'
const Title = ({ uiColor, children }) => { // Css y Defracturacion
    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: uiColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }
    // console.log(props.children)
    return (
        <h1 style={styles}>
            { children }
        </h1>
        )

}
class AppCssDefracturizacion extends React.Component {
    state = {
        uiColor: 'tomato'
    }
    render () {
        const { uiColor } = this.state
        return (
            <>
                <Title
                    uiColor={uiColor}
                >
                    Alexander <em>Gonzalez</em>
                </Title>
            </>
        )
    }
}
export default AppCssDefracturizacion