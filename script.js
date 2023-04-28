function test()
{
    var data= document.getElementsByName("meet");
    var val;
    
    // Question No.1
    for(var i=0;i<data.length;i++)
    {
        if(data[i].checked)
        {
            val=localStorage.setItem("Question1",data[i].value);
        }
      }

    var store=localStorage.getItem("Question1",val);


    // Question No.2
    var data1=document.getElementsByName("involved");

    for(var i=0;i<data1.length;i++)
    {
        if(data1[i].checked)
        {
            val=localStorage.setItem("Question2",data1[i].value);
        }
      }

    var store1=localStorage.getItem("Question2",val);


    // Question No.3
    var data2= document.getElementsByName("discussed");
    

    for(var i=0;i<data2.length;i++)
    {
        if(data2[i].checked)
        {
            val=localStorage.setItem("Question3",data2[i].value);
        }
      }

    var store2=localStorage.getItem("Question3",val);

    // Question No.4
    var data3= document.getElementsByName("name");
    

    for(var i=0;i<data3.length;i++)
    {
        if(data3[i].checked)
        {
            val=localStorage.setItem("Question4",data3[i].value);
        }
      }

    var store3=localStorage.getItem("Question4",val);

    // Question No.5

    var data4= document.getElementsByName("fundraising");
    

    for(var i=0;i<data4.length;i++)
    {
        if(data4[i].checked)
        {
            val=localStorage.setItem("Question5",data4[i].value);
        }
      }

    var store4=localStorage.getItem("Question5",val);

    // Question No.6

    var data5= document.getElementsByName("visited");
    

    for(var i=0;i<data5.length;i++)
    {
        if(data5[i].checked)
        {
            val=localStorage.setItem("Question6",data5[i].value);
        }
      }

    var store5=localStorage.getItem("Question6",val);

    // Question No.7


    var data6= document.getElementsByName("bruh");
    

    for(var i=0;i<data6.length;i++)
    {
        if(data6[i].checked)
        {
            val=localStorage.setItem("Question7",data6[i].value);
        }
      }

    var store6=localStorage.getItem("Question7",val);






    
    }

function results()
{
    var val;
    var store= localStorage.getItem("Question1",val);
    var store1= localStorage.getItem("Question2",val);
    var store2= localStorage.getItem("Question3",val);
    var store3=localStorage.getItem("Question4",val);
    var store4=localStorage.getItem("Question5",val);
    var store5=localStorage.getItem("Question6",val);
    var store6=localStorage.getItem("Question7",val);

    var total=7;
       
    var result= (store*0.2+store1*0.2+store2*0.2+store3*0.2+store4*0.2+store5*0.2+store6*0.2)*100 / total;

    document.write("Happiness Index is:\n"+ result+"%);


}
