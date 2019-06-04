import { Platform } from "react-native";

export default class MyAdsManager {
  //Card Placement ID
  static getNativeCardAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "2353271314900825_2358659917695298";
    } else {
      id = "2353271314900825_2354566601437963";
    }
    return id;
  }

  //Interstial ad clicked after back
  static getBackInterstialAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "";
    } else {
      id = "2353271314900825_2354568361437787";
    }
    return id;
  }

  // Home Interstial Ad
  static getHomeInterstialId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_233189657437409";
    } else {
      id = "199374900818885_233201447436230";
    }
    return id;
  }

  static getAdmobAdAppId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "ca-app-pub-1430359203408461~8424774069";
    } else {
      id = "ca-app-pub-1430359203408461~1170926382";
    }
    return id;
  }

  static getAdmobRewardVideoId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "ca-app-pub-1430359203408461/8734112864";
    } else {
      id = "ca-app-pub-1430359203408461/3771213183";
    }
    return id;
  }

  static getAdmobPremiumInterstialAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "ca-app-pub-1430359203408461/5459268173";
    } else {
      id = "ca-app-pub-1430359203408461/1192720103";
    }
    return id;
  }

  static getOs() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "ios";
    } else {
      id = "android";
    }
    return id;
  }

  static getHomeBannerId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_292601511496223";
    } else {
      id = "199374900818885_212140432875665";
    }
    return id;
  }

  // Result Interstial Ad
  static getResultInterstialId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_233189657437409";
    } else {
      id = "199374900818885_202439893845719";
    }
    return id;
  }

  static getResultBannerId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_292601511496223";
    } else {
      id = "199374900818885_202434300512945";
    }
    return id;
  }

  static getHomeToolbarId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_316984099057964";
    } else {
      id = "199374900818885_316985699057804";
    }
    return id;
  }

  //ResultToolBar
  static getResultToolbarId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_316984679057906";
    } else {
      id = "199374900818885_316985825724458";
    }
    return id;
  }
  //UserInfoScreenBanner
  static getUserInfoScreenBannerId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_316985052391202";
    } else {
      id = "199374900818885_316985959057778";
    }
    return id;
  }

  //HashtagEditScreenBanner
  static getHashtagEditScreenId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_316985199057854";
    } else {
      id = "199374900818885_316986152391092";
    }
    return id;
  }

  //Home Native Square Ad
  static getHomeSquareAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_292601511496223";
    } else {
      id = "199374900818885_354536988636008";
    }
    return id;
  }

  //Result Below Image
  static getResultBelowImageAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354537741969266";
    } else {
      id = "199374900818885_354537931969247";
    }
    return id;
  }

  //Result Above Hashtags
  static getResultAboveHastagsAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354538168635890";
    } else {
      id = "199374900818885_354538175302556";
    }
    return id;
  }

  //Result Below Hashtags
  static getResultBelowHastagsAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354538438635863";
    } else {
      id = "199374900818885_354538411969199";
    }
    return id;
  }

  //Result Edit Hashtags
  static getEditHastagsAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354538845302489";
    } else {
      id = "199374900818885_354538898635817";
    }
    return id;
  }

  //Success Top
  static getSuccessTopAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354539205302453";
    } else {
      id = "199374900818885_354539121969128";
    }
    return id;
  }

  //Success Between A
  static getSuccessBetweenAAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354539425302431";
    } else {
      id = "199374900818885_354539375302436";
    }
    return id;
  }

  //Success Between B
  static getSuccessBetweenBAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354539825302391";
    } else {
      id = "199374900818885_354539761969064";
    }
    return id;
  }

  //Success Bottom
  static getSuccessBottomAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354540108635696";
    } else {
      id = "199374900818885_354540135302360";
    }
    return id;
  }

  //Copy Interstial Ad
  static getCopyInterstialAdId() {
    let id = "";
    if (Platform.OS === "ios") {
      id = "199374900818885_354540688635638";
    } else {
      id = "199374900818885_354541088635598";
    }
    return id;
  }
}
