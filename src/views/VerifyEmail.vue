<template>
    <div class="d-flex align-items-center justify-content-center" style="height: 60vh;">
        <form action="#" method="post" class="d-flex flex-column row-gap-3" style="width: 400px;" novalidate>
            <div class="d-flex justify-content-between align-items-center">
                <h1 class="display-6" id="h1_title">Email Verification</h1>
                <div class="spinner-border text-primary d-none"></div>
            </div>

            <div class="form-floating">
                <input type="email" class="form-control" name="input_email" id="input_email" placeholder="" required>
                <label for="input_email">Email</label>
            </div>

            <div id="div_alert" class="alert d-none"></div>

            <div class="d-flex justify-content-between align-items-center">
                <a href="/SignPage" class="btn btn-link">Sign In</a>
                <input type="submit" class="btn btn btn-success px-4" value="Resend Email Verification Link">
            </div>
        </form>
    </div>
</template>

<script>
import { auth, db } from "@/plugins/Firebase"
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

async function SendEmailVerificationLink(user) {
    document.querySelector(".spinner-border").classList.remove("d-none")

    try {
        await sendEmailVerification(user)
        
        DisplayAlert("success", "A verification link has been sent to your email.")
    } catch (error) {
        if (!(error instanceof FirebaseError)) throw error
        DisplayAlert("danger", GetMessageFromErrorCode(error.code))
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
        const form = document.querySelector("form")
        
        form.addEventListener("submit", async e => {
            e.preventDefault();
            await SendEmailVerificationLink(auth.currentUser)

            let timer = 1
            e.submitter.disabled = true
            const intervalId = setInterval(() => {
                e.submitter.value = `${60 - timer}s until resend another link`
                timer++

                if (timer > 60) {
                    e.submitter.value = `Resend Email Verification Link`
                    e.submitter.disabled = false
                    clearInterval(intervalId)
                }
            }, 1000);

        })
    }
}
</script>