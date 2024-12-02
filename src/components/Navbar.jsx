import { AppBar, Toolbar, Typography, Button, Badge, IconButton, Box } from '@mui/material'
import { ShoppingCart, Person, Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'inherit',
            fontWeight: 'bold'
          }}
        >
          TECH STORE
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={3} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          
          <IconButton color="inherit">
            <Person />
          </IconButton>
          
          <Button 
            color="inherit" 
            variant="outlined"
            component={Link}
            to="/login"
            sx={{ 
              borderColor: 'rgba(255,255,255,0.5)',
              '&:hover': {
                borderColor: 'white'
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
