//Type your code here
var gblForVolSort;


function skillSortedResponse(tempArray)
{
  try{
  
//  alert("received tempArray"+JSON.stringify(tempArray));
   var skillsortresp={};
skillsortresp.volunteersList=[];
    var arr=[];
for(var k=0;k<tempArray.length;k++)
{
   arr.push(tempArray[k]);
  // alert("arr before  modifying"+JSON.stringify(arr));
   var testobj={"VolunteersDTO":arr};
   arr=[];
   skillsortresp.volunteersList.push(testobj);
   }
//alert("skillsortresp"+JSON.stringify(skillsortresp));
  ///skill sorting ends here
  
  
  
  var tempArray=[];
for(var i=0;i<skillsortresp.volunteersList.length;i++)
{
//onsole.log(resp.volunteerList.length);
  tempArray.push(skillsortresp.volunteersList[i].VolunteersDTO[0]);

}
   // alert("just"+JSON.stringify(tempArray));
    function SortByName1(x,y) {
     // alert(JSON.stringify(x));
      if((x.skillSet !=null) && (y.skillSet !=null))
        {
     // alert(JSON.stringify(x));
      for(var l=0,m=0;((l<x.skillSet.length)&&(m<y.skillSet.length));l++,m++)
      {
      
        //  return ((x.skillSet[l].skillsDto.skillName == y.skillSet[l].skillsDto.skillName) ? 0 : //((x.skillSet[l].skillsDto.skillName > y.skillSet[l].skillsDto.skillName) ? 1 : -1 ));
        if((x.skillSet[l].SkillsDTO.skillName.toLowerCase() == y.skillSet[m].SkillsDTO.skillName.toLowerCase()))
        {
        
        //return 0;
        }else
        {
        
        if((x.skillSet[l].SkillsDTO.skillName.toLowerCase() > y.skillSet[m].SkillsDTO.skillName.toLowerCase()))
        {
        return 1;
        }else
        {
        
        return -1;
        }
        
        }
      
      }
          
        }
    }
tempArray.sort(SortByName1);
   // alert("after tempArray"+JSON.stringify(tempArray));
  var sortedresp={};
sortedresp.volunteersList=[];
    var arrdec3=[];
//for(var j=0;j<tempArray.length;j++)
//{
// var testobj={"VolunteersDTO":tempArray[j]};
// sortedresp.volunteersList.push(testobj);
//
  
  
  for(var k=0;k<tempArray.length;k++)
{
   arrdec3.push(tempArray[k]);
  // alert("arr before  modifying"+JSON.stringify(arr));
   var testobj={"VolunteersDTO":arrdec3};
   arrdec3=[];
    
     sortedresp.volunteersList.push(testobj);
} 
//alert("final"+JSON.stringify(sortedresp));
    
     setSegData(sortedresp);
    gblForVolSort=sortedresp;

  }catch(e)
    {
      
      alert("the error"+e);
    }
}
