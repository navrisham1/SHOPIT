const express = require('express')
const router = express.Router();

const { 
    getProducts,
    getAdminProducts,
    newProducts,
    getSingleProduct, 
    updateProduct, 
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview

    } = require('../controllers/productController')

const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth')

router.route('/products').get(getProducts);
router.route('/admin/products').get(getAdminProducts);

router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'),newProducts);
router.route('/admin/products/:id')
    .put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);


router.route('/review').put(isAuthenticatedUser, createProductReview)
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, deleteReview)



module.exports = router;