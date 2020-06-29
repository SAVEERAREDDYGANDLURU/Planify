var place={
  'adambakkam':'{"lat": 12.9880,"long":80.2047}',
  'adayar':'{"lat": 13.0012,"long":80.2565}',
  'alandur':'{"lat": 12.9975,"long":80.2006}',
  'Alapakkam':'{"lat": 13.0490,"long":80.1673}',
  'Alwarpet':'{"lat":13.0335,"long":80.2531}',
  'Alwarthirunagar':'{"lat":13.0426,"long":80.1840}',
  'Ambattur':'{"lat":13.1143,"long":80.1548}',
  'Aminjikarai':'{"lat":13.0698,"long":80.2245}',
  'Anna Nagar':'{"lat":13.0850,"long":80.2101}',
  'Annanur':'{"lat":13.1184,"long": 80.1246}',
  'Arumbakkam':'{"lat":13.0724,"long": 80.2102}',
  'Ashok Nagar':'{"lat":13.0373,"long":80.2123}',
  'Avadi':'{"lat":13.1067,"long":80.0970}',
  'Ayanavaram':'{"lat":13.0986,"long":80.2337}',
  'Besant Nagar':'{"lat":13.0003,"long":80.2667}',
  'Basin Bridge':'{"lat":13.1065,"long":80.2753}',
  'Chepauk':'{"lat":13.0633,"long":80.2812}',
  'Chetput':'{"lat":13.0714,"long":80.2417}',
  'Chintadripet':'{"lat":13.0750,"long":80.2698}',
  'Chitlapakkam':'{"lat":12.9370,"long":80.1389}',
  'Choolai':'{"lat":13.0919,"long":80.2642}',
  'Choolaimedu':'{"lat":13.0632,"long":80.2250}',
  'Chrompet':'{"lat":12.9516,"long":80.1462}'
}
var temp=place['adambakkam'];
var loc=JSON.parse(temp);
console.log(loc['lat']);