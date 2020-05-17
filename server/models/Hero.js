const mongoose = require('mongoose')

const schame = new mongoose.Schema({
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    banner: {
        type: String
    },
    title: {
        type: String
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
    scores: {
        difficult: {
            type: Number
        },
        skills: {
            type: Number
        },
        attack: {
            type: Number
        },
        survive: {
            type: Number
        }
    },
    skills: [{
        icon: {
            type: String
        },
        name: {
            type: String
        },
        delay: {
            type: String
        },
        cost: {
            type: String
        },
        discription: {
            type: String
        },
        tips: {
            type: String
        }
    }],
    items1: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    items2: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }],
    usageTips: {
        type: String
    },
    battleTips: {
        type: String
    },
    story: {
        type: String
    },
    partners: [{
        herp: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Hero'
        },
        discription: {
            type: String
        },

    }]
})

module.exports = mongoose.model('Hero', schame, 'heroes')