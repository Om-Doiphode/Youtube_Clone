import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card,CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import ListIcon from '@mui/icons-material/List';
import { demoVideoUrl,demoVideoTitle,demoChannelTitle, demoChannelUrl } from '../utils/constants'

const PlaylistCard = ({playlist: {id:{playlistId}, snippet}}) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <Card sx={{width:{xs:'100%',sm:"358px",md:'320px' }, boxShadow:'none', borderRadius:0}}>
          <Link to={playlistId? `/playlist/${playlistId}`: demoVideoUrl}>
              <CardMedia
              image={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              sx={{width:{xs:"100%", sm:"358px", md:"320px"}, height:180}}
              />
              <ListIcon/>
          </Link>
          <CardContent
          sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
               <Link to={playlistId? `/playlist/${playlistId}`: demoVideoUrl}>
                  <Typography variant='subtitle1'
                  fontWeight="bold" color="#FFF">
                      {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                  </Typography>
               </Link>
               <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                  <Typography variant='subtitle2'
                  fontWeight="bold" color="gray">
                      {snippet?.channelTitle || demoChannelTitle}
                  <CheckCircle sx={{fontSize:12, color:'gray',ml:'5px'}}/>
                  </Typography>
               </Link>
               <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`: demoChannelUrl}>
                  <Typography variant='subtitle2'
                  fontWeight="bold" color="gray">
                      {(new Date(snippet.publishedAt)).toLocaleDateString('en-US', options)}
                  </Typography>
               </Link>
          </CardContent>
      </Card>
    )
  }
  
  export default PlaylistCard;
  