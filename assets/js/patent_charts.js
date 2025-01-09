google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

  function drawBarColors() {
      var data_colab = google.visualization.arrayToDataTable([
        ['Collaborator', 'Invention disclosures', 'Patent applications'],
        ['Majid Khorsand Vakilzadeh', 57, 28],
        ['Carl Zandén', 39, 26],
        ['Adam Tonderski', 34, 7],
        ['Christoffer Petersson', 15, 2],
        ['Andreas Falkovén', 10, 5],
        ['Fredrik Sandblom', 10, 2],
        ['Georg Hess', 7, 2],
        ['Håkan Sivencrona', 5, 3],
        ['Gabriel Rodrigues de Campos', 3, 2],
        ['William Ljungbergh', 3, 0],
        ['Carl Lindberg', 2, 1],
        ['Mina Alibeigi Nabi', 2, 2],
        ['Thomas Luvö', 2, 0],
        ['Daniel Åsljung', 1, 1],
        ['Joakim Olsson', 1, 1],
        ['Cagdas Ulas', 1, 1],
        ['Kilian Zwirglmaier', 1, 1],
        ['Joakim Johnander', 1, 0]
      ]);

      var options_colab = {
        hAxis: {
          title: 'Number of submissions',
          titleTextStyle: {color: '#607d8b'},
          gridlines: { color:'#b0bec5', count:2},
          textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
        },
        vAxis: {
          title: 'Collaborator',
          titleTextStyle: {color: '#607d8b'},
          textStyle: {
            color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true
          },
          textPosition: 'in',
          minValue: 0,
          gridlines: {
              color:'#b0bec5',
              count:5
            }
        },
        legend: {position: 'top', alignment: 'center', textStyle: {color:'#607d8b', fontName: 'Roboto', fontSize: '12'} },
        colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
        areaOpacity: 0.24,
        backgroundColor: 'transparent',
        chartArea: {
          backgroundColor: "transparent",
          width: '100%',
          height: '90%'
        },
            colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
            backgroundColor: 'transparent',
          };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div_colab'));
      chart.draw(data_colab, options_colab);

      var data_total = google.visualization.arrayToDataTable([
        ['Submissions per year', 'Invention disclosures', 'Patent applications'],
        ['2019', 11, 1],
        ['2020', 18, 12],
        ['2021', 25, 11],
        ['2022', 19, 14],
        ['2023', 15, 3],
        ['2024', 14, 4]
      ]);

      var options_total = {
        hAxis: {
          title: 'Year',
          titleTextStyle: {color: '#607d8b'},
          gridlines: { color:'#b0bec5', count:0},
          textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
        },
        vAxis: {
          title: 'Number of submissions',
          titleTextStyle: {color: '#607d8b'},
          textStyle: {
            color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true
          },
          textPosition: 'in',
          minValue: 0,
          gridlines: {
              color:'#b0bec5',
              count:5
            }
        },
        colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
        areaOpacity: 0.24,
        backgroundColor: 'transparent',
        chartArea: {
          backgroundColor: "transparent",
          width: '100%',
          height: '90%'
        },
            colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
            backgroundColor: 'transparent',

        legend: {
          position: 'none'
        }
      };
      var chart = new google.charts.Bar(document.getElementById('chart_div_total'));
      chart.draw(data_total, google.charts.Bar.convertOptions(options_total));
    }
