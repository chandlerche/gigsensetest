// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['The US', 3],
    ['Mexico', 1],
    ['Canada', 1],
    ['China', 1],
    ['Jamaica', 2]
  ]);

  // Set chart options
  var options = {
                // 'title':'How Much Pizza I Ate Last Night',
                'legend': {position: 'right', textStyle: {color: 'white', fontSize: 14}},
                 'width':600,
                 'height':500,
                 'chartArea': {left:10,top:70,width:'80%',height:'80%'},
                 'backgroundColor': 'black',
                 'is3D': false,
                 'pieHole': 0.4,
                 'titleTextStyle': {color: 'white'}};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
  chart.draw(data, options);
}