---

weight: 2
title: 3-axis CNC milling machine
description: "With the development of increasingly complex devices, there arose a need to produce components with greater mechanical strength than the polymer materials used in 3D printing on FFF or MSLA printers. The design of the numerically controlled milling machine stemmed from my need for a device that would enable fast and precise machining of materials such as metals and composites, while significantly reducing costs compared to commercially available solutions."
image: Frezarka_1.png
tags:
    - Independent project
    
---


<!--introduction start, need speceing correction-->
<h3 style="text-align:center;">Base specification</h3>
<div class="markdown-section">
<div>
<br>

- • X-axis travel - 290 mm
- • Y-axis travel - 320 mm
- • Z-axis travel - 120 mm
- • Spindle - 1,5kW, 24,000 rpm, ER16
- • Width - 770 mm
- • Depth - 1050mm
- • Height  - 1550mm
- • Control system - linuxCNC


</div>
<img class="markdown-img" src="/Frezarka_1.png"/>
</div>
<!--introduction end-->




<!--section 2 start-->
<h3 style="text-align:center;">Frame Construction</h3>
<div class="markdown-section">
<img class="markdown-img" src="/Frezarka_2.png"/>
<div>
<p>
The milling machine frame is made from a composite material consisting of crushed mineral aggregate and epoxy resin in a ratio of 85% aggregate to 15% resin. This solution was chosen for its excellent vibration damping, rigidity, low cost, and ease of manufacturing without specialized tools.
</p>
<p>
The structure consists of two parts: the base (2), which houses the Y-axis, and the gantry (1), which is mounted on the base and contains the X and Z axes. The gantry design ensures high rigidity through double-sided support of the X and Z axes.
</p>
<p>
Both the gantry (1) and base (2) are constructed on 20 mm precision PA13 aluminum plates (3), custom-cut to provide reference planes for linear guides. The aluminum plates are anchored to the composite with screws (4), then encased in MDF molds and cast with the mineral-epoxy mixture.
</p>
<p>
Plates supporting the X and Z axes, the spindle mount, and the T-slot table mount are made from 30 mm thick PA13 aluminum to maintain stiffness without additional composite material.
</p>
</div>
</div>
<!--section 2 end-->



<!--section 3 start-->
<div class="markdown-section">
<div>
<h3 style="text-align:center;">Construction of moving axes</h3>

X, Y, and Z axes move along dual perpendicular HGR20R linear guides (5). The reference guide is aligned to a machined aluminum edge, while the second is installed in relation to it, achieving 0.01 mm installation accuracy. Each moving component is supported by four HGH20CA linear bearings (6).

Movement is driven by a 16 mm, 5 mm pitch ball screw (7) with a ball nut and bearing block (9) to prevent lateral movement. The ball screw is driven by a NEMA23 stepper motor with encoder (10) through a jaw coupling. Inductive sensors (11) on each axis enable homing and overtravel protection.
</div>
<img class="markdown-img" src="/Frezarka_3.png"/>
</div>
<!--section 3 end-->




<!--section 4 start-->
<div class="markdown-section">
<img class="markdown-img" src="/Frezarka_4.png"/>
<div>
<h3 style="text-align:center;">Construction of the base and chip removal system</h3>

The machine stands on a welded steel frame made from 60x60 mm profiles, 3 mm wall thickness (12), providing a solid base. An integrated chip evacuation system (14) guides chips into a collection bin under the machine(15). The table also provides mounting points for the enclosure, spindle cooling, control cabinet, and touchscreen arm (16).

30x30 mm steel profiles with 2 mm wall thickness (13) support enclosure panels and non-load-bearing components. The base is mounted on four adjustable feet for leveling and transport. All steel elements are powder-coated to prevent corrosion.


</div>
</div>
<!--section 4 end-->


<!--section 5 start-->
<div class="markdown-section">
<div>
<h3 style="text-align:center;">Housing construction</h3>

The main purpose of the enclosure is to contain machining debris and protect the operator from moving components. Made from 2 mm laser-cut and bent steel sheet (17), the enclosure is spot welded and powder-coated. Panels are installed after mounting the machine frame to the base using self-tapping screws.

A 4 mm bent polycarbonate shield (18) slides linearly at a 45° angle for clear visibility and easy access. The front panel has a door for quick chip bin access (23). The left side houses the control cabinet with a status indicator (20) and adjustable touchscreen arm (19). Component cooling is ensured by ventilation openings (21 and 22).

The machine's 770 mm width allows passage through standard doorways.
</div>
<img class="markdown-img" src="/Frezarka_5.png"/>
</div>
<!--section 5 end-->


<!--section 6 start-->
<div class="markdown-section">
<img class="markdown-img" src="/Frezarka_6.png"/>
<div>
<h3 style="text-align:center;">Control</h3>

The system is controlled by open-source LinuxCNC software running on a Dell Optiplex 760 PC. The PC communicates with control components via two I/O cards through LPT ports and with the inverter via RS485. Each axis has a dedicated motor driver handling position and current control via step/direction interface.

Drivers are powered from rectified 24VAC transformer voltage. A 12V DC switching power supply powers auxiliary systems like fans, lights, and indicators. The control cabinet includes two circuit breakers: one for the inverter and one for the 230V supply. Each driver and the 12V rail are protected with fuses.

The LPT I/O card features opto-isolation and relays for high-current devices like valves and blowers.

The control panel has a main switch and an emergency stop button. The machine is operated via a touchscreen interface using the customized GMOCCAPY interface.
</div>
</div>
<!--section 4 end-->


<!--3 photos side by side at bottom-->
<div class="mt-32 flex flex-col items-center">
<img class="markdown-img" src="/Frezarka_7.png"/>
<img class="markdown-img" src="/Frezarka_9.png"/>
<img class="markdown-img" src="/Frezarka_8.png"/>
</div>


<!--
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

-->