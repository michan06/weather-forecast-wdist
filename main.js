fetch('https://www.data.jma.go.jp/fcd/yoho/wdist/jp/data/wdist/VPFD/130010.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(JSON.stringify(myJson));
    main = document.getElementById("main");
    period = myJson.areaTimeSeries;
    point = myJson.pointTimeSeries;
    for( key in myJson.areaTimeSeries.timeDefines){
        var newDiv = document.createElement("div");
        var newContent = document.createTextNode(
            `${moment(period.timeDefines[key].dateTime).format('MM/DD HH:mm')}  ${period.weather[key]} ${point.temperature[key]}℃ ${period.wind[key].direction} ${period.wind[key].speed}m/s `
        );
        newDiv.appendChild(newContent);
        document.body.insertBefore(newDiv,main);
        console.log(myJson.areaTimeSeries.timeDefines[key].dateTime);
        console.log(myJson.areaTimeSeries.weather[key]);
        console.log(myJson.areaTimeSeries.wind[key].direction);

    }
    

  });