import * as React from "react";
import { Box, Divider, Grid } from "@mui/material";
import { Insights } from "@mui/icons-material";
import { ChatBubble } from "@mui/icons-material";
import { ThumbUp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// TODO: need to move from this file + fix types to match with api
function createData(
  category: string,
  name: string,
  like: number,
  comment: number
) {
  return { category, name, like, comment };
}
// TODO: delete
const rows = [
  createData("이직.커리어", "경찰준비중입니다..", 10, 2),
  createData("잡담", "블랙기업", 8, 2),
  createData("이직.커리어", "중소기업 어디다니세요", 3, 10),
  createData("이직.커리어", "고민입니다", 1, 3),
  createData("이직.커리어", "개발자", 4, 6),
];

const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.3),
  color: theme.palette.text.secondary,
  display: "inline",
}));

export default function MainContent() {
  return (
    <div>
      <Grid display={"flex"}>
        <Grid marginTop={"1em"} marginRight={"0.4em"}>
          <Insights />
        </Grid>
        <Grid container justifyContent={"space-between"}>
          <h3>토픽 베스트</h3>
          <h5>더보기</h5>
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ flexGrow: 1 }}>
        {rows.map((row) => (
          <>
          <Grid
          key={row.name}
          container
          spacing={1}
          marginBottom={"5px"}
          marginTop={"5px"}
        >
          <Grid item lg={1} xs={12} paddingTop={0}>
            <Item sx={{ border: "1px solid gray" }} >
              {row.category}
            </Item>
          </Grid>
          
          <Grid item lg={10} xs={12}>
            <Grid>{row.name}</Grid>
          </Grid>
          <Grid item lg={0.5} xs={1.5}>
            <Box justifyContent={"center"}>
            <ThumbUp sx={{fontSize:13, color:"gray"}}/>
            <Item sx={{fontSize:12, color:"gray"}}>{row.like}</Item>
            </Box>
          </Grid>
          <Grid item lg={0.5} xs={1.5}>
            <ChatBubble sx={{fontSize:13, color:"gray"}} />
            <Item sx={{fontSize:12, color:"gray"}}>{row.comment}</Item>
          </Grid>
        </Grid>
        <Divider sx={{display:{lg:"none", xs:"block"}}}/>
          </>
        ))}
      </Box>
    </div>
  );
}
