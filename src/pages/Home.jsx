import { Grid, Container, Typography, Box } from '@mui/material'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Home() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Featured Products
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Discover our latest tech innovations
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
