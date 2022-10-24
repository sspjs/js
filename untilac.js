function isNum(arg){
 var args = arg;
 if (args == "" || args == null || args.length == 0)
 {
  return false;
 }
 args = args.toString();
 for (var i = 0;  i<args.length;  i++)
 {
  if ((args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9") && args.substring(i, i+1) != ".")
  {
  return false;
  }
 }
 return true;
}

function checkday(aa){
 var val = aa.value;
 var valc = val.substring(0,1);
 if(val.length>0 && val.length<3)
 {
  if(!isNum(val) || val == 0)
  {
   aa.value="";
  }
  else if( val < 1 || val > 31)
  {
   aa.value=valc;
  }
 }
 else if(val.length>2)
 {
  val = val.substring(0, 2);
  aa.value=val;
 }
}

function checkmon(aa){
 var val = aa.value;
 var valc = val.substring(0,1);
 if(val.length>0 && val.length<3)
 {
  if(!isNum(val) || val == 0)
  {
   aa.value="";
  }
  else if(val < 1 || val > 12)
  {
   aa.value=valc;
  }
 }
 else if(val.length>2)
 {
  val = val.substring(0, 2);
  aa.value=val;
 }
}

function checkyear(aa){
 var val = aa.value;
 var valc = val.substring(0,(val.length-1));
 if(val.length>0 && val.length<7)
 {
  if(!isNum(val) || val == 0)
  {
   aa.value=valc;
  }
  else if(val < 1 || val>275759)
  {
   aa.value="";
  }
 }
 else if(val.length>4)
 {
  aa.value=valc;
 }
}

function checkleapyear(datea){
 if(datea.getYear()%4 == 0)
 {
  if(datea.getYear()% 10 != 0)
  {
   return true;
  }
  else
  {
   if(datea.getYear()% 400 == 0)
    return true;
   else
    return false;
  }
 }
return false;
}

function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}

function datediff(date1, date2) {
    var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
  y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();

    if (d1 < d2) {
        m1--;
        d1 += DaysInMonth(y2, m2);
    }
    if (m1 < m2) {
        y1--;
        m1 += 12;
    }
    return [y1 - y2, m1 - m2, d1 - d2];
}

function calage(){
 var curday = document.cir.len11.value;
 var curmon = document.cir.len12.value;
 var curyear = document.cir.len13.value;
 var calday = document.cir.len21.value;
 var calmon = document.cir.len22.value;
 var calyear = document.cir.len23.value;
 if(curday == "" || curmon=="" || curyear=="" || calday=="" || calmon=="" || calyear=="")
 {
  alert("Please fill all the values and then click submit button");
 } 
 else
 {
  var curd = new Date(curyear,curmon-1,curday);
  var cald = new Date(calyear,calmon-1,calday);
  var diff =  Date.UTC(curyear,curmon,curday,0,0,0)
    - Date.UTC(calyear,calmon,calday,0,0,0);

  var dife = datediff(curd,cald);
  document.cir.val.value=dife[0]+" Years "+dife[1]+" Months and "+dife[2]+" Days ";

  var secleft = diff/1000/60;
  document.cir.val3.value=secleft+" Minutes ";

  var hrsleft = secleft/60;
  document.cir.val2.value=hrsleft+" Hours ";
 
  var daysleft = hrsleft/24;
  document.cir.val1.value=daysleft+" Days "; 
  
  //alert(""+parseInt(calyear)+"--"+dife[0]+"--"+1);
  var as = parseInt(calyear)+dife[0]+1;
  var diff =  Date.UTC(as,calmon,calday,0,0,0)
    - Date.UTC(curyear,curmon,curday,0,0,0);
  var datee = diff/1000/60/60/24;
  document.cir.val4.value=datee+" Days left for your next Birthday! "; 
 }
}

function color(test){
 for(var j=7; j<12; j++)
 {
  var myI=document.getElementsByTagName("input").item(j);
  //myI.setAttribute("style",ch);
  myI.style.backgroundColor=test;
 }
}

function color1(test){
var myI=document.getElementsByTagName("table").item(0);
//myI.setAttribute("style",ch);
myI.style.backgroundColor=test;
}
