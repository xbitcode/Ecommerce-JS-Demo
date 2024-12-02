import { useParams } from 'react-router-dom'
import { 
  Container, 
  Grid, 
  Typography, 
  Rating, 
  Button, 
  Box, 
  Paper,
  Divider,
  Chip
} from '@mui/material'
import { ShoppingCart, LocalShipping, Security, Loop } from '@mui/icons-material'
import { products } from '../data/products'

function ProductDetails() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <Container>
        <Typography variant="h5" color="error" sx={{ mt: 4 }}>
          Product not found
        </Typography>
      </Container>
    )
  }

  return (
    <Container>
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              {product.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({product.numReviews} reviews)
              </Typography>
            </Box>

            <Chip 
              label={product.brand} 
              color="primary" 
              variant="outlined" 
              sx={{ mb: 2 }}
            />

            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" color="success.main" gutterBottom>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCart />}
              disabled={product.countInStock === 0}
              fullWidth
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1976D2 30%, #1AC6E9 90%)'
                }
              }}
            >
              Add to Cart
            </Button>

            <Divider sx={{ my: 3 }} />

            {/* Features */}
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <LocalShipping color="primary" />
                  <Typography variant="body2">Free Shipping</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Security color="primary" />
                  <Typography variant="body2">Secure Payment</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Loop color="primary" />
                  <Typography variant="body2">Easy Returns</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default ProductDetails
