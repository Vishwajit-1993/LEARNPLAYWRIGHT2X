console.log(a);
let a = 10;
//referece error: Cannot access 'a' before initialization

{
  //----TDZ For a starts here----//Temporal Dead Zone
  /*  console.log(a);
    score = 50;
    typeof a;
    TDZ for a ends here */

  let a = 20;
  console.log(a);
}
