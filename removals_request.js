$(document).ready(function() {
  var port = chrome.runtime.connect({name: "executionPort"});
  var $submitBtn = $("input[name='next']");

  port.onMessage.addListener(function(msg) {
    if(msg.type == 'state') {
      console.log(msg.removalMethod);
      $("select[name='removalmethod']").val(msg.removalMethod);
      
      $submitBtn.delay(1000).trigger('click');
    }
  });

  port.postMessage({
    type: 'askState'
  });
});
