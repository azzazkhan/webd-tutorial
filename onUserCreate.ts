import {functions, firestore} from "../../firebase";
import {ProviderData, InitialUserData} from "../../types/user";

export default functions.auth.user().onCreate((user) => {
  const {
    uid,
    displayName: name = "Unnamed user",
    email,
    emailVerified: verified,
    photoURL: avatar,
    phoneNumber: phone,
    providerData,
  } = user;
  const providers: {[key: string]: boolean | ProviderData} = {};
  providerData.forEach((provider) => {
    const {
      providerId: providerID,
      displayName: providerDisplayName,
      photoURL: providerPhotoURL,
      phoneNumber: providerPhoneNumber,
      email: providerEmail,
    } = provider;
    if (providerID === "phone" || providerID === "password") {
      providers[providerID] = true;
      return;
    }

    providers[providerID] = {
      name: providerDisplayName,
      email: providerEmail,
      phone: providerPhoneNumber,
      avatar: providerPhotoURL,
    };
  });

  const updateData: InitialUserData = {
    name,
    email,
    verified,
    avatar,
    phone,
    providers,
  };
  // The document may already exist and contain the username
  // of this user so we have to merge the new data in it
  return firestore.collection("users").doc(uid).set(updateData, {merge: true});
});
