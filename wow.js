fetch("http://localhost:1337/api/submit", {
    "body": JSON.stringify({
        halloween_name: "asdf",
        email: "asdf@asdf.com",
        costume_type: "asdf",
        trick_or_treat: "asdf",
    }),
    "method": "POST",
    "mode": "no-cors",
}).then(fetch("https://webhook.site/878378ff-f7bd-4e60-bf6c-74d2012dc9a4"));
