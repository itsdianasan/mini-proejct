"use strict";
!function() {
    var r;
    try {
        r = require("@marcom/data-relay")
    } catch (r) {}
    if (r) {
        var e, t = document.getElementById("aw-rid-relay-options");
        if (t)
            try {
                e = JSON.parse(t.innerHTML)
            } catch (r) {}
        new r(e)
    }
}();
