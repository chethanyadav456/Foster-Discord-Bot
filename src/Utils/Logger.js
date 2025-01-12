class Logger {
    static log(message) {
        console.log(message);
    }

    static error(message) {
        console.error(message);
    }

    static warn(message) {
        console.warn(message);
    }

    static info(message) {
        console.log(message);
    }

    static debug(message) {
        console.debug(message);
    }

    static trace(message) {
        console.trace(message);
    }

    static table(message) {
        console.table(message);
    }

    static group(message) {
        console.group(message);
    }

    static groupEnd() {
        console.groupEnd();
    }

    static groupCollapsed(message) {
        console.groupCollapsed(message);
    }

    static count(message) {
        console.count(message);
    }

    static countReset(message) {
        console.countReset(message);
    }

    static time(message) {
        console.time(message);
    }

    static timeLog(message) {
        console.timeLog(message);
    }

    static timeEnd(message) {
        console.timeEnd(message);
    }

    static clear() {
        console.clear();
    }

    static assert(expression, message) {
        console.assert(expression, message);
    }

    static dir(message) {
        console.dir(message);
    }

    static dirxml(message) {
        console.dirxml(message);
    }

    static profile(message) {
        console.profile(message);
    }

    static profileEnd(message) {
        console.profileEnd(message);
    }

    static timeStamp(message) {
        console.timeStamp(message);
    }

    static markTimeline(message) {
        console.markTimeline(message);
    }

    static captureStackTrace(message) {
        console.captureStackTrace(message);
    }

    static record(message) {
        console.record(message);
    }

    static recordEnd(message) {
        console.recordEnd(message);
    }
}