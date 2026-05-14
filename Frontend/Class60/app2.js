///////////////////////////////////////////////////
//
//            exercise 2 :
//
//
//
/////////////////////////////////////////////////////////


function InstagramSeDataLao( username, cb)
{
       console.log("fetching UniqueID");
       
       setTimeout(() => {

              cb({uniqueid :2225,username :"shaikh" })

              
       }, 3000);
}

function MetaSeDataLao( uniqueid, cb){
       console.log("Fetching  Images");
       
       setTimeout(() => {
              cb(["img1", "img2"]);

       }, 4000);
}

InstagramSeDataLao("harsh",function(data){
                     MetaSeDataLao(data.uniqueid,function(image){
                            console.log(image);
                     } )
})