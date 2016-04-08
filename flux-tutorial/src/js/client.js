import React, { Component } from 'react';
import ReactDOM from "react-dom";

import Box from "./components/comments/Box";

const app = document.getElementById('app')

ReactDOM.render(
	<Box url="comments.json" pollInterval={2000}/>
,app)
