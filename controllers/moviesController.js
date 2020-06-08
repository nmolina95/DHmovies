const db = require('../database/models/index');
const Movie = db.Movie;

let moviesController = {
    list: (req, res) => {
        Movie.findAll()
            .then(results => {
                let moviesAll = results;
                return res.render('movies', { moviesAll });
            })
            .catch(error => {
                console.log(error);
            })
    },
    detail: (req, res) => {
        Movie.findByPk(req.params.id)
            .then(results => {
                let moviePK = results;
                return res.render('details', { moviePK });
            })
            .catch(error => {
                console.log(error);
            });
    },
    new: (req, res) => {
        Movie.findAll({
            order: [["release_date", "DESC"]],
            limit: 5,
        })
            .then(results => {
                let newMovies = results;
                return res.render('new', { newMovies });
            })
            .catch(error => {
                console.log(error);
            });
    },
    recommended: (req, res) => {
        Movie.findAll({
            where: {
                rating: { [db.Sequelize.Op.gte]: 8 },
            },
        })
            .then(results => {
                let recommended = results;
                return res.render('recommended', { recommended });
            })
            .catch(error => {
                console.log(error);
            });
    },
    search: (req, res) => {
        return res.render('search');
    },
    searchResult: (req, res) => {
        Movie.findAll({
            where: {
                title: { [db.Sequelize.Op.like]: "%" + req.body.search + "%" },
            },
            order: [[req.body.order, "ASC"]],
        })
            .then((results) => {
                let searchResults = results;
                return res.render("searchResultado", { searchResults });
            })
            .catch((error) => {
                console.log(error);
            });
    }
};

module.exports = moviesController;