import axios from 'axios'

const apiCategorias = {
    listaCategorias: function () {
        return axios.get('https://servicios.neunapp.com/api/tienda/categorias/lista/')
    }
}

export default apiCategorias