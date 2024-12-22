document.getElementById('show-hotel').style.display = 'none';
document.getElementById('showCheckIn').style.display = 'none';
document.getElementById('showCheckOut').style.display = 'none';
document.getElementById('exitText').style.display = 'none';

let inputFloorErr = document.getElementById('inputFloorErr');
let inputRoomErr = document.getElementById('inputRoomErr');
let checkInFloorErr = document.getElementById('checkInFloorErr');
let checkInRoomErr = document.getElementById('checkInRoomErr');
let checkInNameErr = document.getElementById('checkInNameErr');
let checkOutFloorErr = document.getElementById('checkOutFloorErr');
let checkOutRoomErr = document.getElementById('checkOutRoomErr');

let myHotel = [];

function createHotel(){

    let inputFloor = document.getElementById('inputFloor').value;
    let inputRoom = document.getElementById('inputRoom').value;
    inputFloorErr.innerHTML = '';
    inputRoomErr.innerHTML = '';
    let row = Number (inputFloor);
    let col = Number (inputRoom);

    if(inputFloor == '' || inputRoom == '' || isNaN(inputFloor) || isNaN(inputRoom) || row <= 0 || col <=0 ){
        if(inputFloor == '')
            inputFloorErr.innerHTML = 'please enter floor';
        if(inputRoom == '')
            inputRoomErr.innerHTML = 'please enter room';
        if(isNaN(inputFloor) || row <=0 )
            inputFloorErr.innerHTML = 'invalid floor';
        if(isNaN(inputRoom) || col <=0 )
            inputRoomErr.innerHTML = 'invalid room';
    }else{

        //clear previous errors
        inputFloorErr.innerHTML = '';
        inputRoomErr.innerHTML = '';
        
        var storeRow = document.getElementById('detailFloor');
        storeRow.style.fontSize = '20px';

        alert(`You create ${inputFloor} floor and ${inputRoom} room`);

        document.getElementById('setup-hotel').style.display = 'none';
        document.getElementById('show-hotel').style.display = 'block';
        document.getElementById('text_1').innerHTML = `You have ${inputFloor} floor and ${inputRoom} room`;

        // set null
        for(i = 0 ; i < row ; i++){
            myHotel[i] = [];
                for(j = 0; j < col ; j++){
                myHotel[i][j] = null;
            }
        }
        
        // display all room
        for(i = 0 ; i < row ; i++){
            storeRow.innerHTML += `<br> Floor `+eval(i+1)+ ` :`;
            for(j = 0 ; j < col ; j++){
                storeRow.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +  `${myHotel[i][j]}`;
            }
            storeRow.innerHTML += '<br>';
        }

        // save checkIn
        document.getElementById('btnSaveCheckIn').onclick = function(){
            let checkInFloor = document.getElementById('checkInFloor').value;
            let checkInRoom = document.getElementById('checkInRoom').value;
            let guestName = document.getElementById('checkInGuestName').value;
            let checkInFloor_1 = document.getElementById('checkInFloor');
            let checkInRoom_1 = document.getElementById('checkInRoom');
            let guestName_1 = document.getElementById('checkInGuestName');

            checkInFloorErr.innerHTML = '';
            checkInRoomErr.innerHTML = '';
            checkInNameErr.innerHTML = '';

            let guestCheckFloor = Number (checkInFloor);
            let guestCheckRoom = Number (checkInRoom);

            if(checkInFloor == '' || checkInRoom == '' || isNaN(checkInFloor) || isNaN(checkInRoom) || guestName == '' || (isNaN(guestName) == false) ||
                guestCheckFloor<=0 || guestCheckFloor>row || guestCheckRoom<=0 || guestCheckRoom>col ){
                if(checkInFloor == '')
                    checkInFloorErr.innerHTML = 'please enter floor';
                if(checkInRoom == '')
                    checkInRoomErr.innerHTML = 'please enter room';
                if(isNaN(checkInFloor))
                    checkInFloorErr.innerHTML = 'invalid floor';
                if(isNaN(checkInRoom))
                    checkInRoomErr.innerHTML = 'invalid room';
                if(guestName == '' || isNaN(guestName) == false )
                    checkInNameErr.innerHTML = 'please enter your name';
                // if(isNaN(guestName) == false)
                //     checkInNameErr.innerHTML = 'please enter name again';
                if(guestCheckFloor <= 0)
                    checkInFloorErr.innerHTML = 'invalid floor';
                if(guestCheckFloor > row)
                    checkInFloorErr.innerHTML = 'invalid floor';
                if(guestCheckRoom <= 0)
                    checkInRoomErr.innerHTML = 'invalid Room';
                if(guestCheckRoom > col )
                    checkInRoomErr.innerHTML = 'invalid Room';

            }else{
                checkInFloorErr.innerHTML = '';
                checkInRoomErr.innerHTML = '';
                checkInNameErr.innerHTML = '';
                

                if(myHotel[guestCheckFloor-1][guestCheckRoom-1] != null){
                   alert('Not available')
                }
                else{
                    for(i = 0 ;i <= row ; i++){
                        for(j = 0 ; j <= col ; j++){
                            if(i == guestCheckFloor && j == guestCheckRoom){
                                myHotel[i-1][j-1] = guestName;
                            }
                                        
                        }
                    }
                    alert('Successfully Check In');
                    
                    // var storeRow = document.getElementById('detailFloor');
                    storeRow.innerHTML = ''; 
                    storeRow.style.fontSize = '20px';
                    for(i = 0 ; i < row ; i++){
                        storeRow.innerHTML += `<br> Floor `+eval(i+1)+ ` :`;
                        for(j = 0 ; j < col ; j++){
                            storeRow.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` +  `${myHotel[i][j]}`;
                        }
                        storeRow.innerHTML += '<br>';
                    }
                    checkInFloor_1.value = '';
                    checkInRoom_1.value = '';
                    guestName_1.value = '';

                }
            }
            
        } 

    }
    
    // Save checkout
        document.getElementById('btnSaveCheckOut').onclick = function() {
            let checkOutFloor = document.getElementById('checkOutFloor').value;
            let checkOutRoom = document.getElementById('checkOutRoom').value;
            
            checkOutFloorErr.innerHTML = '';
            checkOutRoomErr.innerHTML = '';

            let guestCheckFloor = Number(checkOutFloor);
            let guestCheckRoom = Number(checkOutRoom);

            if (checkOutFloor == '' || checkOutRoom == '' || isNaN(checkOutFloor) || isNaN(checkOutRoom) || 
                guestCheckFloor <= 0 || guestCheckFloor > row || guestCheckRoom <= 0 || guestCheckRoom > col) {

                if (checkOutFloor == '')
                    checkOutFloorErr.innerHTML = 'please enter floor';
                if (checkOutRoom == '')
                    checkOutRoomErr.innerHTML = 'please enter room';
                if (isNaN(checkOutFloor) || guestCheckFloor <= 0 || guestCheckFloor > row)
                    checkOutFloorErr.innerHTML = 'invalid floor';
                if (isNaN(checkOutRoom) || guestCheckRoom <= 0 || guestCheckRoom > col)
                    checkOutRoomErr.innerHTML = 'invalid room';
                // if (guestCheckFloor > row)
                //     checkOutFloorErr.innerHTML = 'invalid floor';
                // if (guestCheckRoom > col)
                //     checkOutRoomErr.innerHTML = 'invalid room';

            } else {
                checkOutFloorErr.innerHTML = '';
                checkOutRoomErr.innerHTML = '';

                if (myHotel[guestCheckFloor - 1][guestCheckRoom - 1] == null) {
                    alert('Room is empty');
                } else {
                    
                    myHotel[guestCheckFloor - 1][guestCheckRoom - 1] = null;

                    alert('Successfully Checked Out');

                    
                    var storeRow = document.getElementById('detailFloor');
                    storeRow.innerHTML = ''; 
                    storeRow.style.fontSize = '20px';
                    
                    for (i = 0; i < row; i++) {
                        storeRow.innerHTML += `<br> Floor ` + eval(i+1) + ` :`;
                        for (j = 0; j < col; j++) {
                            storeRow.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` + `${myHotel[i][j]}`;
                        }
                        storeRow.innerHTML += '<br>';
                    }

                    document.getElementById('checkOutFloor').value = '';
                    document.getElementById('checkOutRoom').value = '';
                }
            }
        };

}

function btnCheckIn(){
    document.getElementById('showCheckOut').style.display = 'none';
    document.getElementById('showCheckIn').style.display = 'block';
}
function btnCheckOut(){
    document.getElementById('showCheckIn').style.display = 'none';
    document.getElementById('showCheckOut').style.display = 'block';
}
function btnExit(){
    document.getElementById('showCheckIn').style.display = 'none';
    document.getElementById('showCheckOut').style.display = 'none';
    document.getElementById('show-hotel').style.display = 'none';
    document.getElementById('hotelText').style.display = 'none';
    document.getElementById('exitText').style.display = 'block';
}
