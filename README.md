# Aplikacja do generacji html na podstawie tekstu

## Działanie aplikacji

Aplikacja łączy się z API OpenAI poprzez pakiet o nazwie `openai` pobrany z biblioteki npm.

Następnie plik, na którym ma bazować, odczytywany jest za pomocą biblioteki `fs`. <br/>
Odczytany tekst wraz z **promptem** przekazywany jest do odpowiedniego modelu (w tym przypadku `gpt-4o`)

Następnie następuje zapisanie wygenerowanego artykułu do pliku: _`writeToFile(wygenerowanyArtykul, nazwaPliku)`_ <br/>
Funkcja sprawdza także czy dany plik już istnieje, jeśli tak, wynik nie zapisze się (ochrona przed nadpisaniem plików)

Wygenerowany artykuł jest także zapisany w zmiennej, która jest przekazywana do ww. funkcji.

## Uruchomienie

Aby aplikacja połączyła się z API OPEN_AI się poprawnie, w folderze aplikacji powinien znaleźć się plik `.env`, ze zmienną `OPEN_AI_API_KEY` -> patrz plik `.env.example`. (Można przekazać ją także "ręcznie" wpisując w pliku `script.js` -> <br/>

`const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY })`, w miejscu `process.env.OPEN_AI_API_KEY`)

Aby zainstalować potrzebne pakiety do działania aplikacji, należy uruchomić w konsoli polecenie: `npm install` (należy znajdować się w folderze z plikiem `package.json`)

Aby uruchomić aplikację należy w konsoli wpisać polecenie `npm run dev`
