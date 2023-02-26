interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

interface Geo {
    lat: string,
    lng: string,
}

export interface UserDto {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}