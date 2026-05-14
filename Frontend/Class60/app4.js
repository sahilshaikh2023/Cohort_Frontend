
function userprofiledetail(username , cb)
{
            console.log(`fetching data of username  : ${username}` );
       setTimeout( ()=>{
         
              cb({id : 12,username , age: 15 , email : "huihui@hui.com"});
              
       },2000);

}

function sarePostNikalo(id ,cb)
{
            console.log(`fetching all post `);
       setTimeout(() => {
              cb( {_id : id  ,  posts : ["post1", "post2", "post3"]} );
       }, 3000);
}

function savePostnikalo(id , cb)
{
       console.log("fetching the save post");
       setTimeout(() => {

              cb({_id:id , save_post : ["savepost1", "savepost2" , "savepost3"] });
              
       }, 4000);
       
}
userprofiledetail("sahil", function(data)
{
       console.log(data);
       sarePostNikalo( data.id , function(post){

              console.log(post);
              savePostnikalo(data.id , function(save){
                     console.log(save)
              })
       })
})
