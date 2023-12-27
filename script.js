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
  var total = 7; // Assuming there are 7 questions
  var store = parseInt(localStorage.getItem("Question1")) || 0;
  var store1 = parseInt(localStorage.getItem("Question2")) || 0;
  var store2 = parseInt(localStorage.getItem("Question3")) || 0;
  var store3 = parseInt(localStorage.getItem("Question4")) || 0;
  var store4 = parseInt(localStorage.getItem("Question5")) || 0;
  var store5 = parseInt(localStorage.getItem("Question6")) || 0;
  var store6 = parseInt(localStorage.getItem("Question7")) || 0;
  
  var sum = store + store1 + store2 + store3 + store4 + store5 + store6;
  var result = (sum * 100) / (total * 5);
  result = result.toFixed(2);

    
    
    

  
    var urlWithResult = 'result.html?result=' + encodeURIComponent(result);

    // Redirect to the new URL
    window.location.href = urlWithResult;


}

