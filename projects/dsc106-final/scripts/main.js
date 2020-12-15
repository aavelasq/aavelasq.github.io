Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Noto Sans JP',
        }
    }
});

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
                color: 'rgb(250, 40, 170)',
                name: '1st Album on Billboard 200 Chart',
                label: '1st Album on Billboard 200 Chart',
                description: "BoA's <i>BoA</i> charts at #127"
            }, {
                x: Date.UTC(2010, 8, 23),
                color: '#5eebd8',
                name: "First Artists on Billboard's Annual Showcase",
                label: "First Artists on Billboard's Annual Showcase",
                description: "6 K-pop artists featured on Billboard's annual showcase '21 under 21'"
            }, {
                x: Date.UTC(2012, 7),
                color: '#6b57ba',
                name: '1st YouTube video goes viral',
                label: '1st YouTube video goes viral',
                description: "Psy's <i>Gangnam Style</i> goes viral, attracting attention from general public in the US"
            }, {
                x: Date.UTC(2012, 9, 17),
                color: '#f0a43a',
                name: '1st U.S. K-pop Convention and Concert',
                label: '1st U.S. K-pop Convention and Concert',
                description: "<i>KCON</i> first held in Los Angeles in 2012"
            }, {
                x: Date.UTC(2015, 2, 5),
                color: 'rgb(250, 40, 170)',
                name: 'Largest Album Sales in US to Date',
                label: 'Largest Album Sales in US to Date',
                description: "EXO's <i>EXODUS</i> sells 6,000 copies according to Nielsen"
            }, {
                x: Date.UTC(2017, 1, 15),
                color: '#5eebd8',
                name: 'First Group to Top iTunes Top Songs Chart',
                label: 'First Group to Top iTunes Top Songs Chart',
                description: "BTS's <i>Spring Day</i> tops Apple's iTunes Top Songs Chart"
            }, {
                x:Date.UTC(2018, 4, 27),
                color: '#6b57ba',
                name:"First #1 Album on Billboard 200",
                label:"First #1 Album on Billboard 200",
                description:"BTS's <i>Love Yourself: Tear</i> hits #1 on Billboard 200"
            }, {
                x: Date.UTC(2019, 9, 5),
                color: '#f0a43a',
                name: 'First K-pop Artists to Hold Initial Debut in US',
                label: 'First K-pop Artists to Hold Initial Debut in US',
                description: "SuperM releases self-titled debut album in the US"
            }, {
                x: Date.UTC(2020, 7, 31),
                color: 'rgb(250, 40, 170)',
                name: 'First #1 Single on Billboard Hot 100 chart',
                label: 'First #1 Single on Billboard Hot 100 chart',
                description: "BTS's <i>Dynamite</i> hits #1 on Billboard Hot 100 Chart"
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
            color: '#f0a43a',
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
            color: 'rgb(250, 40, 170)',
            fillOpacity: 0.1
        },{
            name: 'Rock',
            data: [0.5, 0.74, 0.19, 0.52, 0.14],
            pointPlacement: 'on',
            color: '#5eebd8',
            fillOpacity: 0.1
        },
        {
            name: 'Hip-Hop',
            data: [0.75, 0.65, 0.18, 0.54, 0.14],
            pointPlacement: 'on',
            color: '#f0a43a',
            fillOpacity: 0.1
        },
        {
            name: 'Pop',
            data: [0.68, 0.62, 0.16, 0.52, 0.25],
            pointPlacement: 'on',
            color: '#6b57ba',
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
            color: 'rgb(250, 40, 170)',
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
            color: '#5eebd8',
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