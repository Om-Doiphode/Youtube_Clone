import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  PlaylistDetail,
} from "./components";

import { Box } from "@mui/material";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" exact element={<VideoDetail />}></Route>
        <Route path="/channel/:id" exact element={<ChannelDetail />}></Route>
        <Route path="/playlist/:id" exact element={<PlaylistDetail />}></Route>
        <Route
          path="/search/:searchTerm"
          exact
          element={<SearchFeed />}
        ></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
