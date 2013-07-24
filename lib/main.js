;/**
 * Toggle Find Bar
 * @author ashphy (ne.vivam.si.abis@gmail.com)
 * @license The MIT License
 */

exports.main = function() {
    var { Hotkey } = require("sdk/hotkeys");
    var toggleFindBar = Hotkey({
        combo: "accel-f",
        onPress: function() {
            var utils = require("sdk/window/utils");
            var findbar = utils.getMostRecentBrowserWindow().gFindBar;
            if(findbar.hidden == true) {
                findbar.startFind();
            } else {
                findbar.close();
            }
        }
    });
};