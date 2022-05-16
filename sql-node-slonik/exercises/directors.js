const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your directors queries
    async q1() {
        const resultado =  await db.query( sql`
        SELECT name FROM directors WHERE name != ''
        `)
        return resultado.rows
        // README - Directors.1
    },

    async q2() {
        return await db.query( sql`
        SELECT query_name, nickname FROM directors
        `
        )
        // README - Directors.2
    },

    async q3() {
        return await db.query( sql`
        SELECT pic, nickname FROM directors WHERE nickname != '' 
        `
        )
        // README - Directors.3
    },

    async q4() {
        return await db.query( sql`
        SELECT query_name, nationality FROM directors WHERE nationality LIKE '%canadiense%'         `
        )
        // README - Directors.4
    },

    async q5() {
        return await db.query( sql`
        SELECT query_name, nationality FROM directors 
        WHERE nationality IN ('británica,estadounidense', 'estadounidense,británico')
        `)
        // README - Directors.5
    },

    async q6() {
        return await db.query( sql`
        SELECT query_name, nationality, roles FROM directors WHERE roles = 'ajedrecistas' 
        `)
        // README - Directors.6
    },

    async q7() {
        return await db.query( sql`
        SELECT query_name, name, nationality FROM directors WHERE nationality LIKE '%,%'
        `)
        // README - Directors.7
    },

    async q8() {
        return await db.query( sql`
        SELECT query_name, roles
        FROM directors
        WHERE roles LIKE '%,%,%'
        `)
        // README - Directors.8
    },
}