import { Container, Divider } from "@mui/material";
import MainHeader from "./MainHeader";
import Content from "./Content";

const Main = () => {
  return (
    <Container fixed>
      <MainHeader/>
      <Content/>
    </Container>

  )
}

export default Main;