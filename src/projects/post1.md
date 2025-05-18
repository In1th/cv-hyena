---

weight: 2
title: Modularna kurtyna świetlna 
description: "Stworzona praca obejmuje zagadnienia z dziedzin takich jak
elektronika cyfrowa i analogowa, programowanie, metrologia, optoelektronika i mechanika.
Przedstawione rozwiązanie techniczne łączy w sobie funkcje wykrywania oraz pomiaru wielkości
obiektów znajdujących się w strefie wykrywania. Dzięki modułowej konstrukcji możliwe jest łatwe
dostosowanie obszaru wykrywania do specyfiki danego procesu. Praca została oceniona przez komisję egzaminacyją na ocenę 5.0 otrzymała również wyróżnienie oraz zajęła drugie miejsc w konkursie na najlepsze prace dyplomowe 2023 organizowany przez Białostocki oddział SEP"
image: inzynierka_main.png
tags:
    - praca inżynierska

---

<div style="display: flex; flex-direction: row; align-items: center; text-align: justify;">
    <div>Kurtyna świetlna bezpieczeństwa jest aktywnym optoelektronicznym urządzeniem
ochronnym stosowanym w przemyśle i szeroko pojętej automatyce. Przeanalizowanie obecnie
dostępnych rozwiązań, obecnych i przyszłych potrzeb rynku, przegląd literatury z zakresu metod
generacji i detekcji promieniowania podczerwonego oraz norm, pozwoliło na zgromadzenie zasobu
wiedzy merytorycznej. Umożliwiło to implementację autorskich rozwiązań rozbudowujących
funkcjonalność urządzenia w obszarach takich jak łatwość rekonfiguracji oraz adaptacyjność do
niestandardowych wymagań. Stworzona praca obejmuje zagadnienia z dziedzin takich jak
elektronika cyfrowa i analogowa, programowanie, metrologia, optoelektronika i mechanika.
Przedstawione rozwiązanie techniczne łączy w sobie funkcje wykrywania oraz pomiaru wielkości
obiektów znajdujących się w strefie wykrywania. Dzięki modułowej konstrukcji możliwe jest łatwe
dostosowanie obszaru wykrywania do specyfiki danego procesu. To z kolei prowadzi do redukcji
liczby wariantów produkcyjnych tego samego modelu urządzenia oraz optymalizację procesów
wytwarzania. Każdy moduł może być indywidualnie skonfigurowany, co pozawala na elastyczną
zmianę parametrów pracy wybranej sekcji strefy wykrywania. Dodatkowo, wprowadzenie funkcji
pomiarowych otwiera możliwości zastosowania urządzenia nie tylko w systemach bezpieczeństwa,
ale jako element w przemyśle</div>
    <img style="width: 500px; height: 500px;" src="/Kurtyna_3.png"/>
</div>



### Projekt elektroniczny
Zaprojektowany został autorski układ elektroniczny łączący w sobie
rozwiązania z dziedzin: elektroniki cyfrowej, analogowej oraz optoelektroniki.
Zaproponowane rozwiązanie zostało oparte na mikrokontrolerze STM32G070RBT6.
Praca prezentowała etapy projektowania poszczególnych elementów układu takich
jak: przetwornicy DC-DC, układ pomiaru stanu wyjść bezpieczeństwa, budowę oraz
zabezpieczenie wejścia zasilającego, wejść i wyjść cyfrowych, wyjścia analogowego 0-
10V przed przepięciami, odwrotną polaryzacją czy nadmiernym przepływem prądu
zgodnie z postawionymi wymaganiami technicznymi. Jako interfejs pozwalający na
komunikację między modułami, danych nie krytycznych dla bezpieczeństwa działania
systemu, wybrany został szeregowy interfejs I2
C. Do realizacji projektu zostało
wykorzystane oprogramowanie do tworzenia schematów oraz obwodów drukowanych
KiCad EDA, jak i wykonywania symulacji działania wybranych układów elektronicznych
w oprogramowaniu Pspice for TI. W celu redukcji kosztów produkcji, obwody
drukowane zostały zaprojektowały w taki sposób aby mogły być wykorzystane
zarówno w module odbiorczym jak i nadawczym poprzez instalację tylko wymaganych
komponentów dla danego wariantu. Chcąc zachować jak najmniejsze rozmiary
urządzenia układ został podzielony na dwie oddzielne płytki PCB, sterującą oraz
wykonawczą z elementami optoelektronicznymi. Płytki PCB są umieszczone jedna nad
drugą, a wszystkie wymagane połączenia elektryczne zrealizowane są przez jedno
złącze, rozwiązanie takie pozwala na redukcję rozmiaru oraz łatwy montaż urządzenia.

<img src="/Kurtyna_4.png" />

# Projekt Mechaniczny
Projekt mechaniczny modularnej kurtyny świetlnej obejmował kształtowanie
charakterystyki optycznej dla diod nadawczych oraz fototranzystorów odbiorczych,
konstrukcję obudowy zapewniającej ochronę i łatwy dostęp do elementów
wewnętrznych, oraz system łączenia modułów z uwzględnieniem precyzyjnego
pozycjonowania. W celu kształtowania charakterystyki optycznej wykorzystano serię
przesłon o rosnącej średnicy, umożliwiającą uzyskanie stosunkowo wąskiego kąta
emisji światła nadawanego oraz odbieranego. Obudowa ma za zadnie chronić
komponenty wewnętrzne oraz umożliwiać łatwy dostęp do przełączników
konfiguracyjnych oraz złączy, a także posiadać mocowania pozwalające na łączenie
wielu modułów. Wykorzystano transparentną płytę poliwęglanową (transparentną dla
wykorzystywanych długości fal), aby izolować wnętrze urządzenia od środowiska
zewnętrznego, jednocześnie zachowując widoczność dla sygnalizacyjnych diod RGB.
Projektowany system łączenia oparty jest na trzpieniu, który pełni rolę zarówno
pozycjonującą, jak i zapewniającą siłę dociskającą między modułami, przekrój
mechanizmu łączenia modułów z wykorzystaniem trzpienia. Dzięki dwóm dodatkowym pinom lokacyjnym osiągnięto dokładność
pozycjonowania, a stały odstęp między elementami optoelektronicznymi został
zachowany dla różnej liczby połączonych modułów.

<img src="/Kurtyna_5.png" />


# Oprogramowanie
Kod zarządzający pracą urządzeń został napisany z wykorzystaniem języka C w
środowisku programistycznym STM32CubeIDE. Napisany kod wykorzystuje szeroką
gamę funkcjonalności oferowanych przez mikrokontroler STM32G070RBT6, od prostej
obsługi wejść oraz wyjść cyfrowych, przez pomiary napięcia z wykorzystaniem
przetworników analogowo-cyfrowych i obsługę interfejsu cyfrowego I2C. Tworzone
rozwiązanie umożliwia łączenie wielu modułów w celu dostosowania rozmiarów strefy
wykrywania. Rolę nadrzędną, kontroli stworzonego w ten sposób systemu, przejmuje
jeden z modułów nadawczych. Główny moduł nadawczy odpowiada za wysyłanie
sygnału synchronizacyjnego do wszystkich pozostałych urządzeń. Wszystkie elementy
systemu, zarówno moduły nadawcze, jak i odbiorcze czekają na impuls
synchronizacyjny i rozpoczynający przydzielone im zadania. Zaimplementowane
zostały również testy wykonywane przez urządzenie takie jak: test zwarcia wyjść
bezpieczeństwa do potencjału wysokiego, test zwarcia wyjścia bezpieczeństwa do
masy, test poziomu zakłóceń zewnętrznych. Celem było wykrycie uszkodzenia
stwarzającego zagrożenie w poprawnym jego funkcjonowaniu. Urządzenie
wykorzystuje również diody sygnalizacyjne do wizualnej reprezentacji aktywacji
urządzenia, miejsca w którym została przecięta wiązka aktywująca urządzenie, miejsca
w którym są aktualnie przecinane wiązki, trybu pracy czy natężenia sygnału
odbieranego w trybie ustawiania modułu odbiorczego.

<img src="/Kurtyna_7.png"/>
<img src="/Kurtyna_2.png"/>
<img src="/Kurtyna_8.png"/>