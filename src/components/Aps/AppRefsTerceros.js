import React, { Component } from 'react'
import Chart from 'chart.js'

class Graficas extends Component {
  grafica = React.createRef()

  componentDidMount () {
    const ctx = this.grafica.current.getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Nobility', 'Hability to never surrender', 'Wine'],
          datasets: [{
              label: 'French Flag',
              data: [10, 0, 10],
              backgroundColor: [
                  'rgba(0, 0, 255, 1)',
                  'rgba(0, 255, 0, 1)',
                  'rgba(255, 0, 0, 1)',

              ],
              borderColor: [
                'rgba(0, 0, 255, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(255, 0, 0, 1)',

              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });
  }

  render() {
    return (
      <div>
        <canvas 
          width="400" 
          height="400"
          ref={this.grafica}
        ></canvas>
      </div>
    )
  }
}
  
class AppRefsTerceros extends Component {

  render () {
    return(
      <div>
        <h1>App Refs Terceros 🦄</h1>
        <Graficas />
        </div>
    )
  }
}
export default AppRefsTerceros
    