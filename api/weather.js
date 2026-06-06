export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const API_KEY = 'af835acb8b9811773dbcf3bd6e94066e';
  const LAT = '41.4370';
  const LON = '-81.3873';

  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=imperial`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=imperial&cnt=16`)
    ]);

    const current = await currentRes.json();
    const forecast = await forecastRes.json();

    const frostRisk = forecast.list ? forecast.list.find(item => item.main.temp_min < 36) : null;
    let frostDay = null;
    if (frostRisk) {
      const date = new Date(frostRisk.dt * 1000);
      frostDay = date.toLocaleDateString('en-US', { weekday: 'short' });
    }

    const weatherCode = current.weather?.[0]?.id || 800;
    let emoji = 'sunny';
    if (weatherCode >= 200 && weatherCode < 300) emoji = 'stormy';
    else if (weatherCode >= 300 && weatherCode < 600) emoji = 'rainy';
    else if (weatherCode >= 600 && weatherCode < 700) emoji = 'snowy';
    else if (weatherCode >= 700 && weatherCode < 800) emoji = 'foggy';
    else if (weatherCode === 800) emoji = 'sunny';
    else if (weatherCode === 801) emoji = 'mostly-sunny';
    else if (weatherCode >= 802) emoji = 'cloudy';

    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    let season, seasonStart, seasonEnd;
    if ((month === 3 && day >= 20) || month === 4 || month === 5 || (month === 6 && day < 21)) {
      season = 'Spring';
      seasonStart = new Date(now.getFullYear(), 2, 20);
      seasonEnd = new Date(now.getFullYear(), 5, 21);
    } else if ((month === 6 && day >= 21) || month === 7 || month === 8 || (month === 9 && day < 22)) {
      season = 'Summer';
      seasonStart = new Date(now.getFullYear(), 5, 21);
      seasonEnd = new Date(now.getFullYear(), 8, 22);
    } else if ((month === 9 && day >= 22) || month === 10 || month === 11 || (month === 12 && day < 21)) {
      season = 'Autumn';
      seasonStart = new Date(now.getFullYear(), 8, 22);
      seasonEnd = new Date(now.getFullYear(), 11, 21);
    } else {
      season = 'Winter';
      seasonStart = new Date(now.getFullYear(), 11, 21);
      seasonEnd = new Date(now.getFullYear() + 1, 2, 20);
    }

    const totalDays = (seasonEnd - seasonStart) / (1000 * 60 * 60 * 24);
    const elapsedDays = Math.max(0, (now - seasonStart) / (1000 * 60 * 60 * 24));
    const seasonWeek = Math.min(Math.ceil(elapsedDays / 7) + 1, Math.ceil(totalDays / 7));
    const totalWeeks = Math.ceil(totalDays / 7);

    let windowAlert = null;
    if (season === 'Spring') {
      const lastFrost = new Date(now.getFullYear(), 4, 15);
      const daysToFrost = Math.ceil((lastFrost - now) / (1000 * 60 * 60 * 24));
      if (daysToFrost > 0 && daysToFrost <= 30) {
        windowAlert = `Last frost ~${daysToFrost} days away`;
      } else if (daysToFrost <= 0) {
        windowAlert = 'Past last frost -- time to plant outside';
      }
    } else if (season === 'Autumn') {
      const firstFrost = new Date(now.getFullYear(), 9, 15);
      const daysToFrost = Math.ceil((firstFrost - now) / (1000 * 60 * 60 * 24));
      if (daysToFrost > 0 && daysToFrost <= 21) {
        windowAlert = `First frost in ~${daysToFrost} days -- prep now`;
      }
    }

    const inspectionSafe = current.main.temp >= 50 && weatherCode >= 800;

    res.status(200).json({
      temp: Math.round(current.main.temp),
      feelsLike: Math.round(current.main.feels_like),
      description: current.weather?.[0]?.description || 'Clear',
      weatherType: emoji,
      humidity: current.main.humidity,
      windSpeed: Math.round(current.wind?.speed || 0),
      location: 'Chagrin Falls, OH',
      frostRisk: !!frostRisk,
      frostDay,
      season,
      seasonWeek,
      totalWeeks,
      windowAlert,
      inspectionSafe
    });

  } catch (err) {
    console.error('Weather error:', err);
    res.status(500).json({ error: 'Weather unavailable' });
  }
}
