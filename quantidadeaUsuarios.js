import { getCSS } from "./common.js";

async function quantidadeDeUsuariosPorRede () {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)
    
    const data = [
        {
          x: 'nomeDasRedes',
          y: quantidadeDeUsuarios,
          type: 'bar',
          marker: {
            color: getCSS('--primary-color')
        }
    }
]

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Redes sociais com mais usuários no mundo',
       x: 0,
       font: {
           color: getCSS('--primary-color'),
           family: getCSS('--font'),
           size: 30
       }
    },
    xaxis: {
        icktfont: tickConfig,
        title: {
            text: 'nome das redes sociais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        icktfont: tickConfig,
        title: {
            text: 'bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
    
}
quantidadeUsuarios()
},
xaxis: {
    tickfont: tickConfig,
  },
  xaxis: {
      tickfont: tickConfig,
      title: {
          text: 'nome das redes sociais',
          font: {
              color: getCSS('--secondary-color')
          }
      }
  },


        text: 'nome das redes sociais',
        font: {
            color: getCSS('--secondary-color')
        }
    }
},
