export function getRandom(seats, reservation, seatsTogether) {
  if (!seats) return;
  let availableSeats = [];
  seats.forEach((row) => {
    row.forEach((seat, seatIndex) => {
      if (!seat) {
        return;
      }

      if (!seatsTogether) {
        availableSeats.push(seat);
      } else {
        let temp = [];

        for (let index = 0; index < reservation.seatsNumber; index++) {
          if (row[seatIndex + index]?.id && !row[seatIndex + index]?.reserved) {
            temp.push(row[seatIndex + index]);
          } else {
            temp = [];
          }
        }

        temp.length === parseInt(reservation.seatsNumber, 10) &&
          availableSeats.push(temp);
      }
    });
  });

  if (!seatsTogether) {
    return availableSeats
      .sort(() => Math.random() - Math.random())
      .slice(0, parseInt(reservation.seatsNumber, 10));
  } else {
    const random = Math.floor(Math.random() * availableSeats.length);
    return availableSeats[random];
  }
}
