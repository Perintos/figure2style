# Figures2style

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Install all Cordova
utiliser cet commande pour installer cordova sur le PC.
```npm i cordova -g```

## Installer andoid studio
Télécharger le jdk11 de JAVA : 
```https://jdk.java.net/java-se-ri/11```

Configurer la variable d'environnement :
```JAVA_HOME=C:\Program Files\Java\jdk-11```

## Installer andoid studio
Installer android studio via ce lien.
```https://developer.android.com/studio```
Dans le sdk manager choisir le Android SDK Build-Tools 30.0.3 :
```android studio > apk manager > sdk tools > SDK android Build Tools```

Initialiser deux varibales d'environnements comme dans l'exemple suivant : 
```ANDROID_HOME=C:\Users\Perintos\AppData\Local\Android\Sdk ```
```ANDROID_SDK_ROOT=C:\Users\Perintos\AppData\Local\Android\Sdk```

### installer apkanalyzer 
Utiliser android studio pour installer apk analyzer :
```android studio > apk manager > sdk tools > android sdk coommand line tool (latest)```

ajouter le pathing dans la variable d'environnement path : 
```C:\Users\Perintos\AppData\Local\Android\Sdk\cmdline-tools\latest\bin```

### Préparer l'appeil physique
paramêtres > A propos du téléphone > Informations logiciel > Numéro de version (apopuyer 7 fois)
paramêtres > Options de développement > activer déboggage USB


### Générer une applis viable pour le play store
Utiliser cette commande pour générer une clès de signature de l'applis
```keytool -genkey -alias mykey -keyalg RSA -keystore mykey.jks -keysize 3000 -validity 10000```
Générer un apk viable pour le play store
```cordova build android --release --buildconfig```
TODO relever le niveau d'api android pour une éligibilité play store