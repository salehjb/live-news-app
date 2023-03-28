"use client"

import TimeAgo from "react-timeago";

type Props = {
    timestamp: string
}

function LiveTimeStamp({ timestamp }: Props) {
  return (
    <TimeAgo date={timestamp} />
  )
}

export default LiveTimeStamp