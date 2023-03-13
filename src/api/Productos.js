import axios from 'axios'

const apiProductos = {
    productosPopulares: function () {
        return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/')
    },
    filtrarProductos: function (filtros) {
        return axios.get('https://servicios.neunapp.com/api/tienda/productos/lista/' + filtros)
    },
}

export default apiProductos