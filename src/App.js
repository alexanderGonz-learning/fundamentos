import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import TarjetaFruta from './components/TarjetaFruta/'
/*const App = () => ( //fundamentos
    <>
        <TarjetaFruta name = 'Sandia' price={5.00} />
        <TarjetaFruta name = 'Pera' price={2.00} />
        <TarjetaFruta name = 'Manzana' price={0.50} />
    </>
)*/

/*const Title = ({ uiColor, children }) => { // Css y Defracturacion
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
class App extends React.Component {
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
}*/
class PortalModal extends Component {     //Portales - Modal
    render () {

        if(!this.props.visible) {
            return null
        }

        const styles = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            background: 'linear-gradient(to top right, #667eea, #764ba2)',
            opacity: '0.95',
            color: '#FFF'
        }
        return ReactDOM.createPortal((
            <div style={styles}>
                {this.props.children}
            </div>
        ), document.getElementById('modal-root'))
    }
}
class App extends Component {
    state = {
        visible: false,
        num: 0
    }

    componentDidMount () {
        setInterval(() => {
            this.setState( prevState => ({
                num: prevState.num + 1
            }))
        }, 1000)
    }

    mostrar = () => {
        this.setState({ visible: true })
    }

    cerrar = () => {
        this.setState({ visible: false })
    }

    render () {
        return (
            <div>
                <button onClick={this.mostrar}>
                    Mostrar
                </button>
                <PortalModal visible={this.state.visible}>
                    <button onClick={this.cerrar}>
                        Cerrar
                    </button>
                    <h1>
                        Hola desde un portal modal :) {this.state.num}
                    </h1>
                </PortalModal>
            </div>
        )
    }
}
export default App
