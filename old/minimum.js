
var minimumTime = function(times, totalTrips) {
    let ans=50
    let low=0
    let high=ans
    let mid=parseInt((low+high)/2)
    while(low!=high){
       time=times.slice()
       let trips=0
        for(let i=0;i<time.length;i++){
            trips+=parseInt(time[i]/mid)
            }
            console.log("trips",trips)
    if(trips>totalTrips){
        console.log("trips are more")
        low=mid+1
    }
   else if(trips==totalTrips){
       console.log("equal")
       high=mid
   }
   else if(trips<totalTrips){
       console.log("trips are less")
       high=mid-1
   }
   mid=parseInt((low+high)/2)
   console.log(low,mid,high)
   ans=mid
    }
     return ans
};

console.log(minimumTime([5,10,10],9))