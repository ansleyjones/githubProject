$(document).ready(function() {
  var home = {

      init: function() {
        home.initStyling();
        home.initEvents();
      },


      initStyling: function() {
        home.renderTextSide($(".sidebar"));
        home.renderTextRepos($(".mainInfo"));
        home.renderTextActivities($(".mainInfo"));
      },

      initEvents: function() {},


      render: function(template, data, $target) {
          var tmpl = _.template(template, data);
          $target.append(tmpl);
      },


      renderTextSide: function($target) {
        home.render($("#sideTmpl").html(), myData, $target);
        home.render($("#sideTmpl2").html(), myData, $target);
        home.render($("#sideTmpl3").html(), myData, $target);
        home.render($("#sideTmpl4").html(), orgData, $target);
      },


      renderTextRepos: function($target) {
        home.render($("#repositoriesList").html(), orgData, $target);
      },

      renderTextActivities: function($target) {
        home.render($("#publicActivity").html(), myActivities, $target);
      },

    }

    $(".mainNav a").on("click", function(event){
      event.preventDefault();
      var navigated = "." + $(this).attr("rel");
      $(".mainInfo").children().removeClass("currentTab");
      $(navigated).addClass("currentTab");
      $(this).closest('li').addClass("active");
      $(this).closest('li').siblings().removeClass("active");
    });



home.init();


});
