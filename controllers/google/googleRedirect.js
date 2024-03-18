const axios = require('axios')
const queryString = require('querystring')

const { GOOGLE_CLIENT_ID, BASE_URL, GOOGLE_CLIENT_SECRET, FRONTEND_URL } =
	process.env

const googleRedirect = async (req, res) => {
	const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
	const urlObj = new URL(fullUrl)
	const urlParams = queryString.parse(urlObj.search)
	const code = urlParams.code

	console.log('code', code)

	const tokenData = await axios({
		url: `https://oauth2.googleapis.com/token`,
		method: 'post',
		data: {
			client_id: GOOGLE_CLIENT_ID,
			client_secret: GOOGLE_CLIENT_SECRET,
			redirect_uri: `${BASE_URL}/auth/google-redirect`,
			grant_type: 'authorization_code',
			code,
		},
	})

	const userData = await axios({
		url: 'https://www.googleapis.com/oauth2/v2/userinfo',
		method: 'get',
		headers: {
			Authorization: `Bearer ${tokenData.data.access_token}`,
		},
	})
	// userData.data.email
	// ...
	// ...
	// ...
	return res.redirect(`${FRONTEND_URL}?email=${userData.data.email}`)

	// return res.redirect(
	// 	`${process.env.FRONTEND_URL}?accessToken=${accessToken}`
	// )
}

module.exports = googleRedirect
