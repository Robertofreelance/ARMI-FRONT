import { ProductInterface } from "./interfaces/productInterface"

const URL = "http://localhost:3001/api"

export async function fetchProducts() {

    const res = await fetch(URL + '/products')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function fetchShoppingCart() {
    const res = await fetch(URL + '/shoppingCart')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function fetchAddProduct(product: ProductInterface, quantity: number) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido JSON
            // Otros headers según sea necesario
        },
        body: JSON.stringify({ product, quantity }), // Convertir objeto JavaScript a JSON
    };
    const res = await fetch(URL + "/shoppingCart", requestOptions);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function fetchUpdateProduct(id: string, quantity: number) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido JSON
            // Otros headers según sea necesario
        },
        body: JSON.stringify({ quantity }), // Convertir objeto JavaScript a JSON
    };
    const res = await fetch(URL + "/shoppingCart/" + id, requestOptions);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function fetchDeleteProduct(id: string) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json', // Tipo de contenido JSON
            // Otros headers según sea necesario
        },
    };
    const res = await fetch(URL + "/shoppingCart/" + id, requestOptions);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}