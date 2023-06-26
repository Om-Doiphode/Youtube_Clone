import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card,CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoVideoTitle,demoChannelTitle, demoChannelUrl } from '../utils/constants'


const VideoCard = ({ video, playlist }) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
    return (
      <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={playlist === 1 ? `/video/${video.snippet.resourceId.videoId}` : `/video/${video.id.videoId}`}>
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
          <Link to={playlist === 1 ? `/video/${video.snippet.resourceId.videoId}` : `/video/${video.id.videoId}`}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={video.snippet?.channelId ? `/channel/${video.snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {video.snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
          <Link to={video.snippet?.channelId ? `/channel/${video.snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {new Date(video.snippet.publishedAt).toLocaleDateString('en-US', options)}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    );
  };
export default VideoCard
