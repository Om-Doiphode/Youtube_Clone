import { Box, Stack } from '@mui/material';
import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import PlaylistCard from './PlaylistCard';

const Videos = ({videos, direction, playlist}) => {
  if(!videos?.length) return "Loading..."
  return (
  <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId &&  <VideoCard video={item}/> }
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
          {item.id.playlistId && <PlaylistCard playlist={item}/>}
          {playlist===1 && <VideoCard video={item} playlist={1}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos;
