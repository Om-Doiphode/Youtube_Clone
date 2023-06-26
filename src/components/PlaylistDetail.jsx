import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos} from './'
import { fetchfromAPI } from '../utils/fetchfromAPI'

const PlaylistDetail = () => {
  const [videoDetail,setVideoDetail] = useState(null);

  const {id}=useParams();
  useEffect(()=>{

    fetchfromAPI(`playlistItems?playlistId=${id}&part=snippet`)
    .then((data)=>setVideoDetail(data?.items));
  },[id])


  return (
    <Box
    style={{
      minHeight:"95vh"
    }}>
   <Box>
    <div 
    style={{
      background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%',
      zIndex:10,
      height:"300px"
    }}
    />
   </Box>

   <Box display="flex" p={2}>
    <Box sx={{mr:{sm:'100px'}}}/>
    <Videos videos={videoDetail} playlist={1}/>
   </Box>

    </Box>
  )
}

export default PlaylistDetail;
