import Vue from 'vue'

import { Loading, Notify } from 'quasar'

export async function setAllProducts({ commit }, body) {
    Loading.show()
    try {
        const response = await Vue.prototype.$axios.put(`${process.env.API}product`, {_id: body._id})
        commit('SET_PRODUCTS', response.data)
    } catch (error) {
        console.error(error)
    }
    finally {
        Loading.hide()
    }
}

export  function postProduct({ commit }, body) {
    Loading.show()
    return new Promise(async (resolve, reject) => {
        try {
            const response = await Vue.prototype.$axios.post(`${process.env.API}product/register`, body)
            Notify.create({
                message: 'Produto registrado com sucesso'
            })
            resolve(response)
        } catch (error) {
            reject(error)
        }
        finally {
           setTimeout(() => {
            Loading.hide()
           }, 1000);
        }
    })
}

export function putProduct({ commit }, body) {
    Loading.show()
    return new Promise(async (resolve, reject) => {
        try {
            const response = await Vue.prototype.$axios.put(`${process.env.API}product/update`, body)
            Notify.create({
                message: 'Produto actualizado com sucesso'
            })
            resolve(response)
        } catch (error) {
            reject(error)
        }
        finally {
           setTimeout(() => {
            Loading.hide()
           }, 1000);
        }
    })
}
