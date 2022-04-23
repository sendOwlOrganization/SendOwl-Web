import React, { useState } from "react";
import { Button, ButtonProps, IconButton, InputBase, styled, Typography, useTheme, Grid, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const Header = styled("header")`
  display: ${"flex"};
`;

const ColorBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#001064"),
  backgroundColor: "#001064",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#001064",
  },
}));

const OutlinedBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#efebe9"),
  backgroundColor: "#ffffff",
  border: "1px solid #bdb9b7",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#ffffff",
    borderColor: "#efebe9",
  },
}));

const MainHeader = () => {
  const theme = useTheme();

  return (
    <div>
      <Header sx={{ borderBottom: 1, borderColor: "grey.500" }}>
        <Typography margin={`${theme.spacing(1)} 0`}
                    fontSize={"25px"}
                    fontWeight={"700"}
                    display={"flex"}
                    style={{
                      color: "#040C4F",
                      fontWeight: "bolder",
                      fontSize: 30,
                      fontFamily: "Helvetica Neue" }}>
          <Image
            src="/images/logo.png"
            alt="logo"                    
            width={150}
            height={45}/>
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ display: { lg: "flex", xs: "none" } }}
          padding={1}
        >
          <Button href="/home" color="inherit">
            홈
          </Button>
          <Button href="/review" color="inherit">
            기업 리뷰
          </Button>
          <Button href="/community" color="inherit">
            자유 게시판
          </Button>
        </Stack>
        <Grid
          flex="1"
          container
          justifyContent={"flex-end"}
          sx={{ alignItems: "center" }}
        >
          <IconButton
            component="form"
            sx={{
              display: {
                lg: "none",
                xs: "block",
              },
            }}
          >
            <SearchIcon
              sx={{ color: "#111111", fontSize: "30px", display: "flex" }}
            />
          </IconButton>
          <Stack direction="row" spacing={1}>
            <ColorBtn style={{ borderRadius: 0 }}>글쓰기</ColorBtn>
            <OutlinedBtn style={{ borderRadius: 0 }}>로그인</OutlinedBtn>
          </Stack>
        </Grid>
      </Header>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: { lg: "none", xs: "block" },
          borderBottom: 1,
          borderColor: "grey.500",
          padding: "10px",
        }}
      >
        <Button href="/home" color="inherit">
          홈
        </Button>
        <Button href="/review" color="inherit">
          기업 리뷰
        </Button>
        <Button href="/community" color="inherit">
          자유 게시판
        </Button>
      </Stack>
      <Stack
        component="form"
        sx={{
          p: "2px 4px",
          display: {
            lg: "block",
            xs: "none",
          },
          alignItems: "center",
          border: 2,
          borderRadius: "25px",
          margin: "20px",
        }}
      >
        <IconButton
          type="submit"
          sx={{ p: "10px", flex: 1 }}
          aria-label="search"
        >
          <SearchIcon sx={{ color: "#111111" }} />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, minWidth: "90%" }}
          inputProps={{
            placeholder: "관심있는 내용을 검색해보세요 !",
            style: { fontWeight: "bold" },
          }}
        />
        <IconButton sx={{ color: "#111111" }}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </div>
  );
};

export default MainHeader;
