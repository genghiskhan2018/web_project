type = ['','info','success','warning','danger'];

demo = {
    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },


    initDashboardPageCharts: function(){
        /* ----------==========     Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['6am', '7am', '8am', '9am', '3pm', '4pm', '5pm', '6pm','7pm','8pm'],
            series: [
                [13, 20, 25, 20, 18, 24, 22, 24, 30, 40, 26]
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 43, 
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }
        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        md.startAnimationForLineChart(completedTasksChart);
    }
}
