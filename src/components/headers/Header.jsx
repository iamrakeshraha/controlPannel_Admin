import { AppBar, Toolbar, Box, styled } from "@mui/material";
import logo from "../../common/images/logo.jpeg";

const StyledHeader = styled(AppBar)`
  background: #008000;
  height: 55px;
`;
const Component = styled(Box)`
margin-left: 10%
`




const Header = () => {

    // const logoURL= logo

  return (
    <StyledHeader>
      <Toolbar>
        <Component>
          <img src={logo} alt="logo" style={{ width: 110 }}/>
        </Component>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
