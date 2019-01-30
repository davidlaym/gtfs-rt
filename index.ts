import { default as rp } from 'request-promise'
import { default as config } from 'config'
import gtfs_rt from 'gtfs-realtime-bindings'

// tslint:disable:no-console

var url = config.get<string>('service-alerts')

console.log(`Making request to ${url}...`)
rp({
  method: 'GET',
  url,
  encoding: null
})
  .then(buf => {
    console.log(`Request OK, parsing...`)
    console.log(`-------------------`)
    const feed = gtfs_rt.FeedMessage.decode(buf)
    feed.entity.forEach(entity => {
      if (entity.alert) {
        var a = entity.alert
        var e = a.informed_entity || []
        var entityInfo = e.slice(0, 3).reduce((acc, cur, i) => {
          var prefix = i === 0 ? '' : ','
          return `${acc}${prefix} ${JSON.stringify(cur, null, 0)}`
        }, '')
        if (e.length > 3) {
          entityInfo = entityInfo + ` and ${e.length - 3} more...`
        }
        console.log(
          `ALERT: ${a.header_text.translation[0].text ||
            '-NO DESCRIPTION-'} ${entityInfo || '-NO DETAILS-'}`
        )
      }
    })
  })
  .catch(e => console.log(e))
