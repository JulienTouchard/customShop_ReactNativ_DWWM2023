
# REACTNative DWWM CEPPIC/CCI 2023

Creation d'un projet de boutique en ligne Préalablement réalisé sous ReactJS. Pour des raisons matériel ce projet sera excusivement destiné aux supports Android.

La version de REACTNative utilisée pour le projet est 0.72 (au 31/08/23). L'environnement de developpement sera Windows et l'IDE VSCode. Les versions ultérieurs demanderont certainement des ajustements (N° de version, variables d'environnement, etc..). Ne soyez donc pas surpris et adaptez.


## Installation

- NodeJS

    Pour réaliser ce projet nous aurons besoin en priorité de l'ecosystème NodeJS et de sont gestionnaire de Paquet NPM.
    Rendez-vous à l'adresse suivante :

    [https://nodejs.org/fr/download](https://nodejs.org/fr/download)

    Installez la dernière version stable sans l'option cholatey.

- Android Studio

    Installez ensuite la dernière version d'Android Studio :

    [https://developer.android.com/studio](https://developer.android.com/studio)

    Acceptez toutes les licences demandées lors de l'installation puis lancez-le.
    A l'ouverture de la fenêtre "Welcom to Android Studio" ouvrez le menu "More Actions" et selectionnez "SDK Manager". Ce dernier vous permettra d'installer la (ou les) version d'Android correspondante. Acceptez aussi la licence de la version installée.
    Pour la prochaine étape retournez sur la fenetre d'ouverture et selectionnez cette fois dans le menu More actions l'option "Virtual device Manager". Supprimer l'émulateur par défaut et créez un nouveau correspondant à la version d'Android précédement installée à partir de l'appareil de votre choix.

- Java JDK (au 31/08/23)

    Installez la version 11.0.19 du JDK Java que vous pourrez trouvre à l'adresse suivante : 

    [jdk-11.0.19_windows-x64_bin.exe](https://www.oracle.com/fr/java/technologies/javase/jdk11-archive-downloads.html)

- REACT Native

    Ouvrez un terminal à partir de VSCode (Ctrl+ù) et installez create react native:

    ```npm i -g create-react-native-app```

    

    
## Environment Variables

Pour tester ce projet et le compiler vous aurez besoin d'éditer les variables d'environnement du Sytème (ici windows 11). Pour cela : 
- Faites un click droit sur votre menu demarer.
- Selectionnez "Système".
- Ouvrez "Parametres avancés du systeme".
- Cliquez sur "Variables d'environnement..."
- Dans la fenetre "Variables Systeme" cliquez sur "Nouvelle..."
- La première devra avoir pour nom "ANDROID_HOME" et pour valeur "C:\Users\votre_nom_d_utilisateur\AppData\Local\Android\Sdk".
- La seconde "JAVA_HOME" et "C:\Program Files\Java\jdk-11"
- Enfin vous devrez ajouter un nouvelle entrée à la variable Path : "C:\Users\votre_nom_d_utilisateur\AppData\Local\Android\Sdk\platform-tools"



## New Project

Pour créer un nouveau projet (ne créez pas de nouveau dossier manuellement!) :

    npx react-native@latest init nom_de_votre_projet

Pour l'ouvrir dans votre virtual device (Android) :


    cd nom_de_votre_projet
    npm run android

Vous pouvez maintenant éditer le fichier app.tsx, créer de nouveaux components, etc.
## Deployment

Pour installer le projet du repository :

- Télechargez l'archive.
- Restaurer le node_module à partir du terminal :

```bash
  npm update
```


## Documentations

[https://reactnative.dev/](https://reactnative.dev/)

[https://reactnativepaper.com/](https://reactnativepaper.com/)

[https://docs.swmansion.com/react-native-reanimated/](https://docs.swmansion.com/react-native-reanimated/)


