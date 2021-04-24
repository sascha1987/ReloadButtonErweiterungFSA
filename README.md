<h1 align="center">
  <p="#">Erweiterung der Qlik Sense-Data-Reload Funktion</p>
  <p="##">Diplomarbeit von S. Fluor</p>
  <p="##">NDS HF Applikationsentwicklung</p>
  <br><br>
  <img src="https://www.ibw.ch/themes/custom/ibw/logo.png">
  <br><br>
</h1>
Dieses Repo wurde erstellt um eine Erweiterung einer Qlik Sense-Data-Reload Funktion für Qlik Sense zu erstellen.



### Install
1. Test
2. Test
3. Test

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
