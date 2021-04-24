<h1 align="center">
  <p="#">Erweiterung der Qlik Sense-Data-Reload Funktion</p>
  <p="##">Diplomarbeit von S. Fluor</p>
  <p="##">NDS HF Applikationsentwicklung</p>
  <br><br>
  <img src="https://www.ibw.ch/themes/custom/ibw/logo.png">
  <br><br>
</h1>
Dieses Repo wurde erstellt um eine Erweiterung einer Qlik Sense-Data-Reload Funktion für Qlik Sense zu erstellen.



### Wie kann ich die Reload Extension testen?

1. Registriere dich auf:
https://www.qlik.com/us/lp/ppc/qlik-sense-business/brand?CampaignID=7013z000000it5d&ppc_id=5euM30D4&kw=qlik%20sense%20free%20trial&utm_content=s5euM30D4_pcrid_406854457596_pmt_e_pkw_qlik%20sense%20free%20trial_pdv_c_mslid__pgrid_14168948890_ptaid_aud-706675959562:kwd-543761206509&utm_source=google&utm_medium=cpc&utm_campaign=Qlik_Switzerland_Google_Brand_DA_Brand_EN&utm_term=qlik%20sense%20free%20trial&gclid=CjwKCAjwg4-EBhBwEiwAzYAlsri2V4X9jx7iaI1FhoVScIOK607voYPQtc-lF3pr38zd0Ek_Sl_PxBoC6nMQAvD_BwE

2. Gehe oben links auf die Management Konsole:
![image](https://user-images.githubusercontent.com/54737475/115962619-9278f500-a51c-11eb-860f-5e23b6e29ddc.png)

3. Gehe auf der linken Seite auf Erweiterungen:
![image](https://user-images.githubusercontent.com/54737475/115962690-e2f05280-a51c-11eb-9ebd-f93f61fd3574.png)

4. Lade dir das Git Hub Repo als Zip herunter und füge dieses hinzu:
5. ![image](https://user-images.githubusercontent.com/54737475/115962739-10d59700-a51d-11eb-967d-0c544372a477.png)



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
