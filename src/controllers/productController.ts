import productModel from '../models/product'
import productCategoryModel from '../models/productCategory'
import likeModel from '../models/like'
import sequelize from '../../db/config-sequelize'

const productController = {
  getProducts: async (req, res) => {
    try {
      // Products with pagination
      const pageAsNumber = Number.parseInt(req.query.page)
      const sizeAsNumber = Number.parseInt(req.query.size)

      let page = 0
      if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        page = pageAsNumber
      }

      let size = 10
      if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10) {
        size = sizeAsNumber
      }

      const products = await productModel.findAndCountAll({
        limit: size,
        offset: page * size,
      })
      res.json({
        status: 'success',
        totalPages: Math.ceil(products.count / size),
        products: products.rows,
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  getProductsByCategory: async (req, res) => {
    try {
      const products = await productCategoryModel.findOne({
        where: { id: req.params.id },
        include: [{ association: 'productsCat' }],
      })

      res.json({
        status: 'success',
        result: products.length,
        products: products,
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  createProduct: async (req, res) => {
    try {
      const {
        productStoreId,
        productName,
        price,
        information,
        imageUrl,
        isActive,
        productCategoryId,
        stock,
      } = req.body
      if (!imageUrl) return res.status(400).json({ msg: 'No image upload' })

      const findProduct = await productModel.findOne({
        where: {
          productStoreId: productStoreId,
        },
      })

      if (findProduct) return res.status(400).json({ msg: 'This product already exists.' })

      const createNewProduct = new productModel({
        productStoreId,
        productName: productName.toLowerCase(),
        price,
        information,
        imageUrl,
        isActive,
        productCategoryId,
        stock,
      })
      await createNewProduct.save()
      res.json({ msg: 'Created a product' })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await productModel.destroy({ where: { id: req.params.id } })
      res.json({ msg: 'Deleted a Product' })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  updateProduct: async (req, res) => {
    try {
      const {
        productStoreId,
        productName,
        price,
        information,
        imageUrl,
        isActive,
        productCategoryId,
        stock,
      } = req.body
      if (!imageUrl) return res.status(400).json({ msg: 'No image upload' })

      await productModel.update(
        {
          productStoreId,
          productName,
          price,
          information,
          imageUrl,
          isActive,
          productCategoryId,
          stock,
        },
        { where: { id: req.params.id } },
      )

      res.json({ msg: 'Updated a Product' })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  updateStockProduct: async (products) => {
    try {
      const newProd = [products]

      newProd.forEach(async (product) => {
        const productFromDb = await productModel.findOne({
          where: { id: product.productId },
        })

        await productModel.update(
          { stock: productFromDb.stock - product.quantity },
          { where: { id: product.productId } },
        )
      })
    } catch (err) {
      return err.message
    }
  },

  updateProductStatus: async (req, res, transaction) => {
    const localTransaction = transaction ? transaction : await sequelize.transaction()
    try {
      const { id, isActive } = req.body

      await productModel.update(
        { isActive: !isActive },
        { where: { id: id }, transaction: localTransaction },
      )

      res.json({ msg: 'Updated a Product' })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },

  like: async (req, res) => {
    try {
      const { userId, productId, likeValue } = req.body

      const findLikeValue = await likeModel.findOne({
        where: {
          productId: productId,
          userId: userId,
        },
      })

      if (!findLikeValue) {
        const addNewLike = new likeModel({
          userId,
          productId,
          likeValue,
        })

        await addNewLike.save()
        return res.status(200).json({ msg: 'Like has been added to this product' })
      } else {
        await likeModel.update(
          { likeValue: !findLikeValue.likeValue },
          {
            where: {
              productId: productId,
              userId: userId,
            },
          },
        )
        return res.status(200).json({ msg: 'Like has been added to this product' })
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message })
    }
  },
}

export default productController
