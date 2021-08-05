import { Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { RNS3 } from 'react-native-aws3';


//To check network connection
export function checkNetworkConnection() {
  return new Promise((resolve, reject) => {
    if (Platform.OS === "ios") {
      function handleFirstConnectivityChange(isConnected) {
        NetInfo.isConnected.removeEventListener("connectionChange", handleFirstConnectivityChange);
        resolve(isConnected);
      }
      NetInfo.isConnected.addEventListener("connectionChange", handleFirstConnectivityChange);
    } else {
      NetInfo.isConnected.fetch().then(isConnected => {
        resolve(isConnected);
      });
    }
  });
}

//To capitalize first letter
export function capitalizeFirstLetter(string) {
  if (string.trim().length > 0)
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function removeHTML(str) {
  return str.replace(/(<([^>]+)>)/ig, '');
}

//To upload image on aws s3-bucket
export function uploadImageToAws(file, location) {
  //S3-bucket config
  const options = {
    keyPrefix: "resto" + location,
    bucket: "delivery-app-stage",
    region: "ap-southeast-1",
    accessKey: "AKIAWK7HWGRLSFGQ3GNK",
    secretKey: "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",
    successActionStatus: 201
  }

  return RNS3.put(file, options).then(response => {
    if (response.status !== 201) {
      return { status: false, message: "Failed to upload image to S3" }
    }
    return { status: true, ...response.body };
  });
}
