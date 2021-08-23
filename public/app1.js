// Show Password
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// console.log(firebase)

// signup
let register = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loader = document.getElementById("loader");
    let selType = document.getElementById("selType");
    let loaderText = document.getElementById("loaderText");
    loaderText.style.display = "none";
    loader.style.display = "block";



    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`admin/${res.user.uid}`).set({
                username: username.value,
                email: email.value,
                password: password.value,
            })
                .then(() => {
                    let successDiv = document.getElementById("successDiv");
                    successDiv.innerHTML = "Uer register successfully";
                    successDiv.style.display = "block";
                    errorDiv.style.display = "none";
                    username.value = "";
                    email.value = "";
                    password.value = "";
                    loaderText.style.display = "block";
                    loader.style.display = "none";
                    setTimeout(
                        () => {
                            window.location = "login.html"
                        }, 1500)
                })

        })
        .catch((err) => {
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block";
            loaderText.style.display = "block";
            loader.style.display = "none";
        });


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`admin/${res.user.uid}`).set({
                username: username.value,
                email: email.value,
                password: password.value,
                selType: selType.value
            })
                .then(() => {
                    let successDiv = document.getElementById("successDiv");
                    successDiv.innerHTML = "Uer register successfully";
                    successDiv.style.display = "block";
                    errorDiv.style.display = "none";
                    username.value = "";
                    email.value = "";
                    password.value = "";
                    loaderText.style.display = "block";
                    loader.style.display = "none";
                    setTimeout(
                        () => {
                            window.location = "login.html"
                        }, 1500)

                })

        })
        .catch((err) => {
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block";
            loaderText.style.display = "block";
            loader.style.display = "none";
        });
}

// login
let login = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loader = document.getElementById("loader");
    let signupText = document.getElementById("loaderText");
    loaderText.style.display = "none";
    loader.style.display = "block";
    // console.log(email.value, password.value);
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let successDiv = document.getElementById("successDiv");
            successDiv.innerHTML = "Uer login successfully";
            successDiv.style.display = "block";
            errorDiv.style.display = "none";
            email.value = "";
            password.value = "";
            loaderText.style.display = "block";
            loader.style.display = "none ";
            setTimeout(
                () => {
                    window.location = "profile.html"
                }, 1500);


        })
        .catch((err) => {
            console.log("err ==== >", err.message)
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block";
            loaderText.style.display = "block";
            loader.style.display = "none";
        });
}
// signup
let register1 = () => {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loader = document.getElementById("loader");
    let selType = document.getElementById("selType");
    let loaderText = document.getElementById("loaderText");
    loaderText.style.display = "none";
    loader.style.display = "block";



    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`user/${res.user.uid}`).set({
                username: username.value,
                email: email.value,
                password: password.value,
            })
                .then(() => {
                    let successDiv = document.getElementById("successDiv");
                    successDiv.innerHTML = "Uer register successfully";
                    successDiv.style.display = "block";
                    errorDiv.style.display = "none";
                    username.value = "";
                    email.value = "";
                    password.value = "";
                    loaderText.style.display = "block";
                    loader.style.display = "none";
                    setTimeout(
                        () => {
                            window.location = "login.html"
                        }, 1500)
                })

        })
        .catch((err) => {
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block";
            loaderText.style.display = "block";
            loader.style.display = "none";
        });


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`user/${res.user.uid}`).set({
                username: username.value,
                email: email.value,
                password: password.value,
                selType: selType.value
            })
                .then(() => {
                    let successDiv = document.getElementById("successDiv");
                    successDiv.innerHTML = "Uer register successfully";
                    successDiv.style.display = "block";
                    errorDiv.style.display = "none";
                    username.value = "";
                    email.value = "";
                    password.value = "";
                    loaderText.style.display = "block";
                    loader.style.display = "none";
                    setTimeout(
                        () => {
                            window.location = "login.html"
                        }, 1500)

                })

        })
        .catch((err) => {
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block";
            loaderText.style.display = "block";
            loader.style.display = "none";
        });
}

// login 2
let login2 = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loader = document.getElementById("loader");
    let signupText = document.getElementById("loaderText");
    loaderText.style.display = "none";
    loader.style.display = "block";
    // console.log(email.value, password.value);
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let successDiv = document.getElementById("successDiv");
            successDiv.innerHTML = "Uer login successfully";
            successDiv.style.display = "block";
            errorDiv.style.display = "none";
            email.value = "";
            password.value = "";
            loaderText.style.display = "block";
            loader.style.display = "none ";
            setTimeout(
                () => {
                    window.location = "user.html"
                }, 1500);


        })
        .catch((err) => {
            console.log("err ==== >", err.message)
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = err.message;
            errorDiv.style.display = "block";
            loaderText.style.display = "block";
            loader.style.display = "none";
        });
}
// add dish
let addTodo = () => {
    let todo = document.getElementById("todo");
    let list = document.getElementById("list");
    let price = document.getElementById("price");

    firebase.database().ref('todos').push({ todo: todo.value, price: price.value });
    todo.value = "";
    price.value = "";

}

firebase.database().ref('todos').on('child_added', (data) => {
    // console.log(data.val());
    let list = document.getElementById("list");
    list.innerHTML += `
    <li>
    <center>
    <div class="list-card">
        <div>
        ${"Dish = " + data.val().todo}
        <br/>
        ${"Price = " + data.val().price}
        </div>
        <div>
            <button  onclick="delTodo('${data.key}')"  type="button" class="btn btn1 btn-danger">Delete</button>
        </div>
    </div>
</li>
</center>`

})
let addTodos = () => {
    let todo = document.getElementById("todo");
    let list = document.getElementById("list1");
    let price = document.getElementById("price");

    firebase.database().ref('todos').push({ todo: todo.value, price: price.value });
    todo.value = "";
    price.value = "";

}

firebase.database().ref('todos').on('child_added', (data) => {
    // console.log(data.val());
    let list = document.getElementById("list1");
    list1.innerHTML += `
    <li>
    <center>
    <div class="list-card">
        <div>
        ${"Dish = " + data.val().todo}
        <br/>
        ${"Price = " + data.val().price}
        </div>
        <button type="button" class="btn btn1 btn-outline-success mt-20">Add to cart</button>
    </div>
</li>
</center>`
console.log(data.val())
})
// Delete All 
let delAll = () => {
    firebase.database().ref('todos').remove()
    todo.value = "";
    let list = document.getElementById("list");
    list.innerHTML = ""
}
let delTodo = (key) => {
    firebase.database().ref(`dishes/${key}`).remove();
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
}

// addd resturant
let addResturant = () => {
    let resturant = document.getElementById("resturant");
    let list = document.getElementById("list");
    let price = document.getElementById("price");

    firebase.database().ref('resturant').push({ resturant: resturant.value });
    resturant.value = "";
}
// ${ data.val().dish}

firebase.database().ref('resturant').on('child_added', (data) => {
    // console.log(data.val());
    let fit = document.getElementById("fit");
    fit.innerHTML += `
    <div class="row mx-4 justify-content-center">
                            <div class="col-4">
                                <div class="card ps-2 pt-5 pe-2 text-center" style="width: 23rem;">
                                    <div class="card-body">
                                        <p class="mt-4" style="font-weight: bold; color: #2097FC;"> ${data.val().resturant}</p>
                                        <p class="card-text"
                                            style="padding-top:2px; line-height: 21px; color: #5c6266;">Lorem
                                            ipsum
                                            dolor sit amet consectetur adipisicing elit. Provident iste vero quisquam!
                                            Non incidunt iste assumenda exercitationem earum aliquid velit maiores nemo,
                                            asperiores quas saepe consectetur veniam eaque fugit aperiam.</p>
                                        <a href="list.html"> <button class="btn btn-primary">Add Dish</button></a>
                                        <button onclick="delDish()" class="btn btn-danger">Delete Resturant</button>
                                    </div>
                                </div>
                            </div>

                        </div>`
    console.log(data.val())

})
// del resturant
let delDish = (key) => {
    firebase.database().ref(`resturant/${key}`).remove();
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
}