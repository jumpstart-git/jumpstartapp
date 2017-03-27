

//Type your code here
var array3=[];
var gblForPred;
var locArr=[];
var businessarray3=[];
var gblForPred;


     // console.log(JSON.stringify(gblVolunteersList));


//start

 Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

 
 
 //end
function check28()
{
  try
    {
  //alert("1");
         var tempArray=[];
for(var i=0;i<gblForPred.volunteersList.length;i++)
{
  
   tempArray.push(gblForPred.volunteersList[i].VolunteersDTO[0]);
  
 }
 //alert("2");
   // console.log(JSON.stringify(tempArray));
    var firstArr=[];
   var lastArr=[];
    var skillArr=[];
      var uniqueNames18 = [];
   locArr=[];
    for(var k=0;k< tempArray.length;k++)
{
  
  firstArr.push(tempArray[k].firstName) ;
  
      locArr.push(tempArray[k].address) ;
  lastArr.push(tempArray[k].lastName) ;
      
    
  
 // alert("3");
    if(tempArray[k].skillSet==null)
      {}else
        {
          //alert("inside elae");
           var len=tempArray[k].skillSet.length;
  for(var j=0;j<len;j++)
  {
  
  skillArr.push(tempArray[k].skillSet[j].SkillsDTO.skillName);
  }
          
     
          
        }
  
  var arrayNew=[];
     //var array2 = firstArr.concat(skillArr).unique();
  arrayNew = firstArr.concat(lastArr).unique();
     array3 = arrayNew.concat(skillArr).unique();
  
 }
//alert("array3 before"+JSON.stringify(array3));
    }catch(e)
      {
        alert("the iss"+JSON.stringify(e));
      }
} 
 
function chang28()
  {
    try{
   // alert("here"+JSON.stringify(array3));
      
      
      
 //console.log(JSON.stringify(array3)); 
var str=searchPage.searchTxtbox.text;
var b=str.toLowerCase();
var myRegExp="^"+b;
var dispArr=[];
    //  alert("now");
for(var i=0;i<array3.length;i++)
  {
    
 
    
               if (array3[i].toLowerCase().match(myRegExp)) {
                 
       dispArr.push(array3[i]);
  }
    
  }
    // alert("111");
    for(var l=0;l<locArr.length;l++)
      {
        
        var result=containsWord(locArr[l].toLowerCase(),b);
        if(result==true)
          {
            
             dispArr.push(locArr[l]);
          }
        
      //  alert("his");
//            //start for address
    
//   var n=locArr[l].toLowerCase().search(b);
//         if(n!= -1)
//           {
            
//              dispArr.push(locArr[l]);
//           }
    
    
    
//     //end
        
        
      }
//alert("dispArr"+JSON.stringify(dispArr));

popu28(dispArr);
    }catch(e)
      {
        
        alert("the prob"+e);
      }
}


function popu28(dispArr)
{
//start///
// alert("before merin"+JSON.stringify(dispArr));
  var uniqueNames = [];

    for(var i in dispArr){
        if(uniqueNames.indexOf(dispArr[i]) === -1){
            uniqueNames.push(dispArr[i]);
        }
    }
  dispArr=uniqueNames;
  dispArr.pop();
 //alert("after merin"+JSON.stringify(dispArr)); 
  
  
  //end
  
  try{
  searchPage.segPredictive.widgetDataMap={

  "lblSuggestions":"lblSuggestions"
  
  };

 if (dispArr.length > 0) {
                var tempData = [];
                var lenVal = dispArr.length;
                
                for (var i = 0; i < lenVal; i++) {
                  
                  var fName=dispArr[i] ;  
                  var testobj={
    
    lblSuggestions:fName
   }
   tempData.push(testobj);
                }
   
   
   // alert(searchPage.searchTxtbox.text.length);
    if(searchPage.searchTxtbox.text.length=="0.0"){
        searchPage.segPredictive.removeAll();
         if(gblIsVol==true)
    {
    setSegData(gblResponse);
      gblForVolSort=gblResponse;
      
    }else
      {
        
        setSegDatasearchBusiness(gblResponseBusinessSearch);
        gblResponseBusinessSearchForSort=gblResponseBusinessSearch;
      }
      
      }else
        {
          
           searchPage.segPredictive.setData(tempData);
        }
}else
   {
     searchPage.segPredictive.removeAll();
   //  alert("No Matches");
     
     
   }
   
 
  
  }catch(e)
    {
      
      alert("the problem"+e);
    }
}
function containsWord(haystack, needle) {
    return (" " + haystack).indexOf(" " + needle) !== -1;
}



//end
function businessListValues()
{
// alert("1");
         var tempArray=[];
for(var i=0;i<gblForPred.businessBbj.length;i++)
{
  
   tempArray.push(gblForPred.businessBbj[i].BusinessDTO);
  
 }

  //  alert("temmm"+JSON.stringify(tempArray));
    var firstArr=[];
   // var skillArr=[];
   locArr = [];
    for(var k=0;k< tempArray.length;k++)
{
  
  firstArr.push(tempArray[k].businessName) ;
  
      locArr.push(tempArray[k].address1) ;
      
    
}

     //var array2 = firstArr.concat(skillArr).unique();
     businessarray3 =firstArr; //firstArr.concat(locArr).unique();
  
 
//alert("array3 business"+JSON.stringify(locArr));
} 




function changeBusiness()
  {
    try{
   // alert("here"+JSON.stringify(businessarray3));
      
      
      
 //console.log(JSON.stringify(array3)); 
var str=searchPage.searchTxtbox.text;
var b=str.toLowerCase();
var myRegExp="^"+b;
var dispArr=[];
for(var i=0;i<businessarray3.length;i++)
  {
    
 
    
               if (businessarray3[i].toLowerCase().match(myRegExp)) {
                 
       dispArr.push(businessarray3[i]);
  }
    
  }
     
    for(var l=0;l<locArr.length;l++)
      {
        
        var result=containsWord(locArr[l].toLowerCase(),b);
        if(result==true)
          {
            
             dispArr.push(locArr[l]);
          }
        
        
      }

popu28(dispArr);
    }catch(e)
      {
        
        alert("the prob"+e);
      }
}

