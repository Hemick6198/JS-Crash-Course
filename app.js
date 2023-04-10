let users = [
    {
        username: "David",
        email: "david@fes.com",
        password: "test123",
        subscriptionStatus: "VIP",
        discordId: "David Bragg#0001",
        lessonsCompleted: [0, 1],
    }
]

function register(user) {``
    users.push(user);
}

register({
    username: "than",
    email: "ethan.nordahl1@gmail.com",
    password: "123",
    subscriptionStatus: "VIP",
    discordId: "than#001",
    lessonsCompleted: [0, 1]
});

console.log(users);
