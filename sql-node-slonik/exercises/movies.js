const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your movies queries
    async q9() {
        return await db.query( sql`
        SELECT title FROM movies WHERE title IS NOT NULL
        `)
        // README - Movies.9
    },

    async q10() {
        return await db.query( sql`
        SELECT title, mpaa_rating FROM movies WHERE mpaa_rating IS NOT NULL
        `)
        // README - Movies.10
    },

    async q11() {
        return await db.query( sql`
        SELECT title, production_budget, distributor
        FROM movies
        WHERE production_budget < 500000
        `)
        // README - Movies.11
    },

    async q12() {
        return await db.query( sql`
        SELECT title, major_genre, production_budget 
        FROM movies
        WHERE production_budget IS NOT NULL
        ORDER BY production_budget DESC
        LIMIT 10
        `)
        // README - Movies.12
    },

    async q13() {
        return await db.query( sql`
        SELECT title, source FROM movies WHERE source = 'Remake'
        `)
        // README - Movies.13
    },

    async q14() {
        return await db.query( sql`
        SELECT title, distributor, imdb_rating FROM movies WHERE imdb_rating IS NOT NULL
        `)
        // README - Movies.14
    },

    async q15() {
        return await db.query( sql`
        SELECT title, rotten_tomatoes_rating 
        FROM movies
        WHERE rotten_tomatoes_rating IS NOT NULL
        ORDER BY rotten_tomatoes_rating DESC
        LIMIT 100
        `)
        // README - Movies.15
    },

    async q16() {
        return await db.query( sql`
        SELECT title, major_genre, imdb_rating, imdb_votes
        FROM movies
        WHERE imdb_rating IS NOT NULL AND imdb_votes IS NOT NULL
        ORDER BY imdb_rating DESC, imdb_votes DESC
        `)
        // README - Movies.16
    },

    async q17() {
        const result17 = await db.query(sql`
        SELECT SUM(production_budget)
        FROM movies
        WHERE mpaa_rating = 'Not Rated' AND title IS NOT NULL
        `)
        return result17.rows         
        // README - Movies.17
    },

    async q18() {
        return await db.query( sql`
        SELECT title, release_date 
        FROM movies
        WHERE release_date > CURRENT_DATE
        ORDER BY release_date DESC
        `)
        // README - Movies.18
    },

    async q19() {
        return await db.query( sql`
        SELECT title, us_gross, release_date 
        FROM movies
        WHERE release_date BETWEEN '1950-01-01' AND '1980-12-31'
        `)
        // README - Movies.19
    },

    async q20() {
        return await db.query( sql`
        SELECT title, us_gross, worldwide_gross
        FROM movies
        WHERE us_gross = 0 OR worldwide_gross = 0
        `)
        // README - Movies.20
    },

    async q21() {
        return await db.query( sql`
        SELECT title, us_gross, worldwide_gross
        FROM movies
        ORDER BY us_gross
        LIMIT 50
        `)
        // README - Movies.21
    },

    async q22() {
        return await db.query( sql`
        SELECT title, source
        FROM movies 
        WHERE title LIKE 'F%'
        `)
        // README - Movies.22
    },

    async q23() {
        return await db.query( sql`
        SELECT distributor, production_budget, creative_type, major_genre
        FROM movies
        WHERE production_budget > 10000000 
        AND distributor = 'Sony Pictures'
        `)
        // README - Movies.23
    },
}