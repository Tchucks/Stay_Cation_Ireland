let results = []; // API data will be stored here

// not a complete list I guess; just add the missing ones here
const regions = ["Carlow", "Clare", "Cork", "Limerick", "Waterford", "Wexford"];

const $selRegion = $("#region");
$.each(regions, function(i, region) {
  $selRegion.append($('<option>').text(region));
});
$selRegion.on("change", function() {
  showAttractions($(this).val());
});

$.ajax({
    url: "https://failteireland.azure-api.net/opendata-api/v1/attractions?",
    beforeSend: function(xhrObj) {
      // Request headers
      xhrObj.setRequestHeader(
        "Ocp-Apim-Subscription-Key",
        "ef4ed92186214c868a59d97c3b353661"
      );
    }
  })
  .done(function(data) {
    results = data.results;
    $('#data').empty();
  })
  .fail(function() {
    alert("error");
  });

function showAttractions(region) {
  $data = $('#data').empty();
  $(results.filter(result => result.address.addressRegion === region))
    .each(function(i, r) {
      $data.append(createCard(r))
    });

}

function createCard(a) {
  $div = $('<div>').addClass("card");
  $div.append($("<p>").text(a.name));
  $div.append($("<p>").text(a.address.addressRegion));
  $div.append($("<a>").text("Show on map")
    .attr("target", "_blank")
    .attr("href", `https://www.google.com/maps/@${a.geo.latitude},${a.geo.longitude},15z`));
  return $div;
}
