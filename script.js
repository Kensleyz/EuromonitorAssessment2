//Page loads
var shoeInView  = "Converse Chuck Taylor All Star Low";
var chartInView = "series";
var currency    = "ZAR";

const $button   = document.querySelector('#sidebar-toggle');
const $button1  = document.querySelector('#sidebar-toggle1');
const $wrapper  = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});
$button1.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});

var fontFamily = "Calibri";


function multi_series_chart(id, shoeName)
{
  CanvasJS.addColorSet("blueShades",["#34657f","#00aed9","#ff6a13","#a4123f","#653279"]);

  if(shoeName == "Converse Chuck Taylor All Star Low")
  {
    if(currency == "ZAR")
    {
      data = chuckZARLowSeries;
      symbol = "R";
    }
    else if(currency == "AUD")
    {
      data = chuckAUDLowSeries;
      symbol = "A$";
    }
    else if(currency == "UK")
    {
      data = chuckUKLowSeries;
      symbol = "£";
    }
    else if(currency == "USA")
    {
      data = chuckUSALowSeries;
      symbol = "$";
    }
  }
  else
  {
    if(currency == "ZAR")
    {
      data = chuckZARHighSeries;
      symbol = "R";
    }
    else if(currency == "AUD")
    {
      data = chuckAUDHighSeries;
      symbol = "A$";
    }
    else if(currency == "UK")
    {
      data = chuckUKHighSeries;
      symbol = "£";
    }
    else if(currency == "USA")
    {
      data = chuckUSAHighSeries;
      symbol = "$";
    }
  }

  var chart = new CanvasJS.Chart(id, 
  {
    colorSet: "blueShades",
    animationEnabled: true,
    title:{
      //text: id
      fontFamily: fontFamily
    },
    axisX: {
      interval: 1,
      valueFormatString: "0000",
      labelFontFamily: fontFamily
    },
    axisY: {
      labelFontFamily: fontFamily,
      suffix: " "+symbol,
      fontSize: 10,
      //title: "Price Range : "+currency
    },
    legend:{
      cursor: "pointer",
      fontSize: 16,
      itemclick: toggleDataSeries,
      fontFamily: fontFamily
    },
    toolTip:{
      shared: true,
      valueFormatString: "0000",
      fontFamily: fontFamily
    },
  
    data: data
  });
  chart.render();

  function toggleDataSeries(e)
  {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else
    {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  $('#Chart-headers').html('Pricing Trend For '+shoeName);
  $('#Chart-subheaders').html('Date range for series chart from 2015 to 2019');
}

function boxWhisker(id, shoeName) 
{
  CanvasJS.addColorSet("blueShades",["#34657f","#00aed9","#ff6a13","#a4123f","#653279"]);
  if(shoeName == "Converse Chuck Taylor All Star Low")
  {
    if(currency == "ZAR")
    {
      data = chuckZARLowBox;
      symbol = "R";
    }
    else if(currency == "AUD")
    {
      data = chuckAUDLowBox;
      symbol = "A$";
    }
    else if(currency == "UK")
    {
      data = chuckUKLowBox;
      symbol = "£";
    }
    else if(currency == "USA")
    {
      data = chuckUSALowBox;
      symbol = "$";
    }
  }
  else
  {
    if(currency == "ZAR")
    {
      data = chuckZARHighBox;
      symbol = "R";
    }
    else if(currency == "AUD")
    {
      data = chuckAUDHighBox;
      symbol = "A$";
    }
    else if(currency == "UK")
    {
      data = chuckUKHighBox;
      symbol = "£";
    }
    else if(currency == "USA")
    {
      data = chuckUSAHighBox;
      symbol = "$";
    }
  }
  var chart = new CanvasJS.Chart(id, {
      colorSet: "blueShades",
    animationEnabled: true,
    title:{
      //text: id
      fontFamily: fontFamily
    },
     legend:{
      fontFamily: fontFamily
     },
    axisY: {
      labelFontFamily: fontFamily,
      suffix: " "+symbol,
      fontSize: 10,
      labelFontFamily: fontFamily
    },
    data: data 
  });
  chart.render();

  $('#Chart-headers').html('Pricing Variance For '+shoeName);
  $('#Chart-subheaders').html('Date range for box and whisker chart from 2015 to 2019');
}

function bubbleChart(id, shoeName) 
{
  CanvasJS.addColorSet("blueShades",["#34657f","#00aed9","#ff6a13","#a4123f","#653279"]);
  if(shoeName == "Converse Chuck Taylor All Star Low")
  {
    if(currency == "ZAR")
    {
      data = chuckZARLowBubble;
    }
    else if(currency == "AUD")
    {
      data = chuckAUDLowBubble;
    }
    else if(currency == "UK")
    {
      data = chuckUKLowBubble;
    }
    else if(currency == "USA")
    {
      data = chuckUSALowBubble;
    }
  }
  else
  {
    if(currency == "ZAR")
    {
      data = chuckZARHighBubble;
    }
    else if(currency == "AUD")
    {
      data = chuckAUDHighBubble;
    }
    else if(currency == "UK")
    {
      data = chuckUKHighBubble;
    }
    else if(currency == "USA")
    {
      data = chuckUSAHighBubble;
    }
  }
  var chart = new CanvasJS.Chart(id, {
    colorSet: "blueShades",
    animationEnabled: true,
    zoomEnabled: true,
    theme: "light2",
    title:{
      fontFamily: fontFamily
    },
    legend:{
      fontFamily: fontFamily
     },
    axisX: {
      gridThickness: 1,
      labelFontFamily: fontFamily
    },
    axisY:{
      interval: 1,
      valueFormatString: "0000",
      labelFontFamily: fontFamily
    },
    data: data
  });
  chart.render();

  $('#Chart-headers').html('Price Point Tally For '+shoeName);
  $('#Chart-subheaders').html('Date range for bubble chart from 2015 to 2019');
}

window.onload = function () {
  multi_series_chart('chartContainer', shoeInView);
  $wrapper.classList.toggle('toggled');
};

function selectedShoe(shoeName)
{
  shoeInView  = shoeName;

  displayChart(chartInView);
}

function selectedCurrecy()
{  
  currency  = $('#exchangeRateVal').val();;

  displayChart(chartInView);
}


function displayChart(chartName)
{
  chartInView = chartName;

  if(chartInView == "series")
  {
    multi_series_chart('chartContainer', shoeInView);
  } 
  else if(chartInView == "box")
  {
    boxWhisker('chartContainer', shoeInView);
  }
  else if(chartInView == "bubble")
  {
    bubbleChart('chartContainer', shoeInView);
  }
  if($("#wrapper").hasClass("toggled"))
  {
    $wrapper.classList.toggle('toggled');
  }
}

