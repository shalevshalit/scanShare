# Scan-Share
## Android

1. Create app with ionic 

```
ionic cordova build android --prod --release
```
2. Create key 

```
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
```

3. Copy released file to root path

```
cp ./platforms/android/build/outputs/apk/android-release-unsigned.apk android-release-unsigned.apk
```

4. Sign apk with **my-release-key.jks** and enter your password

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks android-release-unsigned.apk my-alias
```

5. Optimize app

```
 ~/Library/Android/sdk/build-tools/26.0.2/zipalign -f -v 4 android-release-unsigned.apk scanShare.apk
```

## IOS


1. Create app with ionic 

```
ionic cordova build ios --prod --release
```

2. Enter x-code and run **Product -> Archive**
3. Click Upload and follow the steps
