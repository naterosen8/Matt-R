# Ground Truth — California Gardening by Climate

A static, dependency-free website covering gardening across California's eight
distinct growing regions — North Coast, Bay Area/Central Coast, Southern
California Coastal, Central Valley, Sierra Nevada, High Desert, Low Desert,
and the Inland Valleys/Wine Country.

For each region it covers: USDA/Sunset zone, typical temperature and rainfall
ranges, soil character, water needs, common challenges, best-performing
vegetables/fruits/natives, and a 12-month plant/harvest calendar for a handful
of representative crops. It also includes a coast-to-desert climate transect
diagram, a side-by-side region comparison table, and general water-wise
gardening practices.

## Running it locally

No build step or dependencies — it's plain HTML/CSS/JS.

```
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Structure

- `index.html` — page markup and content sections
- `css/style.css` — styling, light/dark theme support
- `js/data.js` — the region dataset (climate stats, plant lists, calendars)
- `js/app.js` — renders region cards, the detail panel, and the comparison table

## Notes

Figures throughout are general planning ranges based on typical conditions
per region, not precise forecasts — California's terrain creates
microclimates even within a single region. For a planting plan tuned to an
exact address, check with the local UC Cooperative Extension or Master
Gardener program.
