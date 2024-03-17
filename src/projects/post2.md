---

weight: 2
title: 3-osiowa frezarka CNC
description: "Wraz z tworzeniem coraz bardziej złożonych urządzeń pojawiła się potrzeba na
wykonywanie podzespołów o większej wytrzymałości mechanicznej niż materiały polimerowe
wykorzystywane w druku 3D na drukarkach typu FFF lub MSLA. Projekt frezarki sterowanej
numerycznie wynikł z mojego zapotrzebowania na urządzenie które umożliwiło by mi szybką i
dokładną obróbkę materiałów takich jak metale oraz tworzywa kompozytowe przy znacznej
redukcji kosztów względem rozwiązań dostępnych komercyjnie."
image: Frezarka_1.png
tags:
    - Projekt własny
    
number_of_tiles: 6

image1: Frezarka_1.png
Text_size_1: 2
Text1: "Parametry techniczne:\n
• Posuw w osi X – 290 mm\n
• Posuw w osi Y – 320 mm\n 
• Posuw w osi Z – 120 mm\n 
• wrzeciono 1,5kW - 24,000 rpm – ER16\n 
• szerokość – 770 mm\n
• głębokość – 1050mm\n
• wysokość  – 1550mm\n
• system sterujący – linuxCNC\n"


image2: Frezarka_2.png
Text_size_2: 1.09
Text2: "Konstrukcja Ramy\n 

Rama frezarki została wykonana z materiału kompozytowego złożonego z kruszonego
materiału mineralnego połączonego żywicą epoksydową w stosunku 85% kruszcu do 15% żywicy.
Rozwiązanie takie zostało wybrane ponieważ łączyło w sobie bardzo dobre właściwości tłumienia
niepożądanych wibracji, sztywność ,stosunkowo niskiego kosztu oraz łatwości wykonania bez
specjalistycznych urządzeń ani narzędzi.\n 

Konstrukcja składa się dwóch części, podstawy (2) będącej bazą całej maszyny z osią Y oraz bramy
(1) stojącej na podstawie i zawierającą osie X oraz Z. Wykorzystanie bramy pozwoliło na uzyskanie
dużej sztywności maszyny dzięki podparciu osi X oraz Z z obu stron stołu roboczego.\n 

Brama (1) oraz podstawa (2) zostały wykonane na bazie 20mm precyzyjnej płyty
aluminiowej PA13 (3) która została wycięta na zamówienie i tworzyła płaszczyzny wzorcowe pod
prowadnice liniowe. W blachach, od strony materiału kompozytowego została nawiercona i
nagwintowana seria otworów w które zostały wkręcone śruby będące elementami kotwiczącymi
aluminium i mieszankę kompozytową (4). Tak przygotowane płyty zostały obudowane formą
wykonaną z płyty MDF a następnie zalane, wcześniej wymieszaną, mieszanką ziaren mineralnych
oraz żywicy epoksydowej.\n 

Płyta aluminiowa poruszająca się po osi X oraz wspierająca oś Z, płyta mocująca
wrzeciono do osi Z oraz płyta mocująca stół teowy do osi Y zostały wykonane z grubszego 30 mm
aluminium PA13, w celu zachowania sztywności bez dodatkowego materiału kompozytowego.\n "


image3: Frezarka_3.png
Text_size_3: 1.09
Text3: "Budowa osi ruchomych\n

Osie X, Y oraz Z poruszają się po dwóch prostopadłych prowadnicach liniowych
HGR20R (5). W celu zachowania jak największej prostopadłości prowadnic względem siebie jak i
ramy, prowadnica wzorcowa została wyrównana do obrobionej krawędzi płyty aluminiowej, a
następnie druga prowadnica została zainstalowana w odniesieniu do prowadnicy wzorcowej.
Instalacja została dokonana z dokładnością 0,01mm co zapewniło precyzyjny ruch osi oraz
zapobiegło nadmiernemu zużywaniu się elementów tocznych.\n

Każda element konstrukcji poruszający się na danej osi jest wsparty czterema wózkami liniowymi
HGH20CA (6). Za posuw odpowiada zestaw złożony z śruby kulowej (7) o średnicy 16mm oraz
skoku 5mm, nakrętki kulowej, bloku łożyskującego (9) mającego za zadanie zapobiec ruchom
poprzecznym śruby. Śruba kulowa jest napędzana silnikiem krokowym z enkoderem NEMA23 (10)
poprzez sprzęgło kłowe. Każda z osi jest wyposażona w czujniki indukcyjne (11) odpowiedzialne za
znalezienie pozycji początkowej maszyny po uruchomieniu oraz zapobiegnięciu przesuwu poza
dozwolony zakres ruchu.\n"


image4: Frezarka_4.png
Text_size_4: 1.09
Text4: "Wykonanie podstawy oraz systemu odprowadzania wiórów\n

Frezarka stoi na stole wykonanym z spawanych profili stalowych 60x60mm o grubości
ścianki 3mm (13), zapewnia to stabilną bazę dla głównej ramy urządzenia oraz elementów
pomocniczych. W projekcie został zintegrowany grawitacyjny system odprowadzania wiórów
złożony z serii nachylonych płyt stalowych (15), nakierowujących spadające wióry do pojemnika
zbiorczego znajdującego się bezpośrednio pod urządzeniem. Stół zapewnia również punkty
mocujące dla paneli obudowy, systemu chłodzenia wrzeciona, szafy z osprzętem sterującym oraz
regulowanego ramienia dla ekranu dotykowego (16).\n

Mniejsze profile stalowe o wymiarach 30x30mm oraz grubości ścianki 2mm (14) wykorzystane
zostały do wsparcia paneli obudowy i elementów które nie przenosiły obciążeń ramy frezarki.
Podstawa stoi na 4 regulowanych nóżkach które pozwalają na wypoziomowanie urządzenia oraz
łatwiejsze przenoszenie dzięki dostępowi do dolnej części ramy znajdującej się nad ziemią. Dla
zapobiegnięcia rdzewienia elementów stalowych oraz zapewnieniu wytrzymałej powierzchni
konstrukcja została pomalowana proszkowo.\n"


image5: Frezarka_5.png
Text_size_5: 1.09
Text5: "Konstrukcja obudowy\n

Głównym zadaniem tej części projektu jest zapobiegnięcie wydostawania się wiórów
materiału obrabianego poza wyznaczony obszar oraz ochrona operatora przed elementami
maszyny stwarzającymi zagrożenie podczas jej pracy. Obudowa została wykonana z 2mm blachy
stalowej (17), wyciętej laserowo oraz wygiętej zgodnie z projektem. Tak przygotowane elementy
zostały zespawane w wybranych punktach i pomalowane proszkowo dla zapobiegnięcia
rdzewienia oraz zapewnienia odpornej powierzchni. Panele zostały zainstalowane po umieszczeniu
ramy frezarki na podstawie, przymocowane za pomocą wkrętów samo-gwintujących do profili
stalowych.\n

Obudowa posiada otwieraną osłonę wykonaną z 4mm giętej płyty poliwęglanowej
(18), poruszającej się po prowadnicach w sposób liniowy pod kątem 45°. Jej kształt oraz sposób
otwierania został zaprojektowany w taki sposób aby zapewnić jak najlepszą widoczność procesu
obróbki oraz jak najłatwiejszy dostęp do detali na stole roboczym po otwarciu.\n

Przód obudowy jest wyposażony w drzwiczki umożliwiające szybki dostęp do zbiornika
na wióry (23). Po lewej stronie znajduje się szafa sterownicza z sygnalizatorem stanu pracy
maszyny (20) oraz regulowane ramie z monitorem dotykowym (19). Chłodzenie dla podzespołów
jest zapewnione przez otwory wentylacyjne (21 i 22).\n

Maszyna została zaprojektowana w taki sposób że jej niewielka szerokość 770 mm
pozwala na przeniesienie jej przez standardową ramę drzwiową.\n"


image6: Frezarka_6.png
Text_size_6: 1.09
Text6: "Sterowanie\n

Urządzenie pracuje pod kontrolą oprogramowania open-source LinuxCNC działającego
na komputerze PC Dell optiplex 760. Komputer PC komunikuje się z poszczególnymi podzespołami
sterowania i kontroli frezarki przez dwie karty wejść/wyjść poprzez porty LPT oraz z falownikiem
wykorzystując RS485. Każda z osi posiada oddzielny sterownik silnika zajmujący się kontrolą
pozycji oraz regulacją jego prądu, komunikacja z sterownikami odbywa się przez interfejs
step/direction.\n

Sterowniki są zasilane z wyprostowanego napięcia z transformatora 24VAC. Do
zasilania układów pomocniczych takich jak wentylatory, oświetlenie czy sygnalizacja został
wykorzystany zasilacz impulsowy 12V DC. W szafie sterowniczej znajdują się 2 wyłączniki
nadprądowe, jeden odpowiada za układ zasilania Falownika drugi za całą resztę układu zasilania
230V. Każdy z sterowników jak i szyna 12V posiadają bezpieczniki topikowe.\n

Karta wejść/wyjść LPT zawiera optoizolację oraz przekaźniki do obsługi wysoko prądowych urządzeń takich jak zawory czy dmuchawy.\n

Panel na boku szafy sterowniczej posiada wyłącznik główny odcinający zasilanie do
całego urządzenia oraz przycisk bezpieczeństwa. Kontrola frezarki odbywa się poprzez ekran
dotykowy. Dostosowany Interfejs dotykowy GMOCCAPY przedstawiono na poniższym zdjęciu."

Gallery_image1: Frezarka_7.png
Gallery_image2: Frezarka_9.png
Gallery_image3: Frezarka_8.png
---