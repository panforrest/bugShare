import Time from 'react-time'
import React from 'react'

export default {

    formattedDate: (timestamp) => {
        // var now = new Date()
        var timestamp = new Date(timestamp)
        return <Time value={timestamp} titleFormat="YYYY/MM/DD HH:mm" relative />

    }

}