//**First Message**/
let days = new Date();
const day = d.getDay();
const sms = document.getElementById('sms');
if(day> 1 && day<3){
  msday= ('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.');
}else{
  msday = ('Welcome to the Chamber');
};
sms.innerHTML = msday;



