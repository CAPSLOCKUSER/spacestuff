# spacestuff

===========

A tesztfeladat:
Böngésző alapú alkalmazás fejlesztése (canvas vagy webGL használatával). A játék fix 800 x 600 px méretű. 3rd party renderer(!) libek használata engedélyezve. PIXI és/vagy TypeScript használatáért plusz pont.
 
#1: Splash screen
 
Tetszőleges bitmap, 2 másodpercig látszódik, utána elsötétül, és az alkalmazás main screen-re lép.
 
#2: Main screen
 
elemei:
- háttér (bármilyen bitmap, valamint valamilyen animáció, hogy érdekesebbé tegye a látványt)
- logo (bármilyen bitmap)
- a logo alatt 4 db gomb egymás alá elhelyezve (bitmapek, állapotokat tudjanak kezelni): GAME1, GAME2, GAME3 és EXIT.
 
 
EXIT gombra kattintva a böngésző elnavigál, bármelyik GAME gomb a játék felületre visz.
 
#3: Játék

Egyszerű side scroller shot'em up játék űrhajóval.

- Az űrhajó mozgatható a játéktéren, és rakétákat tud kilőni.
- A Játék háttere mozog jobbról balra, parallax scrollal (a háttér 2 grafikai layer-ből áll, a távolabbi layer lassabban mozog).
- 2 másodpercenként ellenséges űrhajó érkezik szemből. Az ellenséges űrhajók valamilyen véletlen mozgást végeznek.
- Ha az űrhajó lövedéke eltalál egy ellenséges űrhajót, az felrobban és eltűnik (10 vagy több particle kibocsátásával, ahol egy particle bármilyen grafikai elem lehet).
- Amennyiben az űrhajó nekimegy egy ellenséges tárgynak, felrobban (ahogy az ellenséges űrhajók), a játéknak jelzi, hogy vége, majd visszalép a főmenübe.

A tesztfeladat elbírálásánál a grafikai kidolgozottságot nem vesszük figyelembe, csak a kód minőségét és az alkalmazott logikát értékeljük. 
