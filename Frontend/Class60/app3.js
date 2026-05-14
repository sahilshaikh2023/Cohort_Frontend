       function LoginUser(user ,cb){

              console.log("Login User .....");
              
              setTimeout(()=>{

                     cb({id:1122, name:"sahi"});

              },2000 )

       }

       function FetchPermission(id, cb){
              console.log("Fetching the Permission");
              

              setTimeout(()=>{
                     cb(["read", "write" , "delete"]);

              },3000)

       }
       function LoadDashboard(Permission ,cb){
              console.log("Fetching the loader ");
              
              setTimeout(() => {
                     cb();
                     
              }, 2000);
       }

       LoginUser( "shaikh", function(details){
              FetchPermission(details.id, function(Permission){
                     LoadDashboard(Permission, function(){
                            console.log("✅fetch the Dashboard");
                            
                     })
              })
       })