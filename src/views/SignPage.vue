<template>
    <div class="d-flex align-items-center justify-content-center" style="height: 90vh;">
        <form action="#" id="form_sign" novalidate style="width: 400px;">
            <h1 class="display-6" id="h1_title">Sign In</h1>
            <div class="mb-3">
                <label for="input_email">Email</label>
                <input type="email" class="form-control" name="input_email" id="input_email">
            </div>
            <div class="mb-3">
                <label for="input_email">Password</label>
                <input type="password" class="form-control" name="input_password" id="input_password">
            </div>
            
            <div id="div_alert" class="alert d-none"></div>

            <div class="d-flex justify-content-between align-items-center" id="div_signIn">
                <a href="#" class="btn text-decoration-underline text-priamry" id="a_signUp">Sign Up</a>
                <input type="submit" class="btn btn-lg btn-success px-4" value="Sign In">
            </div>
            <div class="d-flex justify-content-between align-items-center d-none"  id="div_signUp">
                <a href="#" class="btn text-decoration-underline text-priamry" id="a_signIn">Sign In</a>
                <input type="submit" class="btn btn-lg btn-success px-4" value="Sign Up">
            </div>
        </form>
    </div>
</template>

<script>
function SignIn(email, password) {
    console.log(email, password);
}

function SignUp(email, password) {
    console.log(email, password);
}

export default {
    mounted() {
        const form_sign = document.querySelector("#form_sign")
        const h1_title = document.querySelector("#h1_title")

        const a_signUp = document.querySelector("#a_signUp")
        const a_signIn = document.querySelector("#a_signIn")

        const div_signIn = document.querySelector("#div_signIn")
        const div_signUp = document.querySelector("#div_signUp")

        const div_alert = document.getElementById("div_alert")

        //
        a_signUp.addEventListener("click", ()=> {
            h1_title.textContent = "Sign Up"

            div_signIn.classList.add("d-none")
            div_signUp.classList.remove("d-none")
        })
        
        a_signIn.addEventListener("click", ()=> {
            h1_title.textContent = "Sign In"

            div_signIn.classList.remove("d-none")
            div_signUp.classList.add("d-none")
        })

        //
        form_sign.addEventListener("submit", e => {
            e.preventDefault();

            if (e.submitter.value.toLowerCase().replaceAll(" ", "_") === "sign_in") {
                SignIn(form_sign.input_email.value, form_sign.input_password.value)
            } else if (e.submitter.value === "Sign Up") {
                SignUp(form_sign.input_email.value, form_sign.input_password.value)
            }
        })
    }
}
</script>