//Type your code here


///code for business search start


var gblResponseBusinessSearch1;
var gblResponseBusinessSearch;
var gblResponse;
var gblResponseBusinessSearchForSort;
var gblFirstTime=false;


function searchDataBusiness22(gblResponse)
{
  
 var tempArray=[];
for(var i=0;i<gblResponse.businessBbj.length;i++)
{
  
   tempArray.push(gblResponse.businessBbj[i].BusinessDTO);
  
 }
    //alert("tempArray i am looking today"+JSON.stringify(tempArray));

var b=searchPage.searchTxtbox.text.toLowerCase();

//alert(b);
   //start 20
    var arrofB=b.split(',');
    var testArrCombine=[];
    for(var l=0;l<arrofB.length;l++ )
      {
        
        var newB=arrofB[l];
        newB=newB.trim();
                        var myRegExp="^"+newB;
			var testArr=hasTagBusiness22(tempArray,myRegExp,newB);
        testArrCombine=testArrCombine.concat(testArr);
      }
   //start 20 noon
    
   testArrCombine= removeDuplicateBusiness(testArrCombine,'businessId');
    testArrCombine.pop();
   // alert("testArrCombine after"+JSON.stringify(testArrCombine));
    
    //end jan 20 noon
    searchjan20(testArrCombine);
    //end 20

//var myRegExp="^"+b;
//hasTagBusiness22(tempArray,myRegExp,b);

}

var hasTagBusiness22 = function(tempArray,myRegExp,b) {
  try
    {
   var searchres=[];
  var i = null;
   //alert("after tempArray"+JSON.stringify(tempArray));
  for (i = 0; tempArray.length > i; i += 1) {
  
   //}
    //alert("innn");
     var n=tempArray[i].address1.toLowerCase().search(b);
       if ((tempArray[i].businessName.toLowerCase().match(myRegExp))||(n!=-1)) {
       searchres.push(tempArray[i]);
  }
  }
  
  
    }catch(e)
      {
        alert(JSON.stringify(e));
      }
  return searchres;
}
 function searchjan20(searchres)
{
  try{
// alert("searchres"+JSON.stringify(searchres));
var searchedresp={};
searchedresp.businessBbj=[];
for(var j=0;j<searchres.length;j++)
{
   var testobj={"BusinessDTO":searchres[j]};
   searchedresp.businessBbj.push(testobj);
}
//alert("searchedresp"+JSON.stringify(searchedresp));

  setSegDatasearchBusiness(searchedresp);
gblResponseBusinessSearch1=searchedresp;
      gblResponseBusinessSearchForSort=searchedresp;
    }catch(e)
      {
        
        alert("the bug is "+e);
      }
}


///////start merin




//code for business search end




function lenchek22(gblResponseBusinessSearch)
{
  try{
// alert("here");
  if(searchPage.searchTxtbox.text.length=="0.0")
    
    
    {
      //alert("zero"+gblIsVol);
       if(gblIsVol==true)
    {
    setSegData(gblResponse);
      
    }else
      {
        
        setSegDatasearchBusiness(gblResponseBusinessSearch);
      }
      
    }
  }catch(err)
    {
      
      alert("err"+JSON.stringify(err));
    }

}



///volunteer search start nov 22



//code for volunteer searc start


//Type your code here


function searchData21()
{
//alert("searchData21"+JSON.stringify(gblResponse)); 
  try{
var tempArray=[];
for(var i=0;i<gblResponse.volunteersList.length;i++)
{
  
   tempArray.push(gblResponse.volunteersList[i].VolunteersDTO[0]);
  
 }
    //alert("tempArray"+JSON.stringify(tempArray));

var b=searchPage.searchTxtbox.text.toLowerCase();

//alert(b);
    //start 18
    var arrofB=b.split(',');
    var testArrCombine=[];
    for(var l=0;l<arrofB.length;l++ )
      {
        
        var newB=arrofB[l];
         newB=newB.trim();
                        var myRegExp="^"+newB;
			var testArr=hasTag21(tempArray,myRegExp,newB);
        testArrCombine=testArrCombine.concat(testArr);
      }
     //start 20 noon
    
   testArrCombine= removeDuplicateVolunteer(testArrCombine,'volunteerId');
    testArrCombine.pop();
   // alert("testArrCombine after"+JSON.stringify(testArrCombine));
    
    //end jan 20 noon
    searchjan18(testArrCombine);
    //end 18


  
}catch(e)
  {
    alert("error1"+e);
    
  }
}

var hasTag21 = function(tempArray,myRegExp,b) {
  //try{
   var searchres=[];
  var i = null;
// alert("after tempArray "+JSON.stringify(tempArray));
  for (i = 0; tempArray.length > i; i += 1) {
  //start merin
    
    if(tempArray[i].skillSet==null)
      {
        var n=tempArray[i].address.toLowerCase().search(b);
               if (tempArray[i].firstName.toLowerCase().match(myRegExp)||(n!=-1)||(tempArray[i].lastName.toLowerCase().match(myRegExp))) {
       searchres.push(tempArray[i]);
  }

        
      }else
        {
     for(var j=0;j<tempArray[i].skillSet.length;j++)
     {
     var n1 = tempArray[i].address.toLowerCase().search(b);
       if(( tempArray[i].skillSet[j].SkillsDTO.skillName.toLowerCase().match(myRegExp))||(tempArray[i].firstName.toLowerCase().match(myRegExp))||(n1!=-1)||(tempArray[i].lastName.toLowerCase().match(myRegExp))){
searchres.push(tempArray[i]);
break;
         
       
       }  
     
     }
        }
     //end merin

}
  return searchres;
  }
   
 function searchjan18(searchres)
  {
    try
      {
 //alert("searchres before  modifying"+JSON.stringify(searchres));
var searchedresp={};
searchedresp.volunteersList=[];
    var arr=[];
for(var k=0;k<searchres.length;k++)
{
   arr.push(searchres[k]);
  // alert("arr before  modifying"+JSON.stringify(arr));
   var testobj={"VolunteersDTO":arr};
   arr=[];
   searchedresp.volunteersList.push(testobj);
}
   // searchedresp.volunteersList.push(testobj);
//alert("searchedresp"+JSON.stringify(searchedresp));
  setSegData(searchedresp);
    gblForVolSort=searchedresp;
}catch(e)
  {
    
     alert("error2222"+e);
  }
}
        





///code for volunteersearch end











////volunteer search end nov 22
