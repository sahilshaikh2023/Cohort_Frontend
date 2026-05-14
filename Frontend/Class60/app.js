////////////////////////////////////////////////////////////////////////////
//
//
//            what is CallBack     
//             it is function , which run at  the time when the function is did somthing else in response to an event or after some operation completes.
//       
//          A callback function is a function that is passed as an
//           argument to another function,
//          and is executed at a later time—often
///////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////
//
//                  Exercise :1
//
/////////////////////////////////////////////////////////////////////////////////


function AfterDelay(time , cb)
{
       setTimeout(() => {
           
              cb();       
       }, time);
}

AfterDelay(3000,function(){
          console.log("callback executed");

})