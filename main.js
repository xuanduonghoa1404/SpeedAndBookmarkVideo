javascript: (function () { 
    var speedDiv = document.createElement('div'); 
    var speedButton = document.createElement('button'); 
    var speedSpan = document.createElement('span'); 
  var video = document.querySelector('video');
    speedButton.setAttribute('class','vjs-control vjs-button outline-enabled-control vjs-control-bar amp-playbackspeed-100x-icon');   
    speedButton.setAttribute('type','button');
    speedButton.setAttribute('aria-label','1x');
    speedSpan.setAttribute('class','vjs-control-text'); 
    speedSpan.innerHTML = "1x";   
    document.querySelector('.amp-controlbaricons-left').appendChild(speedDiv); 
    speedButton.appendChild(speedSpan); 
    speedDiv.appendChild(speedButton);
    speedDiv.addEventListener('click', function(event) {
    if(video.playbackRate === 1) {
      video.playbackRate = 1.2;
      speedSpan.innerHTML = "1.2x";
      speedButton.classList.add("amp-playbackspeed-120x-icon");
      speedButton.classList.remove("amp-playbackspeed-100x-icon");
    } else if(video.playbackRate === 1.2) {
      video.playbackRate = 1.5;
      speedSpan.innerHTML = "1.5x";
      speedButton.classList.add("amp-playbackspeed-150x-icon");
      speedButton.classList.remove("amp-playbackspeed-120x-icon");
    } else if(video.playbackRate === 1.5) {
      video.playbackRate = 1.8;
      speedSpan.innerHTML = "1.8x";
      speedButton.classList.add("amp-playbackspeed-180x-icon");
      speedButton.classList.remove("amp-playbackspeed-150x-icon");
    } else if(video.playbackRate === 1.8) {
      video.playbackRate = 2;
      speedSpan.innerHTML = "2x";
      speedButton.classList.add("amp-playbackspeed-200x-icon");
      speedButton.classList.remove("amp-playbackspeed-180x-icon");
    } else if(video.playbackRate === 2) {
      video.playbackRate = 1;
      speedSpan.innerHTML = "1x";
      speedButton.classList.add("amp-playbackspeed-100x-icon");
      speedButton.classList.remove("amp-playbackspeed-200x-icon");
    }
  });
    var addTimeDiv = document.createElement('div'); 
    var addTimeButton = document.createElement('button'); 
    var addTimeSpan = document.createElement('span'); 
    addTimeButton.setAttribute('class','vjs-control vjs-button outline-enabled-control vjs-control-bar vjs-about-video-control');   
    addTimeButton.setAttribute('type','button');
    addTimeButton.setAttribute('aria-label','Add time');
    addTimeSpan.setAttribute('class','vjs-control-text'); 
    addTimeSpan.innerHTML = "Add time";   
    document.querySelector('.amp-controlbaricons-left').appendChild(addTimeDiv); 
    addTimeButton.appendChild(addTimeSpan); 
    addTimeDiv.appendChild(addTimeButton);
    var duration = video.duration;
    var lengthProcessBar = document.querySelector('.vjs-progress-holder').offsetWidth;
    var listTime = window.localStorage.getItem("listTime") !== undefined ? JSON.parse(window.localStorage.getItem("listTime")) : '';
    addTimeDiv.addEventListener('click', function(event) {
     if(listTime === null || listTime === undefined) {
       listTime = [];
     }
     listTime.push({
       name: video.currentTime,
       value: video.currentTime
     });
     window.localStorage.setItem("listTime", JSON.stringify(listTime));
     var mouseDisplay = document.createElement('div');
      mouseDisplay.setAttribute('class','vjs-mouse-display'); 
      mouseDisplay.setAttribute('style','left: ' + video.currentTime*lengthProcessBar/duration + 'px');
      document.querySelector('.vjs-progress-holder').appendChild(mouseDisplay);
  });
    if (listTime.length) {
    listTime.forEach((time) => {
      var mouseDisplay = document.createElement('div');
      mouseDisplay.setAttribute('class','vjs-mouse-display'); 
      mouseDisplay.setAttribute('style','left: ' + time.value*lengthProcessBar/duration + 'px');
      document.querySelector('.vjs-progress-holder').appendChild(mouseDisplay);
    });
    }
    var menuTimeDiv = document.createElement('div'); 
    var menuTimeButton = document.createElement('button'); 
    var menuTimeSpan = document.createElement('span'); 
    menuTimeButton.setAttribute('class','vjs-control vjs-button outline-enabled-control vjs-control-bar vjs-transcript-control');   
    menuTimeButton.setAttribute('type','button');
    menuTimeButton.setAttribute('aria-label','List time');
    menuTimeSpan.setAttribute('class','vjs-control-text'); 
    menuTimeSpan.innerHTML = "List time";   
    document.querySelector('.amp-controlbaricons-left').appendChild(menuTimeDiv); 
    menuTimeButton.appendChild(menuTimeSpan); 
    menuTimeDiv.appendChild(menuTimeButton);
    var index = 0;
    menuTimeDiv.addEventListener('click', function(event) {
      if(listTime) {
        if(index <= listTime.length) {
          video.currentTime = listTime[index].value;
          index = index + 1;
        } else {
          index = 0;
        }
      }
    });
    
    var deleteTimeDiv = document.createElement('div'); 
    var deleteTimeButton = document.createElement('button'); 
    var deleteTimeSpan = document.createElement('span'); 
    deleteTimeButton.setAttribute('class','vjs-control vjs-button outline-enabled-control vjs-control-bar vjs-close-control');   
    deleteTimeButton.setAttribute('type','button');
    deleteTimeButton.setAttribute('aria-label','Delete list time');
    deleteTimeSpan.setAttribute('class','vjs-control-text'); 
    deleteTimeSpan.innerHTML = "Delete list time";   
    document.querySelector('.amp-controlbaricons-left').appendChild(deleteTimeDiv); 
    deleteTimeButton.appendChild(deleteTimeSpan); 
    deleteTimeDiv.appendChild(deleteTimeButton);
    var index = 0;
    deleteTimeDiv.addEventListener('click', function(event) {
      window.localStorage.setItem("listTime", "");
      listTime = [];
    })
}());

