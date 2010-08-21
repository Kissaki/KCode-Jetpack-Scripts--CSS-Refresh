var contextMenu = require("context-menu");

var item = contextMenu.Item({
  label: "CSS Refresh",
  onClick: function(contextObj, item) {
    var links = contextObj.window.document.getElementsByTagName('link');
    for(i in links) {
      var link = links[i];
      if (link.rel != undefined && link.rel.toLowerCase().indexOf('stylesheet') >= 0 && link.href) {
        var href = link.href.replace(/(&|\?)forceReload=d+/, '');
        link.href = href + (href.indexOf('?') >= 0 ? '&' : '?') + 'forceReload=' + (new Date().valueOf());
      }
    }
  }
});
contextMenu.add(item);

