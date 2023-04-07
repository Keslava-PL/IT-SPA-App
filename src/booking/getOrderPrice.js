export async function getOrderPrice(daysNumber, roomId){

    let roomPrice;
    let totalPrice;

    if(daysNumber >0){
       await fetch(`http://localhost:3000/rooms/${roomId}`)
            .then(response => response.json())
            .then(room => {
                roomPrice = room.price;
                totalPrice = daysNumber * roomPrice;
                
            })
          //  return [totalPrice, roomPrice];
         return totalPrice;
    }
    



}