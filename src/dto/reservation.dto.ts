export interface createReservationDTO {
    roomId: number,
    date_debut: string,
    date_fin: string,
    userId: number
}

export interface reservationDTO {
    id: number,
    roomId: number,
    date_debut: string,
    date_fin: string,
    userId: number
}
