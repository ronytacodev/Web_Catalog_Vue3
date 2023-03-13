import axios from 'axios'

const apiColores = {
    listarColores: function () {
        return axios.get('https://servicios.neunapp.com/api/tienda/colores/lista/')
    }
}

export default apiColores