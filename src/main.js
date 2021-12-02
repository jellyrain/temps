import getTime from './getTime'
import getTimeStamp from './getTimeStamp'
import format from './format'
import getRelativeTime from './getRelativeTime'

function temps() {
    console.log({
        version: temps.version,
        getTime: getTime.version,
        getTimeStamp: getTimeStamp.version,
        format: format.version,
        getRelativeTime: getRelativeTime.version,
    });
}

temps.version = '1.0.0'
temps.getTime = getTime
temps.getTimeStamp = getTimeStamp
temps.format = format
temps.getRelativeTime = getRelativeTime

if (window.console && window.console.log) {
    console.log([
        "      __         __  __                      __        ",
        "     |__|.-----.|  ||  |.--.--..----..---.-.|__|.-----.",
        "     |  ||  -__||  ||  ||  |  ||   _||  _  ||  ||     |",
        "     |  ||_____||__||__||___  ||__|  |___._||__||__|__|",
        "    |___|               |_____|                        "
    ].join('\n'));
};

export default temps