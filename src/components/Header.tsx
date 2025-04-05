import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const navItems = [
        { label: 'Home', path: '/' },
    ];

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    const hoverStyle = {
        transition: 'all 0.2s ease-in-out', 
        '&:hover': {
            transform: 'scale(1.05)',
            filter: 'brightness(1.2)', 
        },
    };

    return (
        <AppBar position="static" color="primary">
          <Toolbar sx={{ paddingLeft: 2 }}>
            <Typography
              variant="h6"
              sx={{
                cursor: 'pointer',
                fontWeight: 700,
                letterSpacing: '.1rem',
                px: 2,
                ...hoverStyle, 
              }}
              onClick={() => handleNavigate('/')}
            >
              My App
            </Typography>
    
            <div>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => handleNavigate(item.path)}
                  sx={{
                    pr: 1,
                    textTransform: 'none',
                    fontWeight: 500,
                    ...hoverStyle, 
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      );
    };
    
    export default Header;