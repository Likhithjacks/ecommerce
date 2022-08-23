function stillplay(arr){
  if(arr[0][0]=="X" && arr[1][0]=="X" && arr[2][0]=="X"){
    console.log("player 1 win")
      return false
    
  }
  else if(arr[0][0]=="X" && arr[0][1]=="X" && arr[0][2]=="X"){
      console.log("player 1 win")
      return false
  }
  else if(arr[1][0]=="X" && arr[1][1]=="X" && arr[1][2]=="X"){
      console.log("player 1 win")
      return false
  }
  else if(arr[2][0]=="X" && arr[2][1]=="X" && arr[2][2]=="X"){
      console.log("player 1 win")
      return false
  }
  else if(arr[0][2]=="X" && arr[1][2]=="X" && arr[2][2]=="X"){
      console.log("player 1 win")
      return false
  }
  else if(arr[0][1]=="X" && arr[1][1]=="X" && arr[2][1]=="X"){
      console.log("player 1 win")
      return false
  }
  else if(arr[0][0]=="X" && arr[1][1]=="X" && arr[2][2]=="X"){
      console.log("player 1 win")
      return false
  }
  else if(arr[0][2]=="X" && arr[1][1]=="X" && arr[2][0]=="X"){
      console.log("player 1 win")
      return false
  }
  else if(arr[0][0]=="O" && arr[1][0]=="O" && arr[2][0]=="O"){
     console.log("player 2 win")
      return false
  }
  else if(arr[0][0]=="O" && arr[0][1]=="O" && arr[0][2]=="O"){
      console.log("player 2 win")
      return false
  }
  else if(arr[1][0]=="O" && arr[1][1]=="O" && arr[1][2]=="O"){
      console.log("player 2 win")
      return false
  }
  else if(arr[2][0]=="O" && arr[2][1]=="O" && arr[2][2]=="O"){
      console.log("player 2 win")
      return false
  }
  else if(arr[0][2]=="O" && arr[1][2]=="O" && arr[2][2]=="O"){
      console.log("player 2 win")
      return false
  }
  else if(arr[0][1]=="O" && arr[1][1]=="O" && arr[2][1]=="O"){
      console.log("player 2 win")
      return false
  }
  else if(arr[0][0]=="O" && arr[1][1]=="O" && arr[2][2]=="O"){
      console.log("player 2 win")
      return false
  }
  else if(arr[0][2]=="O" && arr[1][1]=="O" && arr[2][0]=="O"){
      console.log("player 2 win")
      return false
  }

  else{
      return true
  }
}
function playduel(arr){
  while(stillplay(arr) && turn<=8){
      playing=["X","O"]
      players=["player1","player2"]

      console.log(`its ${players[turn%2]} turn`)
      let place=prompt("enter position 1-9")
     if(place<=9 && place>=1){
      insert=playing[turn%2]
      if(place==1 && arr[0][0]==0){
          arr[0][0]=insert
        turn++
      }
      else if(place==2 && arr[0][1]==0){
          arr[0][1]=insert
        turn++
      }
      else if(place==3 && arr[0][2]==0){
          arr[0][2]=insert
        turn++
      }
      else if(place==4 && arr[1][0]==0){
          arr[1][0]=insert
        turn++
      }
      else if(place==5 && arr[1][1]==0){
          arr[1][1]=insert
        turn++
      }
      else if(place==6 && arr[1][2]==0){
          arr[1][2]=insert
        turn++
      }
      else if(place==7 && arr[2][0]==0){
          arr[2][0]=insert
        turn++
      }
      else if(place==8 && arr[2][1]==0){
          arr[2][1]=insert
        turn++
      }
      else if(place==9 && arr[2][2]==0){
          arr[2][2]=insert
        turn++
      }
       else{
         console.log("invalid place")
       }

     }
     else{
      console.log("invalid place")
     }
    
    console.log(arr)
  }
if(turn>8)
console.log("Draw")

}
function playsolo(arr){
mark=new Set()
  while(stillplay(arr) && mark.size!=8){
   
      playing=["X","O"]
      players=["player1","computers"]

      console.log(`its ${players[turn%2]} turn`)
      if(turn%2==0){
      var place=prompt("enter position 1-9")
      }
      else{
        
        while(mark.has(place)){
          var place=Math.floor(Math.random()*9)
          }
       
      }
    mark.add(place)
     if(place<=9 && place>=1){
      insert=playing[turn%2]
      if(place==1 && arr[0][0]==0){
          arr[0][0]=insert
        turn++
      }
      else if(place==2 && arr[0][1]==0){
          arr[0][1]=insert
        turn++
      }
      else if(place==3 && arr[0][2]==0){
          arr[0][2]=insert
        turn++
      }
      else if(place==4 && arr[1][0]==0){
          arr[1][0]=insert
        turn++
      }
      else if(place==5 && arr[1][1]==0){
          arr[1][1]=insert
        turn++
      }
      else if(place==6 && arr[1][2]==0){
          arr[1][2]=insert
        turn++
      }
      else if(place==7 && arr[2][0]==0){
          arr[2][0]=insert
        turn++
      }
      else if(place==8 && arr[2][1]==0){
          arr[2][1]=insert
        turn++
      }
      else if(place==9 && arr[2][2]==0){
          arr[2][2]=insert
        turn++
      }
       else{
         console.log("invalid place")
       }
       console.log(arr)

     }
        
     else{
      console.log("invalid place")
     }
    
  }
    if(mark.size>=8){
      console.log("Draw")
    }

  
}
function startgame(arr){
console.log("[1,2,3],[4,5,6],[7,8,9] these are the values of places")
  console.log("press A for 2 players")
  console.log("press B for 1 player")
  button=prompt("enter input A or B")
  if(button=="A"){
      playduel(arr)
  }
  else if(button=="B"){
      playsolo(arr)
  }
else{
  console.log("wrong input")
  return startgame(arr)
}

}
var turn=0
arr=[[0,0,0],[0,0,0],[0,0,0]]
startgame(arr)