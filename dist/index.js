"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const config_1 = __importDefault(require("config"));
const gtfs_realtime_bindings_1 = __importDefault(require("gtfs-realtime-bindings"));
// tslint:disable:no-console
var url = config_1.default.get('service-alerts');
console.log(`Making request to ${url}...`);
request_promise_1.default({
    method: 'GET',
    url,
    encoding: null
})
    .then(buf => {
    console.log(`Request OK, parsing...`);
    console.log(`-------------------`);
    const feed = gtfs_realtime_bindings_1.default.FeedMessage.decode(buf);
    feed.entity.forEach(entity => {
        if (entity.alert) {
            var a = entity.alert;
            var e = a.informed_entity || [];
            var entityInfo = e.slice(0, 3).reduce((acc, cur, i) => {
                var prefix = i === 0 ? '' : ',';
                return `${acc}${prefix} ${JSON.stringify(cur, null, 0)}`;
            }, '');
            if (e.length > 3) {
                entityInfo = entityInfo + ` and ${e.length - 3} more...`;
            }
            console.log(`ALERT: ${a.header_text.translation[0].text ||
                '-NO DESCRIPTION-'} ${entityInfo || '-NO DETAILS-'}`);
        }
    });
})
    .catch(e => console.log(e));
//# sourceMappingURL=index.js.map