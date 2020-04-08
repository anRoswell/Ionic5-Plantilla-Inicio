Ionic 5
Plantilla de inicio para cualquier inicio de proyecto
Descripción: Plantilla de inicio para proyecto de ionic 5 con Angular, contiene intro, login, register y home con menú, ademas de validación con sus respectivos Guard, tambien un archivo service para conectar con el backend, perfecto para inicio de cualquier proyecto

Ionic 4

npm uninstall -g ionic
npm install -g @ionic/cli
ionic start

npm install @ionic/angular@latest --save
npm install -g @angular/cli

ionic serve => Visualizar Html, css y js
ionic build => Generemoa version compilada y transpilada de la App
ionic build --prodc =>

Instalar capacitor
npm install @capacitor/core @capacitor/cli --save-exact
npx cap --version

Prework
npx cap init => nombre al aplicativo
ionic build => crea carpeta www
npx cap add android
npx cap add ios
npx cap sync => cada q realicemos cambios en nuestros proyectos
npx cap copy => cada q necesitemos cambios en nuestro html, css y js
npx cap open ios =>
npx cap open android => abre en android
ionic build --prod => para produccion

Hola Querido Alfonso, los puedes usar sin ningún problema:

Plugin de cordova

npm install cordova-plugin-name
npx cap sync
Ionic-native

npm install @ionic-native/javascript-package-name
npm install cordova-plugin-name
npx cap sync
Aquí está la documentación oficial:

Agrega al package.json del proyecto en la parte de devDependencies el siguiente paquete:

“@babel/compat-data”: “~7.8.0”

Y despues ejecuta el npm install y vuelve a ejecutar el ionic build
