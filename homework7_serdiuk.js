
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];


var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

function filterEmails(arr) {
    var trustedEmails = [];
    for (var i = 0; i < arr.length; i++) {
        var email = arr[i].email;
        if (emailRegex.test(email)) {
            trustedEmails.push(email);
        }
    }
    return trustedEmails;
}

var trustedEmails = filterEmails(arr);

console.log(trustedEmails); 
