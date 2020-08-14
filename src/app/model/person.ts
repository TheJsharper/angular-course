export interface Person {
    name?: string;
    dateOfBirth?: string;
    streetAddress?: string,
    city?: string,
    state?: string,
    zip?: string,
    userName?: string;
    password?: string;
    email?: string;
    avatar?: string;
    read?: number;
    views?: number;
    coments?: number;

}

export interface Seller extends Person {
    points?: number;
    rang?: number;
    salesProcess?: number;
    firstContact?: number;
    needAnalysis?: number;
    priceNegotiation?: number;
}