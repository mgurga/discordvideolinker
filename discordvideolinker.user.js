// ==UserScript==
// @name         discord video linker
// @version      0.1
// @description  re adds right click menu on videos in discord
// @author       rokie95
// @match        https://discord.com/*
// @grant        none
// @downloadURL ---
// @updateURL ---
// ==/UserScript==

(function() {
    'use strict';

    setInterval( function() {

        var vids = document.getElementsByTagName("video");

        for(var id = 0; id < vids.length; ++id) {
            if(vids[id].id != "LINKED") {
                vids[id].oncontextmenu = null;

                var vidurl = document.createElement("p");
                var vidtext = document.createTextNode(vids[id].src);
                vidurl.appendChild(vidtext);

                vids[id].parentElement.parentElement.parentElement.append(vidurl);
                vids[id].id += "LINKED";
            }
        }

    }, 500);
})();
