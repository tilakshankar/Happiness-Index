function test()
{
    var data= document.getElementsByName("meet");
    var val;
    

    for(var i=0;i<data.length;i++)
    {
        if(data[i].checked)
        {
            val=localStorage.setItem("Question1",data[i].value);
        }
      }

    var store=localStorage.getItem("Question1",val);



    var data1=document.getElementsByName("involved");

    for(var i=0;i<data1.length;i++)
    {
        if(data1[i].checked)
        {
            val=localStorage.setItem("Question2",data1[i].value);
        }
      }

    var store1=localStorage.getItem("Question2",val);

    
    }

function results()
{
    var val;
    var store= localStorage.getItem("Question1",val);
    var store1= localStorage.getItem("Question2",val);
       
    var result= store*store1;

    document.write("Happiness Index is:"+ result);

}