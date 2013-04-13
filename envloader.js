(function() {

    exports.load = function() {
        var fs = require("fs");
        if (fs.existsSync(".env")) {

            var fd = fs.openSync(".env", "r");

            var content = fs.readSync(fd, 4096, 0, "utf-8")[0];

            var lines = content.split(/\n|\r/);

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];
                var eq = line.indexOf("=");
                if (eq < 0) continue;

                process.env[line.substr(0, eq)] = line.substr(eq + 1);
            }
        }
    }

})();