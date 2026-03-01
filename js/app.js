let getcategories = document.querySelectorAll('.categories');
for(var i = 0; i < getcategories.length; i++)
{
    getcategories[i].addEventListener('click',function(){
        getcategories.forEach(function(getcategory){
            getcategory.classList.remove('current');
        });
        
        this.classList.add('current');
    });
};


// Start Revenue Sources

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Return Item',     11],
          ['Direct Sales',      2],
          ['Online Sales',  2],
        ]);

        var options = {
        //   title: 'My Daily Activities',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }

// End Revenue Sources