package com.horoscope.ganeshaspeak;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import suraj.tiwari.reactnativefbads.FBAdsPackage;
import cl.json.RNSharePackage;
import com.oblador.vectoricons.VectorIconsPackage; 
import io.invertase.firebase.RNFirebasePackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.messaging.RNFirebaseMessagingPackage;
import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import com.facebook.ads.AudienceNetworkAds; 
import java.util.Arrays;
import java.util.List;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return com.horoscope.ganeshaspeak.BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
            new FBSDKPackage(mCallbackManager),
            new FBAdsPackage(),
          
            
            new RNSharePackage(),
            new VectorIconsPackage(),    new RNFirebasePackage(),
     new SplashScreenReactPackage(), new RNFirebaseMessagingPackage(),
          new RNFirebaseNotificationsPackage(), new RNFirebaseAnalyticsPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      if (com.horoscope.ganeshaspeak.BuildConfig.DEBUG) {
        return "index";
      } else {
        return "main";
      }
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    AudienceNetworkAds.initialize(this); // <-- add this
    AppEventsLogger.activateApp(this); 
  }
}
