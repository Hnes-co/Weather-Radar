
export function handlePrecipitation(type, data) {
  if(data.rain) {
    if(type === 'current') {
      return data.rain['3h'] ? `Precipitation (3 h): ${data.rain['3h']} mm` : `Precipitation (1 h): ${data.rain['1h']} mm`;
    }
    return data.rain['3h'] ? `${data.rain['3h']} mm` : `${data.rain['1h']} mm`;
  }
  if(data.snow) {
    if(type === 'current') {
      return data.snow['3h'] ? `Precipitation (3 h): ${data.snow['3h']} mm` : `Precipitation (1 h): ${data.snow['1h']} mm`;
    }
    return data.snow['3h'] ? `${data.snow['3h']} mm` : `${data.snow['1h']} mm`;
  }
  return type === 'current' ? 'Precipitation (3 h): 0 mm' : '0 mm';
}
