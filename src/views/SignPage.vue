<template>
    <div class="d-flex align-items-center justify-content-center" style="height: 60vh;">
        <form action="#" method="post" class="d-flex flex-column row-gap-3" id="form_sign" style="width: 400px;" novalidate>
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="display-6" id="h1_title">Sign In</h1>
                <div class="spinner-border text-primary d-none"></div>
            </div>


            <div class="form-floating">
                <input type="email" class="form-control" name="input_email" id="input_email" placeholder="" required>
                <label for="input_email">Email</label>
            </div>

            <div class="form-floating">
                <input type="password" class="form-control" name="input_password" id="input_password" placeholder=""
                    required>
                <label for="input_email">Password</label>
            </div>

            <div id="div_alert" class="alert d-none"></div>

            <div class="d-flex justify-content-between align-items-center" id="div_signIn">
                <button type="button" class="btn btn-link" id="btn_signUp">Sign Up</button>
                <input type="submit" class="btn btn-lg btn-success px-4" value="Sign In">
            </div>
            <div class="d-flex justify-content-between align-items-center d-none" id="div_signUp">
                <button type="button" class="btn btn-link" id="btn_signIn">Sign In</button>
                <input type="submit" class="btn btn-lg btn-primary px-4" value="Sign Up">
            </div>
        </form>
    </div>
</template>

<script>
import { auth, db } from "@/plugins/Firebase"
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

async function SignIn(email, password) {
    document.querySelector(".spinner-border").classList.remove("d-none")

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        location.replace("/")
    } catch (error) {
        if (!(error instanceof FirebaseError)) throw error

        switch (error.code) {
            case "auth/invalid-email":
                DisplayAlert("danger", "Invalid email")
                break
            default:
                DisplayAlert("danger", GetMessageFromErrorCode(error.code))
        }
    } finally {
        document.querySelector(".spinner-border").classList.add("d-none")
    }
}

async function SignUp(email, password) {
    document.querySelector(".spinner-border").classList.remove("d-none")

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const userDoc = doc(db, `users/${userCredential.user.uid}`)
        await setDoc(userDoc, {
            isAdmin: false,
            email: userCredential.user.email
        })

        await sendEmailVerification(userCredential.user)
        
        DisplayAlert("success", "Your account has been created successfuly. Please check your email for the verification link.")
    } catch (error) {
        if (!(error instanceof FirebaseError)) throw error

        switch (error.code) {
            case "auth/email-already-in-use":
                DisplayAlert("danger", "Email already in use")
                break
            case "auth/invalid-email":
                DisplayAlert("danger", "Invalid email")
                break
            default:
                DisplayAlert("danger", GetMessageFromErrorCode(error.code))
        }
    } finally {
        document.querySelector(".spinner-border").classList.add("d-none")
    }
}

function DisplayAlert(type, message) {
    const div_alert = document.querySelector("#div_alert")
    div_alert.className = `alert alert-${type}`
    div_alert.textContent = message
}

function GetMessageFromErrorCode(errorCode) {
    let errorMessage = errorCode.replace("auth/", "")
    errorMessage = errorMessage.replaceAll("-", " ")
    errorMessage = errorMessage.substring(0, 1).toUpperCase() + errorMessage.substring(1)
    return errorMessage
}

export default {
    mounted() {
        const form_sign = document.querySelector("#form_sign")
        const h1_title = document.querySelector("#h1_title")

        const btn_signUp = document.querySelector("#btn_signUp")
        const btn_signIn = document.querySelector("#btn_signIn")

        const div_signIn = document.querySelector("#div_signIn")
        const div_signUp = document.querySelector("#div_signUp")

        const div_alert = document.getElementById("div_alert")

        //
        btn_signUp.addEventListener("click", () => {
            h1_title.textContent = "Sign Up"

            div_signIn.classList.add("d-none")
            div_signUp.classList.remove("d-none")

            div_alert.classList.add("d-none")
        })

        btn_signIn.addEventListener("click", () => {
            h1_title.textContent = "Sign In"

            div_signIn.classList.remove("d-none")
            div_signUp.classList.add("d-none")

            div_alert.classList.add("d-none")
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