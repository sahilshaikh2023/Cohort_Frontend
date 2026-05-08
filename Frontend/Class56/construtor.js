class remote {

       constructor( product , price , color)
       {
              this.product = product;
              this. price = price ;
              this.color = color;
       }

       poweron()
       {
              console.log("Machine is in now ");
       
       }

       poweroff ()
       {
              console.log("machine is off");
       }
}

let remote1 = new remote("google" , 2300 , "grey");
let remote2 = new remote("microsoft" , 5500 , "green");