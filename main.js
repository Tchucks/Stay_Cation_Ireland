
$(function() {
  var params = {
    // Request parameters
  };

  $.ajax({
    url:
      "https://failteireland.azure-api.net/opendata-api/v1/attractions?" +
      $.param(params),
    beforeSend: function (xhrObj) {
      // Request headers
      xhrObj.setRequestHeader(
        "Ocp-Apim-Subscription-Key",
        "ef4ed92186214c868a59d97c3b353661"
      );
    },
    type: "GET",
    // Request body
    data: "{body}",
  })
    .done(function (data) {
    
      console.log(data);
      
      document.getElementById("data").innerHTML = data.results;
    })
    .fail(function () {
      alert("error");
    });



});

console.log(data);



