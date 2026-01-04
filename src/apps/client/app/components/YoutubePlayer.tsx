'use client'
import ReactPlayer from 'react-player'

export default function YoutubePlayer({url}: {url: string}) {
  return (
    <div className="my-8 aspect-video overflow-hidden rounded-md">
      <ReactPlayer src={url} width="100%" height="100%" controls />
    </div>
  )
}
