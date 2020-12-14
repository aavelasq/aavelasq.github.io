function timeline() {
    Highcharts.chart('timelineChart', {
        chart: {
            zoomType: 'x',
            type: 'timeline'
        },
        xAxis: {
            type: 'datetime',
            visible: true
        },
        yAxis: {
            gridLineWidth: 1,
            title: null,
            labels: {
                enabled: false
            }
        },
        title: {
            text: "K-Pop's Major Achievements over the Past Decade in the US"
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/Timeline_of_K-pop_at_Billboard">Wikipedia</a>'
        },
        tooltip: {
            style: {
                width: 200
            }
        },
        series: [{
            dataLabels: {
                alternate: true,
                allowOverlap: true,
                format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                    '{point.x:%d %b %Y}</span><br/>{point.label}',
                width: 100
            },
            marker: {
                symbol: 'circle'
            },
            data: [{
                x: Date.UTC(2009, 3, 4),
                color: '#c7a84c',
                name: '1st Album on Billboard 200 Chart',
                label: '1st Album on Billboard 200 Chart',
                description: "BoA's BoA charts at #127"
            }, {
                x: Date.UTC(2012, 7),
                color: '#7a6a36',
                name: '1st YouTube video goes viral',
                label: '1st YouTube video goes viral',
                description: "Psy's Gangnam Style goes viral, attracting attention from general public in the US"
            }, {
                x: Date.UTC(2012, 9, 17),
                color: '#c7a84c',
                name: '1st U.S. K-pop Convention and Concert',
                label: '1st U.S. K-pop Convention and Concert',
                description: "KCON first held in Los Angeles in 2012"
            }, {
                x: Date.UTC(2015, 2, 5),
                color: '#7a6a36',
                name: 'Largest Album Sales in US to Date',
                label: 'Largest Album Sales in US to Date',
                description: "EXO's EXODUS sells 6,000 copies according to Nielsen"
            }, {
                x: Date.UTC(2017, 1, 15),
                color: '#c7a84c',
                name: '1st Group Tops iTunes Top Songs chart',
                label: '1st Group Tops iTunes Top Songs chart',
                description: "BTS's Spring Day tops iTunes Top Songs Chart"
            }, {
                x: Date.UTC(2019, 9, 5),
                color: '#7a6a36',
                name: '1st K-pop Artists Hold Initial Debut in U.S.',
                label: '1st K-pop artists Hold Initial Debut in U.S.',
                description: "SuperM releases debut album in the US"
            }, {
                x: Date.UTC(2020, 7, 31),
                color: '#c7a84c',
                name: '1st #1 on Billboard Hot 100 chart',
                label: '1st #1 on Billboard Hot 100 chart',
                description: "BTS's Dynamite hits #1 on Billboard Hot 100 Chart"
            }, ]
        }],
        credits: false
    });
}

function boxplot() {
    Highcharts.chart('boxPlot', {
        chart: {
            type: 'boxplot'
        },
        title: {
            text: "Distribution of K-Pop Albums' Peak Positions"
        },
        subtitle: {
			text: "According to Billboard's Top Current Album Chart (2011-2020)",
		},
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017',
                    '2018',
                    '2019',
                    '2020'],
            title: {
                text: 'Year'
            }
        },
    
        yAxis: {
            title: {
                text: 'Peak Position Number'
            },
            reversed: true,
            min: 1,
            max: 200
        },
    
        series: [{
            name: 'Peak Position',
            color: '#c7a84c',
            data: [
                // min 25th median 75th max
                [192, 192, 192, 192, 192],
                [112, 113, 114, 127, 141],
                [153, 161, 169.5, 176, 179],
                [95, 100, 133.0, 169, 197],
                [68, 75, 83.0, 90, 98],
                [20, 20, 20, 20, 20],
                [5, 37, 69.5, 81, 97],
                [1, 14, 49.0, 68, 100],
                [1, 10, 53, 84, 96],
                [1, 3, 27, 76, 100]
            ],
            tooltip: {
                headerFormat: '<em>Peak Positions in {point.key}</em><br/>',
                pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Minimum: {point.low}<br/>Lower quartile: {point.q1}<br/>Median: {point.median}<br/>Upper quartile: {point.q3}<br/>Maximum: {point.high}<br/>'
            }
        }, ],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true
                }
            },
        },
        credits: false
    });
}

function radarchart(){
    Highcharts.chart('radarChart', {
        chart: {
            polar: true,
            type: 'area'
        },
    
        title: {
            text: "Averages of Music Genres' Audio Features"
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        xAxis: {
            // five features
            categories: ['Danceability', 'Energy', 'Liveness', 'Valence', 'Acousticness'],
            tickmarkPlacement: 'on',
        },
        yAxis: {
            min: 0,
        },
        series: [{
            name: 'K-pop',
            data: [0.65, 0.73, 0.19, 0.55, 0.25],
            pointPlacement: 'on',
            color: '#c7a84c',
            fillOpacity: 0.1
        },{
            name: 'Rock',
            data: [0.5, 0.74, 0.19, 0.52, 0.14],
            pointPlacement: 'on',
            color: '#6b5e31',
            fillOpacity: 0.1
        },
        {
            name: 'Hip-Hop',
            data: [0.75, 0.65, 0.18, 0.54, 0.14],
            pointPlacement: 'on',
            color: '#a17c06',
            fillOpacity: 0.1
        },
        {
            name: 'Pop',
            data: [0.68, 0.62, 0.16, 0.52, 0.25],
            pointPlacement: 'on',
            color: '#e3ad0b',
            fillOpacity: 0.1
        }],
        credits: false
    });
}

function lineConcerts() {
    Highcharts.chart("concertTours", {
        chart: {
            type: 'line'
        },
        title: {
            margin: 20,
            text: 'Number of K-Pop Concert Tours Over the Past Decade'
        },
        plotOptions: {
            series: {
                pointStart: 2010
            }
        },
        caption: {
            text: "Note: The number of tours in 2020 was only recorded up until April and due to the pandemic, many were cancelled. "
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
                text: 'Years'
            },
        },
        yAxis: {
            title: {
                text: 'Number of Concert Tours'
            },
        },
        series: [{
            name: 'Number of Concert Tours',
            color: '#c7a84c',
            data: [3, 2, 9, 8, 11, 12, 4, 15, 25, 17, 14]
        }],
        credits: false
    })
}

function lineAlbums() {
    Highcharts.chart("albumSales", {
        chart: {
            type: 'line'
        },
        subtitle: {
            text: "From Billboard's Top Current Albums Chart."
        },
        title: {
            margin: 20,
            text: 'Number of K-Pop Albums Charting on Billboard by Year'
        },
        plotOptions: {
            series: {
                pointStart: 2010
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
                text: 'Years'
            },
        },
        yAxis: {
            title: {
                text: 'Number of Albums'
            },
        },
        series: [{
            name: 'Number of Albums',
            color: '#c7a84c',
            data: [0, 1, 3, 4, 6, 2, 1, 8, 18, 17, 33]
        }],
        credits: false
    })
}

function init() {
    timeline()
    boxplot()
    lineConcerts();
    radarchart();
    lineAlbums();
}

document.addEventListener('DOMContentLoaded', init, false);