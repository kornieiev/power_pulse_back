const express = require('express') // создали веб-сервер
const morgan = require('morgan') // для логирования HTTP-запросов
const cors = require('cors') // позволяет браузеру разрешать кросс-доменные запросы
const mongoose = require('mongoose') // создает подключение к базе данных MongoDB
const usersRouters = require('./routes/usersRoutes')
const diaryRouters = require('./routes/diaryRoutes')
const exerciseRoutes = require('./routes/exercisesRoutes')
const productsRouter = require('./routes/productsRouter')
require('dotenv').config() // ищет в проекте файл .env и читает из него указанные в нем КЛЮЧ=значение
require('colors') // для подсвечивания информации выводимой в консоли

const {
	DB_ADMIN_NAME,
	DB_ADMIN_PASSWORD,
	DB_CLUSTER_NAME,
	DB_COLLECTION,
	PORT,
} = process.env // импорт значений из .env

const DB_HOST_NEW = `mongodb+srv://${DB_ADMIN_NAME}:${DB_ADMIN_PASSWORD}@${DB_CLUSTER_NAME}.mongodb.net/${DB_COLLECTION}` // адрес для подключения к БД
// console.log(DB_HOST_NEW)

const app = express() // создание веб-сервера

app.use(morgan('tiny')) // 'combined', 'common', 'short', 'tiny', 'dev'
app.use(cors())
app.use(express.json())

app.use('/users', usersRouters)
app.use('/products', productsRouter)
app.use('/exercises', exerciseRoutes)
app.use('/diary', diaryRouters)

app.use((_, res) => {
	res.status(404).json({ message: 'Route not found' })
})

app.use((err, req, res, next) => {
	const { status = 500, message = 'Server error' } = err
	res.status(status).json({ message })
})

mongoose //
	.connect(DB_HOST_NEW)
	.then(() => console.log('Database connection successful'.bold.italic.yellow))
	.then(() =>
		app.listen(PORT, () =>
			console.log(
				`Server is running. Use this API on port: ${PORT}`.bold.italic.yellow
			)
		)
	)
	.catch(err => {
		console.error(err.message)
		process.exit(1)
	})
