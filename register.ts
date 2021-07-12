import {
  emailRegex,
  fullNameRegex,
  usernameRegex,
  passwordRegex,
} from "./../utils";
import {functions, auth, firestore} from "../firebase";
import {RegisterData} from "../types/callable";
const {HttpsError} = functions.https;

export default functions.https.onCall(async (data, context) => {
  // User must not be logged in or must be an admin if logged in
  if (context.auth?.token?.admin === true || !context.auth?.uid) {
    const {fullName, email, username, password} = (data || {}) as RegisterData;
    if (
      !emailRegex.test(email) ||
      !fullNameRegex.test(fullName) ||
      usernameRegex.test(username) ||
      passwordRegex.test(password)
    )
      throw new HttpsError(
        "invalid-argument",
        "Please re-check your entered information!",
      );

    try {
      // Make sure the email is not linked with any account
      try {
        const user = await auth.getUser(email);
        if (user?.uid) throw "email";
      } catch (error) {
        if (error === "email") throw error;
        // Ignore any other errors as an error will be thrown
        // only if the email is already linked with an account
      }
      const snapshot = await firestore
        .collection("users")
        .where("username", "==", username)
        .get();
      if (!snapshot.empty) throw "username";
      const user = await auth.createUser({
        disabled: false,
        displayName: fullName,
        email,
        emailVerified: false,
        password,
      });
      const ref = firestore.collection("users").doc(user.uid);
      await ref.set({username}); // Overwrite any existing data

      try {
        const token = await auth.createCustomToken(user.uid);
        return {
          code: "success",
          message: "Signed up successfully!",
          token,
        };
      } catch {
        throw "token";
      }
    } catch (err) {
      functions.logger.error(
        "Could not create user (" + email + ")<" + username + ">!",
      );
      functions.logger.error("Error:", err);
      if (err === "username")
        throw new HttpsError("unavailable", "This username is not available!");
      else if (err === "email")
        throw new HttpsError(
          "already-exists",
          "This email is already linked with another account!",
        );
      else if (err === "token")
        throw new HttpsError(
          "data-loss",
          "Your account was create but we could not sign you in try signing in",
        );
      throw new HttpsError("internal", "The server has encountered an error!");
    }
  } else
    throw new HttpsError(
      "permission-denied",
      "Insufficient permissions to perform this action!",
    );
});
