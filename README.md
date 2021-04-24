<h1 align="center">
  <p="#">Erweiterung der Qlik Sense-Data-Reload Funktion</p>
  <p="##">Diplomarbeit von S. Fluor</p>
  <p="##">NDS HF Applikationsentwicklung</p>
  <br><br>
  <img src="https://www.ibw.ch/themes/custom/ibw/logo.png">
  <br><br>
  <p="##">Im Auftrag der</p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/VP_Bank_Logo.svg" alt="Logo" height="179" width="600">
  <br><br>
</h1>
Dieses Repo wurde erstellt um eine Erweiterung einer Qlik Sense-Data-Reload Funktion für Qlik Sense zu erstellen.



### Wie kann ich die Reload Extension testen?

Diese Anleitung dient lediglich zu Testzwecken und wiederspiegelt nicht die Erweiterung der Reload funktionalität welche bei anhängen einer DB in der Datenmenge der Bank angezeigt werden würde.

###### 1. Registriere dich auf:

https://www.qlik.com/de-de/trial/qlik-sense-business

###### 2. Gehe oben links auf die Management Konsole:

![image](https://user-images.githubusercontent.com/54737475/115962619-9278f500-a51c-11eb-860f-5e23b6e29ddc.png)

###### 3. Dann auf der linken Seite auf Erweiterungen:

![image](https://user-images.githubusercontent.com/54737475/115962690-e2f05280-a51c-11eb-9ebd-f93f61fd3574.png)

###### 4. Lade dir das Git Hub Repo als Zip herunter und füge dieses hinzu:

![image](https://user-images.githubusercontent.com/54737475/115962739-10d59700-a51d-11eb-967d-0c544372a477.png)

###### 5. Gehe zurück auf die Data Analytics Startseite und dann auf Beispieldaten analysieren:

![image](https://user-images.githubusercontent.com/54737475/115963378-5004e780-a51f-11eb-8c64-1b0af5202a5d.png)

###### 6. Klicke auf Einblicke generieren und wähle ein Arbeitsblatt aus und gehe dann unten rechts zu deinem neuen Arbeitsblatt:

![image](https://user-images.githubusercontent.com/54737475/115963448-9b1efa80-a51f-11eb-8662-4c421ad96048.png)

###### 7. Du kannst nun oben rechts auf Arbeitsblatt bearbeiten und dann auf der linken Seite eine Benutzerdefinierte Erweiterung hinzufügen. Diese findest du mit FSA. Ziehe diese per drag and drop auf dein Arbeitsblatt:

![image](https://user-images.githubusercontent.com/54737475/115963523-f94bdd80-a51f-11eb-8e9e-15ce1340e4fd.png)

###### 8. Mit erneutem klicken auf Arbeitsblatt bearbeiten kannst du den bearbeitungs Modus verlassen. Nun kannst du auf den Reload Button klicken. Es wird versucht ein Web Socket Connection mit der Qlik Sense Associate Engine herzustellen. Dies kann für test Zwecke über die Chrome Devtools auskommentiert werden.

![image](https://user-images.githubusercontent.com/54737475/115963712-e554ab80-a520-11eb-87f8-dcbc541a245a.png)

### Tests
Qlik Sense Sourcecode wird immer über die "define" Funktion eingeleitet. Define ist ein Konzept von RequireJS, um Abhängigkeiten im Javascript File zu definieren. In der Qlik Sense Umgebung benötigt es immer das Argument "qlik", um alle benötigten Abhängigktein zu laden, ansonsten funktioniert der Code nicht ordnungsgemäss.
Um die Unit Tests lokal starten zu können, muss man ein fake Modul laden. Dies muss dem Define statement als Parameter übergeben werden.
Aus diesem Grund werden auch die Tests der CI Pipeline nicht grün.

Vorgehen Tests:
1. Entfernen von "qlik" im define Statement
2. Hinzüfugen von "./test/unit/qlik"
3. npm run test im Terminal starten


### Demo

https://user-images.githubusercontent.com/54737475/115962449-c6074f80-a51b-11eb-9644-d87882b04095.mov


### Author

S. Fluor
