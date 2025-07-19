const express = require('express');
const router = express.Router();

//messages
let messages = [
    {
        id: 1,
        username: "Nigerian Prince",
        content: "Hey everyone! Just wanted to share some exciting news about our upcoming project launch. Can't wait to hear your thoughts!",
        added: new Date().toLocaleString(),
        avatar: "NP"
    },
    {
        id: 2,
        username: "Osapolo",
        content: "That sounds amazing Alice! I'm really looking forward to seeing what you've been working on. The team has been doing incredible work lately.",
        added: new Date().toLocaleString(),
        avatar: "O"
    },
    {
        id: 3,
        username: "Micheal Scofield",
        content: "Quick reminder that we have the team meeting tomorrow at 2 PM. Please come prepared with your weekly updates and any blockers you're facing.",
        added: new Date().toLocaleString(),
        avatar: "MS"
    },
    {
        id: 4,
        username: "David",
        content: "I just finished reviewing the latest designs and they look fantastic! The user experience flow is much smoother now. Great job team! 🎉",
        added: new Date().toLocaleString(),
        avatar: "D"
    },
    {
        id: 5,
        username: "Emma",
        content: "Has anyone encountered the bug with the login system? I'm getting some strange error messages when trying to authenticate users.",
        added: new Date().toLocaleString(),
        avatar: "E"
    },
    {
        id: 6,
        username: "Frank Martinez",
        content: "Emma, I think I know what's causing that issue. It's related to the session timeout. Let me send you a fix for that problem.",
        added: new Date().toLocaleString(),
        avatar: "FM"
    }
];
// gen avatar
function generateAvatar(username) {
    return username.split(' ').map(name => name[0]).join('').toUpperCase();
}

router.get('/', (req, res) => {
    res.render('index',{messages:messages});
});

router.post('/add-message', (req, res) => {
    const newMessage = {
        id: messages.length + 1,
        username: req.body.username,
        content: req.body.content,
        added: new Date().toLocaleString(),
        avatar: generateAvatar(req.body.username)
    };
    messages.unshift(newMessage);
    res.redirect('/');
});

module.exports = router;