import api from '../../service/api.js'
class MovieController {
  async searchByTitle(req, res) {
    const { title, year, type, } = req.body;

    try {

      const { data } = await api.get(`?apikey=${process.env.API_KEY}&s=${title}${year}${type}`)
      return res.status(200).json({ data })
    } catch (e) {
      console.log(e)
    }
    return res.status(200).json({ msg: "request failed" })
  }

  async searchByYear(req, res) {
    try {
      const { data } = await api.get(`?apikey=${process.env.API_KEY}&y=${req.params.year}`)
      return res.status(200).json({ data })
    } catch (e) {
      console.log(e)
    }
    return res.status(200).json({ msg: "request failed" })

  }
}

export default new MovieController()