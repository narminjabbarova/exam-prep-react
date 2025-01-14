const express = require('express')
const router = express.Router()

const { getProducts,
  getProductById,
  deleteProduct,
  addNewData } = require("../controllers/ProductController")


router.get("/", getProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteProduct)
router.post("/", addNewData)

module.exports = router