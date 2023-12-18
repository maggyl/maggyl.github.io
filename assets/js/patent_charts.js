google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

  function drawBarColors() {
      var data_colab = google.visualization.arrayToDataTable([
        ['Collaborator', 'Invention disclosures', 'Patent applications'],
        ['Majid Khorsand Vakilzadeh', 52, 28],
        ['Carl Zandén', 39, 26],
        ['Adam Tonderski', 25, 5],
        ['Christoffer Petersson', 13, 2],
        ['Andreas Falkovén', 10, 5],
        ['Håkan Sivencrona', 5, 3],
        ['Fredrik Sandblom', 4, 2],
        ['Gabriel Rodrigues de Campos', 2, 2],
        ['Carl Lindberg', 2, 1],
        ['Mina Alibeigi Nabi', 2, 2],
        ['Georg Hess', 2, 0],
        ['Joakim Johnander', 1, 0],
        ['Joakim Olsson', 1, 1],
        ['Cagdas Ulas', 1, 1],
        ['Kilian Zwirglmaier', 1, 1],
        ['Daniel Åsljung', 1, 1],
        ['William Ljungbergh', 0, 0]
      ]);

      var options_colab = {
        //title: 'Submissions per collaborator',
        //backgroundColor: '#616B73',
        bars: 'horizontal',
        chartArea: {
          width: '80%',
          height: '80%'
        },
        hAxis: {
          title: 'Number of submissions',
          minValue: 0,
        },
        legend: {
          position: 'top'
        },
        vAxis: {
          title: 'Collaborator',
          textPosition: 'in'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div_colab'));
      chart.draw(data_colab, options_colab);

      var data_total = google.visualization.arrayToDataTable([
        ['Submissions per year', 'Invention disclosures', 'Patent applications'],
        ['2019', 11, 1],
        ['2020', 18, 12],
        ['2021', 25, 11],
        ['2022', 19, 14],
        ['2023', 14, 1]
      ]);

      var options_total = {
        //title: 'Submissions per collaborator',
        //backgroundColor: '#616B73',
        chartArea: {
          width: '95%',
          height: '80%',
          //backgroundColor: '#616B73'
        },
        hAxis: {
          title: 'Year'
        },
        vAxis: {
          title: 'Number of submissions'
        },
        legend: {
          position: 'none'
        }
      };
      var chart = new google.charts.Bar(document.getElementById('chart_div_total'));
      chart.draw(data_total, google.charts.Bar.convertOptions(options_total));
    }
