import { useEffect, useState } from 'react';

const africaLocations = [
  { label: 'Algeria — Algiers', city: 'Algiers', country: 'Algeria' },
  { label: 'Angola — Luanda', city: 'Luanda', country: 'Angola' },
  { label: 'Benin — Porto-Novo', city: 'Porto-Novo', country: 'Benin' },
  { label: 'Botswana — Gaborone', city: 'Gaborone', country: 'Botswana' },
  { label: 'Burkina Faso — Ouagadougou', city: 'Ouagadougou', country: 'Burkina Faso' },
  { label: 'Burundi — Gitega', city: 'Gitega', country: 'Burundi' },
  { label: 'Cabo Verde — Praia', city: 'Praia', country: 'Cape Verde' },
  { label: 'Cameroon — Yaoundé', city: 'Yaounde', country: 'Cameroon' },
  { label: 'Central African Rep — Bangui', city: 'Bangui', country: 'Central African Republic' },
  { label: 'Chad — N’Djamena', city: "N'Djamena", country: 'Chad' },
  { label: 'Comoros — Moroni', city: 'Moroni', country: 'Comoros' },
  { label: 'Congo — Brazzaville', city: 'Brazzaville', country: 'Congo' },
  { label: 'Côte d’Ivoire — Abidjan', city: 'Abidjan', country: 'Côte d’Ivoire' },
  { label: 'Djibouti — Djibouti', city: 'Djibouti', country: 'Djibouti' },
  { label: 'Egypt — Cairo', city: 'Cairo', country: 'Egypt' },
  { label: 'Equatorial Guinea — Malabo', city: 'Malabo', country: 'Equatorial Guinea' },
  { label: 'Eritrea — Asmara', city: 'Asmara', country: 'Eritrea' },
  { label: 'Eswatini — Mbabane', city: 'Mbabane', country: 'Eswatini' },
  { label: 'Ethiopia — Addis Ababa', city: 'Addis Ababa', country: 'Ethiopia' },
  { label: 'Gabon — Libreville', city: 'Libreville', country: 'Gabon' },
  { label: 'Gambia — Banjul', city: 'Banjul', country: 'Gambia' },
  { label: 'Ghana — Accra', city: 'Accra', country: 'Ghana' },
  { label: 'Guinea — Conakry', city: 'Conakry', country: 'Guinea' },
  { label: 'Guinea-Bissau — Bissau', city: 'Bissau', country: 'Guinea-Bissau' },
  { label: 'Kenya — Nairobi', city: 'Nairobi', country: 'Kenya' },
  { label: 'Lesotho — Maseru', city: 'Maseru', country: 'Lesotho' },
  { label: 'Liberia — Monrovia', city: 'Monrovia', country: 'Liberia' },
  { label: 'Libya — Tripoli', city: 'Tripoli', country: 'Libya' },
  { label: 'Madagascar — Antananarivo', city: 'Antananarivo', country: 'Madagascar' },
  { label: 'Malawi — Lilongwe', city: 'Lilongwe', country: 'Malawi' },
  { label: 'Mali — Bamako', city: 'Bamako', country: 'Mali' },
  { label: 'Mauritania — Nouakchott', city: 'Nouakchott', country: 'Mauritania' },
  { label: 'Mauritius — Port Louis', city: 'Port Louis', country: 'Mauritius' },
  { label: 'Morocco — Rabat', city: 'Rabat', country: 'Morocco' },
  { label: 'Mozambique — Maputo', city: 'Maputo', country: 'Mozambique' },
  { label: 'Namibia — Windhoek', city: 'Windhoek', country: 'Namibia' },
  { label: 'Niger — Niamey', city: 'Niamey', country: 'Niger' },
  { label: 'Nigeria — Abuja', city: 'Abuja', country: 'Nigeria' },
  { label: 'Rwanda — Kigali', city: 'Kigali', country: 'Rwanda' },
  { label: 'Sao Tome & Principe — São Tomé', city: 'Sao Tome', country: 'Sao Tome and Principe' },
  { label: 'Senegal — Dakar', city: 'Dakar', country: 'Senegal' },
  { label: 'Seychelles — Victoria', city: 'Victoria', country: 'Seychelles' },
  { label: 'Sierra Leone — Freetown', city: 'Freetown', country: 'Sierra Leone' },
  { label: 'Somalia — Mogadishu', city: 'Mogadishu', country: 'Somalia' },
  { label: 'South Africa — Cape Town', city: 'Cape Town', country: 'South Africa' },
  { label: 'South Sudan — Juba', city: 'Juba', country: 'South Sudan' },
  { label: 'Sudan — Khartoum', city: 'Khartoum', country: 'Sudan' },
  { label: 'Tanzania — Dodoma', city: 'Dodoma', country: 'Tanzania' },
  { label: 'Togo — Lomé', city: 'Lome', country: 'Togo' },
  { label: 'Tunisia — Tunis', city: 'Tunis', country: 'Tunisia' },
  { label: 'Uganda — Kampala', city: 'Kampala', country: 'Uganda' },
  { label: 'Zambia — Lusaka', city: 'Lusaka', country: 'Zambia' },
  { label: 'Zimbabwe — Harare', city: 'Harare', country: 'Zimbabwe' },
];

const asiaLocations = [
  { label: 'Afghanistan — Kabul', city: 'Kabul', country: 'Afghanistan' },
  { label: 'Armenia — Yerevan', city: 'Yerevan', country: 'Armenia' },
  { label: 'Azerbaijan — Baku', city: 'Baku', country: 'Azerbaijan' },
  { label: 'Bahrain — Manama', city: 'Manama', country: 'Bahrain' },
  { label: 'Bangladesh — Dhaka', city: 'Dhaka', country: 'Bangladesh' },
  { label: 'Bhutan — Thimphu', city: 'Thimphu', country: 'Bhutan' },
  { label: 'Brunei — Bandar Seri Begawan', city: 'Bandar Seri Begawan', country: 'Brunei' },
  { label: 'Cambodia — Phnom Penh', city: 'Phnom Penh', country: 'Cambodia' },
  { label: 'China — Beijing', city: 'Beijing', country: 'China' },
  { label: 'Cyprus — Nicosia', city: 'Nicosia', country: 'Cyprus' },
  { label: 'Georgia — Tbilisi', city: 'Tbilisi', country: 'Georgia' },
  { label: 'India — New Delhi', city: 'New Delhi', country: 'India' },
  { label: 'Indonesia — Jakarta', city: 'Jakarta', country: 'Indonesia' },
  { label: 'Iran — Tehran', city: 'Tehran', country: 'Iran' },
  { label: 'Iraq — Baghdad', city: 'Baghdad', country: 'Iraq' },
  { label: 'Israel — Jerusalem', city: 'Jerusalem', country: 'Israel' },
  { label: 'Japan — Tokyo', city: 'Tokyo', country: 'Japan' },
  { label: 'Jordan — Amman', city: 'Amman', country: 'Jordan' },
  { label: 'Kazakhstan — Nur-Sultan', city: 'Nur-Sultan', country: 'Kazakhstan' },
  { label: 'Kuwait — Kuwait City', city: 'Kuwait City', country: 'Kuwait' },
  { label: 'Kyrgyzstan — Bishkek', city: 'Bishkek', country: 'Kyrgyzstan' },
  { label: 'Laos — Vientiane', city: 'Vientiane', country: 'Laos' },
  { label: 'Lebanon — Beirut', city: 'Beirut', country: 'Lebanon' },
  { label: 'Malaysia — Kuala Lumpur', city: 'Kuala Lumpur', country: 'Malaysia' },
  { label: 'Maldives — Malé', city: 'Male', country: 'Maldives' },
  { label: 'Mongolia — Ulaanbaatar', city: 'Ulaanbaatar', country: 'Mongolia' },
  { label: 'Myanmar — Yangon', city: 'Yangon', country: 'Myanmar' },
  { label: 'Nepal — Kathmandu', city: 'Kathmandu', country: 'Nepal' },
  { label: 'Oman — Muscat', city: 'Muscat', country: 'Oman' },
  { label: 'Pakistan — Islamabad', city: 'Islamabad', country: 'Pakistan' },
  { label: 'Philippines — Manila', city: 'Manila', country: 'Philippines' },
  { label: 'Qatar — Doha', city: 'Doha', country: 'Qatar' },
  { label: 'Saudi Arabia — Riyadh', city: 'Riyadh', country: 'Saudi Arabia' },
  { label: 'Singapore — Singapore', city: 'Singapore', country: 'Singapore' },
  { label: 'South Korea — Seoul', city: 'Seoul', country: 'South Korea' },
  { label: 'Sri Lanka — Colombo', city: 'Colombo', country: 'Sri Lanka' },
  { label: 'Syria — Damascus', city: 'Damascus', country: 'Syria' },
  { label: 'Taiwan — Taipei', city: 'Taipei', country: 'Taiwan' },
  { label: 'Tajikistan — Dushanbe', city: 'Dushanbe', country: 'Tajikistan' },
  { label: 'Thailand — Bangkok', city: 'Bangkok', country: 'Thailand' },
  { label: 'Timor-Leste — Dili', city: 'Dili', country: 'Timor-Leste' },
  { label: 'Turkmenistan — Ashgabat', city: 'Ashgabat', country: 'Turkmenistan' },
  { label: 'UAE — Abu Dhabi', city: 'Abu Dhabi', country: 'United Arab Emirates' },
  { label: 'Uzbekistan — Tashkent', city: 'Tashkent', country: 'Uzbekistan' },
  { label: 'Vietnam — Hanoi', city: 'Hanoi', country: 'Vietnam' },
  { label: 'Yemen — Sana’a', city: 'Sanaa', country: 'Yemen' },
];

const americaLocations = [
  { label: 'United States — New York', city: 'New York', country: 'United States' },
  { label: 'Canada — Toronto', city: 'Toronto', country: 'Canada' },
  { label: 'Mexico — Mexico City', city: 'Mexico City', country: 'Mexico' },
  { label: 'Belize — Belmopan', city: 'Belmopan', country: 'Belize' },
  { label: 'Costa Rica — San José', city: 'San Jose', country: 'Costa Rica' },
  { label: 'El Salvador — San Salvador', city: 'San Salvador', country: 'El Salvador' },
  { label: 'Guatemala — Guatemala City', city: 'Guatemala City', country: 'Guatemala' },
  { label: 'Honduras — Tegucigalpa', city: 'Tegucigalpa', country: 'Honduras' },
  { label: 'Nicaragua — Managua', city: 'Managua', country: 'Nicaragua' },
  { label: 'Panama — Panama City', city: 'Panama City', country: 'Panama' },
  { label: 'Cuba — Havana', city: 'Havana', country: 'Cuba' },
  { label: 'Dominican Republic — Santo Domingo', city: 'Santo Domingo', country: 'Dominican Republic' },
  { label: 'Jamaica — Kingston', city: 'Kingston', country: 'Jamaica' },
  { label: 'Haiti — Port-au-Prince', city: 'Port-au-Prince', country: 'Haiti' },
  { label: 'Colombia — Bogotá', city: 'Bogota', country: 'Colombia' },
  { label: 'Venezuela — Caracas', city: 'Caracas', country: 'Venezuela' },
  { label: 'Ecuador — Quito', city: 'Quito', country: 'Ecuador' },
  { label: 'Peru — Lima', city: 'Lima', country: 'Peru' },
  { label: 'Bolivia — Sucre', city: 'Sucre', country: 'Bolivia' },
  { label: 'Chile — Santiago', city: 'Santiago', country: 'Chile' },
  { label: 'Argentina — Buenos Aires', city: 'Buenos Aires', country: 'Argentina' },
  { label: 'Uruguay — Montevideo', city: 'Montevideo', country: 'Uruguay' },
  { label: 'Paraguay — Asunción', city: 'Asuncion', country: 'Paraguay' },
  { label: 'Brazil — Brasília', city: 'Brasilia', country: 'Brazil' },
  { label: 'Guyana — Georgetown', city: 'Georgetown', country: 'Guyana' },
  { label: 'Suriname — Paramaribo', city: 'Paramaribo', country: 'Suriname' },
  { label: 'Trinidad & Tobago — Port of Spain', city: 'Port of Spain', country: 'Trinidad and Tobago' },
  { label: 'Barbados — Bridgetown', city: 'Bridgetown', country: 'Barbados' },
];

const locations = [...africaLocations, ...asiaLocations, ...americaLocations];

function Prayer() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [timings, setTimings] = useState(null);
  const [date, setDate] = useState(null);
  const [hijri, setHijri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        setLoading(true);
        setError('');
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(selectedLocation.city)}&country=${encodeURIComponent(selectedLocation.country)}&method=2`,
        );
        const result = await response.json();
        if (result.code !== 200) {
          throw new Error(result.status || 'Unable to fetch prayer times');
        }
        setTimings(result.data.timings);
        setDate(result.data.date.gregorian);
        setHijri(result.data.date.hijri);
      } catch (err) {
        setError(err.message || 'Unable to load prayer data');
      } finally {
        setLoading(false);
      }
    }

    fetchPrayerTimes();
  }, [selectedLocation]);

  return (
    <section className="section-panel">
      <div className="card-panel">
        <div className="form-field">
          <label htmlFor="location">Select Your Country</label>
          <select
            id="location"
            value={selectedLocation.label}
            onChange={(event) => {
              const chosen = locations.find((item) => item.label === event.target.value);
              if (chosen) setSelectedLocation(chosen);
            }}
          >
            <optgroup label="Africa">
              {africaLocations.map((location) => (
                <option key={location.label} value={location.label}>
                  {location.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Asia">
              {asiaLocations.map((location) => (
                <option key={location.label} value={location.label}>
                  {location.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Americas">
              {americaLocations.map((location) => (
                <option key={location.label} value={location.label}>
                  {location.label}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div className="info-card">
          <h3>Prayer Times for {selectedLocation.label}</h3>
          {loading && <p>Loading prayer times...</p>}
          {error && <p style={{ color: '#fb7185' }}>{error}</p>}
          {!loading && !error && timings && (
            <>
              <p>
                Date: <strong>{date?.date}</strong> · Hijri: <strong>{hijri?.date}</strong>
              </p>
              <table className="table-stack">
                <thead>
                  <tr>
                    <th>Prayer</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fajr</td>
                    <td>{timings.Fajr}</td>
                  </tr>
                  <tr>
                    <td>Sunrise</td>
                    <td>{timings.Sunrise}</td>
                  </tr>
                  <tr>
                    <td>Dhuhr</td>
                    <td>{timings.Dhuhr}</td>
                  </tr>
                  <tr>
                    <td>Asr</td>
                    <td>{timings.Asr}</td>
                  </tr>
                  <tr>
                    <td>Maghrib</td>
                    <td>{timings.Maghrib}</td>
                  </tr>
                  <tr>
                    <td>Isha</td>
                    <td>{timings.Isha}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Prayer;
