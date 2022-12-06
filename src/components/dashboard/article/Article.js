import { useSelector } from "react-redux";

import {Paper,Typography,Grid,} from "@mui/material";

import Highlighter from "react-highlight-words";
import ReactReadMoreReadLess from "react-read-more-read-less";

function Article(props) {
  const paperStyle = { padding: "100px 50px",margin: "50px auto" };
  const {searchField}=useSelector((state)=>state.articles);
  
  return (
  
      <Grid item lg={4} md={6} >
        <Paper align="center" elevation={5} style={paperStyle}>
        <Typography variant="h6">Abstract:</Typography>
        <Highlighter
          searchWords={[searchField]}
          autoEscape={true}
          textToHighlight={props.abstract}
        />
        <ReactReadMoreReadLess
          charLimit={50}
          readMoreText={"Read More ▼"}
          readLessText={"Read Less ▲"}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
        >
          {props.abstract}
        </ReactReadMoreReadLess>
        <Typography variant="h6">Lead Paragraph:</Typography>
        <Highlighter
          searchWords={[searchField]}
         
          textToHighlight={props.abstract}
        />
        <ReactReadMoreReadLess
          charLimit={5}
          readMoreText={"Read More ▼"}
          readLessText={"Read Less ▲"}
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less"
        >
          {props.lead_paragraph}
        </ReactReadMoreReadLess>
        </Paper>
      </Grid>
    );}

export default Article;
