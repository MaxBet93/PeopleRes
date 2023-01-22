
const years = prompt("Введите рік рождения");
const live = prompt("В якому місті ви живете");
const sport = prompt("Ваш улюблуений вид спорту");

let sprortRes;
let liveRes;

let yearsRes = ("Вам " + (2023 - years) + " років. ");


if(sport == "Бокс")
{
  sprortRes = "Круто! Хочеш стат як Усик."
}
else if(sport == "Футбол")
{
  sprortRes = "Круто! Хочеш стат як Шевченко."
}
else if(sport !== null)
{
  sprortRes = ("Круто! Займаєшся " + sport +"ом."); 
}
else
{
  sprortRes = null;
}


if(live === "Київ")
{
  liveRes = (" Ви прожиєте в  " + live + " - це столиця.");
}
else if (live !== null )
{
  liveRes = ("Ви проживаєте в місті " + live);
}

if ( live == null )
{
  alert("Виникла помилка ви не вказали своє місто");
}
else if(sport == null ){
  alert("Виникла помилка ви не вказали вид спорту");
}
else if(years == null){
  alert("Виникла помилка ви не вказали рік народження");
}
else
{
alert(yearsRes + " " + liveRes + " " + sprortRes);
}
 