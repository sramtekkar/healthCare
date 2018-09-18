import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp: FormGroup
  type: any = 'password';
  eye: any = 'fa fa-eye';
  API_URL = 'http://api.pillpresso.com/';

  public countries = [
    {
      "countryName": "United States",
      "countryCode": "+1",
      "code": "US"
    }, {
      "countryName": "Afghanistan",
      "countryCode": "+93",
      "code": "AF"
    }, {
      "countryName": "Albania",
      "countryCode": "+355",
      "code": "AL"
    }, {
      "countryName": "Algeria",
      "countryCode": "+213",
      "code": "DZ"
    }, {
      "countryName": "AmericanSamoa",
      "countryCode": "+1 684",
      "code": "AS"
    }, {
      "countryName": "Andorra",
      "countryCode": "+376",
      "code": "AD"
    }, {
      "countryName": "Angola",
      "countryCode": "+244",
      "code": "AO"
    }, {
      "countryName": "Anguilla",
      "countryCode": "+1 264",
      "code": "AI"
    }, {
      "countryName": "Antigua and Barbuda",
      "countryCode": "+1268",
      "code": "AG"
    }, {
      "countryName": "Argentina",
      "countryCode": "+54",
      "code": "AR"
    }, {
      "countryName": "Armenia",
      "countryCode": "+374",
      "code": "AM"
    }, {
      "countryName": "Aruba",
      "countryCode": "+297",
      "code": "AW"
    }, {
      "countryName": "Australia",
      "countryCode": "+61",
      "code": "AU"
    }, {
      "countryName": "Austria",
      "countryCode": "+43",
      "code": "AT"
    }, {
      "countryName": "Azerbaijan",
      "countryCode": "+994",
      "code": "AZ"
    }, {
      "countryName": "Bahamas",
      "countryCode": "+1 242",
      "code": "BS"
    }, {
      "countryName": "Bahrain",
      "countryCode": "+973",
      "code": "BH"
    }, {
      "countryName": "Bangladesh",
      "countryCode": "+880",
      "code": "BD"
    }, {
      "countryName": "Barbados",
      "countryCode": "+1 246",
      "code": "BB"
    }, {
      "countryName": "Belarus",
      "countryCode": "+375",
      "code": "BY"
    }, {
      "countryName": "Belgium",
      "countryCode": "+32",
      "code": "BE"
    }, {
      "countryName": "Belize",
      "countryCode": "+501",
      "code": "BZ"
    }, {
      "countryName": "Benin",
      "countryCode": "+229",
      "code": "BJ"
    }, {
      "countryName": "Bermuda",
      "countryCode": "+1 441",
      "code": "BM"
    }, {
      "countryName": "Bhutan",
      "countryCode": "+975",
      "code": "BT"
    }, {
      "countryName": "Bosnia and Herzegovina",
      "countryCode": "+387",
      "code": "BA"
    }, {
      "countryName": "Botswana",
      "countryCode": "+267",
      "code": "BW"
    }, {
      "countryName": "Brazil",
      "countryCode": "+55",
      "code": "BR"
    }, {
      "countryName": "British Indian Ocean Territory",
      "countryCode": "+246",
      "code": "IO"
    }, {
      "countryName": "Bulgaria",
      "countryCode": "+359",
      "code": "BG"
    }, {
      "countryName": "Burkina Faso",
      "countryCode": "+226",
      "code": "BF"
    }, {
      "countryName": "Burundi",
      "countryCode": "+257",
      "code": "BI"
    }, {
      "countryName": "Cambodia",
      "countryCode": "+855",
      "code": "KH"
    }, {
      "countryName": "Cameroon",
      "countryCode": "+237",
      "code": "CM"
    }, {
      "countryName": "Canada",
      "countryCode": "+1",
      "code": "CA"
    }, {
      "countryName": "Cape Verde",
      "countryCode": "+238",
      "code": "CV"
    }, {
      "countryName": "Cayman Islands",
      "countryCode": "+ 345",
      "code": "KY"
    }, {
      "countryName": "Central African Republic",
      "countryCode": "+236",
      "code": "CF"
    }, {
      "countryName": "Chad",
      "countryCode": "+235",
      "code": "TD"
    }, {
      "countryName": "Chile",
      "countryCode": "+56",
      "code": "CL"
    }, {
      "countryName": "China",
      "countryCode": "+86",
      "code": "CN"
    }, {
      "countryName": "Christmas Island",
      "countryCode": "+61",
      "code": "CX"
    }, {
      "countryName": "Colombia",
      "countryCode": "+57",
      "code": "CO"
    }, {
      "countryName": "Comoros",
      "countryCode": "+269",
      "code": "KM"
    }, {
      "countryName": "Congo",
      "countryCode": "+242",
      "code": "CG"
    }, {
      "countryName": "Cook Islands",
      "countryCode": "+682",
      "code": "CK"
    }, {
      "countryName": "Costa Rica",
      "countryCode": "+506",
      "code": "CR"
    }, {
      "countryName": "Croatia",
      "countryCode": "+385",
      "code": "HR"
    }, {
      "countryName": "Cuba",
      "countryCode": "+53",
      "code": "CU"
    }, {
      "countryName": "Cyprus",
      "countryCode": "+537",
      "code": "CY"
    }, {
      "countryName": "Czech Republic",
      "countryCode": "+420",
      "code": "CZ"
    }, {
      "countryName": "Denmark",
      "countryCode": "+45",
      "code": "DK"
    }, {
      "countryName": "Djibouti",
      "countryCode": "+253",
      "code": "DJ"
    }, {
      "countryName": "Dominica",
      "countryCode": "+1 767",
      "code": "DM"
    }, {
      "countryName": "Dominican Republic",
      "countryCode": "+1 849",
      "code": "DO"
    }, {
      "countryName": "Ecuador",
      "countryCode": "+593",
      "code": "EC"
    }, {
      "countryName": "Egypt",
      "countryCode": "+20",
      "code": "EG"
    }, {
      "countryName": "El Salvador",
      "countryCode": "+503",
      "code": "SV"
    }, {
      "countryName": "Equatorial Guinea",
      "countryCode": "+240",
      "code": "GQ"
    }, {
      "countryName": "Eritrea",
      "countryCode": "+291",
      "code": "ER"
    }, {
      "countryName": "Estonia",
      "countryCode": "+372",
      "code": "EE"
    }, {
      "countryName": "Ethiopia",
      "countryCode": "+251",
      "code": "ET"
    }, {
      "countryName": "Faroe Islands",
      "countryCode": "+298",
      "code": "FO"
    }, {
      "countryName": "Fiji",
      "countryCode": "+679",
      "code": "FJ"
    }, {
      "countryName": "Finland",
      "countryCode": "+358",
      "code": "FI"
    }, {
      "countryName": "France",
      "countryCode": "+33",
      "code": "FR"
    }, {
      "countryName": "French Guiana",
      "countryCode": "+594",
      "code": "GF"
    }, {
      "countryName": "French Polynesia",
      "countryCode": "+689",
      "code": "PF"
    }, {
      "countryName": "Gabon",
      "countryCode": "+241",
      "code": "GA"
    }, {
      "countryName": "Gambia",
      "countryCode": "+220",
      "code": "GM"
    }, {
      "countryName": "Georgia",
      "countryCode": "+995",
      "code": "GE"
    }, {
      "countryName": "Germany",
      "countryCode": "+49",
      "code": "DE"
    }, {
      "countryName": "Ghana",
      "countryCode": "+233",
      "code": "GH"
    }, {
      "countryName": "Gibraltar",
      "countryCode": "+350",
      "code": "GI"
    }, {
      "countryName": "Greece",
      "countryCode": "+30",
      "code": "GR"
    }, {
      "countryName": "Greenland",
      "countryCode": "+299",
      "code": "GL"
    }, {
      "countryName": "Grenada",
      "countryCode": "+1 473",
      "code": "GD"
    }, {
      "countryName": "Guadeloupe",
      "countryCode": "+590",
      "code": "GP"
    }, {
      "countryName": "Guam",
      "countryCode": "+1 671",
      "code": "GU"
    }, {
      "countryName": "Guatemala",
      "countryCode": "+502",
      "code": "GT"
    }, {
      "countryName": "Guinea",
      "countryCode": "+224",
      "code": "GN"
    }, {
      "countryName": "Guinea-Bissau",
      "countryCode": "+245",
      "code": "GW"
    }, {
      "countryName": "Guyana",
      "countryCode": "+595",
      "code": "GY"
    }, {
      "countryName": "Haiti",
      "countryCode": "+509",
      "code": "HT"
    }, {
      "countryName": "Honduras",
      "countryCode": "+504",
      "code": "HN"
    }, {
      "countryName": "Hungary",
      "countryCode": "+36",
      "code": "HU"
    }, {
      "countryName": "Iceland",
      "countryCode": "+354",
      "code": "IS"
    }, {
      "countryName": "India",
      "countryCode": "+91",
      "code": "IN"
    }, {
      "countryName": "Indonesia",
      "countryCode": "+62",
      "code": "ID"
    }, {
      "countryName": "Iraq",
      "countryCode": "+964",
      "code": "IQ"
    }, {
      "countryName": "Ireland",
      "countryCode": "+353",
      "code": "IE"
    }, {
      "countryName": "Israel",
      "countryCode": "+972",
      "code": "IL"
    }, {
      "countryName": "Italy",
      "countryCode": "+39",
      "code": "IT"
    }, {
      "countryName": "Jamaica",
      "countryCode": "+1 876",
      "code": "JM"
    }, {
      "countryName": "Japan",
      "countryCode": "+81",
      "code": "JP"
    }, {
      "countryName": "Jordan",
      "countryCode": "+962",
      "code": "JO"
    }, {
      "countryName": "Kazakhstan",
      "countryCode": "+7 7",
      "code": "KZ"
    }, {
      "countryName": "Kenya",
      "countryCode": "+254",
      "code": "KE"
    }, {
      "countryName": "Kiribati",
      "countryCode": "+686",
      "code": "KI"
    }, {
      "countryName": "Kuwait",
      "countryCode": "+965",
      "code": "KW"
    }, {
      "countryName": "Kyrgyzstan",
      "countryCode": "+996",
      "code": "KG"
    }, {
      "countryName": "Latvia",
      "countryCode": "+371",
      "code": "LV"
    }, {
      "countryName": "Lebanon",
      "countryCode": "+961",
      "code": "LB"
    }, {
      "countryName": "Lesotho",
      "countryCode": "+266",
      "code": "LS"
    }, {
      "countryName": "Liberia",
      "countryCode": "+231",
      "code": "LR"
    }, {
      "countryName": "Liechtenstein",
      "countryCode": "+423",
      "code": "LI"
    }, {
      "countryName": "Lithuania",
      "countryCode": "+370",
      "code": "LT"
    }, {
      "countryName": "Luxembourg",
      "countryCode": "+352",
      "code": "LU"
    }, {
      "countryName": "Madagascar",
      "countryCode": "+261",
      "code": "MG"
    }, {
      "countryName": "Malawi",
      "countryCode": "+265",
      "code": "MW"
    }, {
      "countryName": "Malaysia",
      "countryCode": "+60",
      "code": "MY"
    }, {
      "countryName": "Maldives",
      "countryCode": "+960",
      "code": "MV"
    }, {
      "countryName": "Mali",
      "countryCode": "+223",
      "code": "ML"
    }, {
      "countryName": "Malta",
      "countryCode": "+356",
      "code": "MT"
    }, {
      "countryName": "Marshall Islands",
      "countryCode": "+692",
      "code": "MH"
    }, {
      "countryName": "Martinique",
      "countryCode": "+596",
      "code": "MQ"
    }, {
      "countryName": "Mauritania",
      "countryCode": "+222",
      "code": "MR"
    }, {
      "countryName": "Mauritius",
      "countryCode": "+230",
      "code": "MU"
    }, {
      "countryName": "Mayotte",
      "countryCode": "+262",
      "code": "YT"
    }, {
      "countryName": "Mexico",
      "countryCode": "+52",
      "code": "MX"
    }, {
      "countryName": "Monaco",
      "countryCode": "+377",
      "code": "MC"
    }, {
      "countryName": "Mongolia",
      "countryCode": "+976",
      "code": "MN"
    }, {
      "countryName": "Montenegro",
      "countryCode": "+382",
      "code": "ME"
    }, {
      "countryName": "Montserrat",
      "countryCode": "+1664",
      "code": "MS"
    }, {
      "countryName": "Morocco",
      "countryCode": "+212",
      "code": "MA"
    }, {
      "countryName": "Myanmar",
      "countryCode": "+95",
      "code": "MM"
    }, {
      "countryName": "Namibia",
      "countryCode": "+264",
      "code": "NA"
    }, {
      "countryName": "Nauru",
      "countryCode": "+674",
      "code": "NR"
    }, {
      "countryName": "Nepal",
      "countryCode": "+977",
      "code": "NP"
    }, {
      "countryName": "Netherlands",
      "countryCode": "+31",
      "code": "NL"
    }, {
      "countryName": "Netherlands Antilles",
      "countryCode": "+599",
      "code": "AN"
    }, {
      "countryName": "New Caledonia",
      "countryCode": "+687",
      "code": "NC"
    }, {
      "countryName": "New Zealand",
      "countryCode": "+64",
      "code": "NZ"
    }, {
      "countryName": "Nicaragua",
      "countryCode": "+505",
      "code": "NI"
    }, {
      "countryName": "Niger",
      "countryCode": "+227",
      "code": "NE"
    }, {
      "countryName": "Nigeria",
      "countryCode": "+234",
      "code": "NG"
    }, {
      "countryName": "Niue",
      "countryCode": "+683",
      "code": "NU"
    }, {
      "countryName": "Norfolk Island",
      "countryCode": "+672",
      "code": "NF"
    }, {
      "countryName": "Northern Mariana Islands",
      "countryCode": "+1 670",
      "code": "MP"
    }, {
      "countryName": "Norway",
      "countryCode": "+47",
      "code": "NO"
    }, {
      "countryName": "Oman",
      "countryCode": "+968",
      "code": "OM"
    }, {
      "countryName": "Pakistan",
      "countryCode": "+92",
      "code": "PK"
    }, {
      "countryName": "Palau",
      "countryCode": "+680",
      "code": "PW"
    }, {
      "countryName": "Panama",
      "countryCode": "+507",
      "code": "PA"
    }, {
      "countryName": "Papua New Guinea",
      "countryCode": "+675",
      "code": "PG"
    }, {
      "countryName": "Paraguay",
      "countryCode": "+595",
      "code": "PY"
    }, {
      "countryName": "Peru",
      "countryCode": "+51",
      "code": "PE"
    }, {
      "countryName": "Philippines",
      "countryCode": "+63",
      "code": "PH"
    }, {
      "countryName": "Poland",
      "countryCode": "+48",
      "code": "PL"
    }, {
      "countryName": "Portugal",
      "countryCode": "+351",
      "code": "PT"
    }, {
      "countryName": "Puerto Rico",
      "countryCode": "+1 939",
      "code": "PR"
    }, {
      "countryName": "Qatar",
      "countryCode": "+974",
      "code": "QA"
    }, {
      "countryName": "Romania",
      "countryCode": "+40",
      "code": "RO"
    }, {
      "countryName": "Rwanda",
      "countryCode": "+250",
      "code": "RW"
    }, {
      "countryName": "Samoa",
      "countryCode": "+685",
      "code": "WS"
    }, {
      "countryName": "San Marino",
      "countryCode": "+378",
      "code": "SM"
    }, {
      "countryName": "Saudi Arabia",
      "countryCode": "+966",
      "code": "SA"
    }, {
      "countryName": "Senegal",
      "countryCode": "+221",
      "code": "SN"
    }, {
      "countryName": "Serbia",
      "countryCode": "+381",
      "code": "RS"
    }, {
      "countryName": "Seychelles",
      "countryCode": "+248",
      "code": "SC"
    }, {
      "countryName": "Sierra Leone",
      "countryCode": "+232",
      "code": "SL"
    }, {
      "countryName": "Singapore",
      "countryCode": "+65",
      "code": "SG"
    }, {
      "countryName": "Slovakia",
      "countryCode": "+421",
      "code": "SK"
    }, {
      "countryName": "Slovenia",
      "countryCode": "+386",
      "code": "SI"
    }, {
      "countryName": "Solomon Islands",
      "countryCode": "+677",
      "code": "SB"
    }, {
      "countryName": "South Africa",
      "countryCode": "+27",
      "code": "ZA"
    }, {
      "countryName": "South Georgia and the South Sandwich Islands",
      "countryCode": "+500",
      "code": "GS"
    }, {
      "countryName": "Spain",
      "countryCode": "+34",
      "code": "ES"
    }, {
      "countryName": "Sri Lanka",
      "countryCode": "+94",
      "code": "LK"
    }, {
      "countryName": "Sudan",
      "countryCode": "+249",
      "code": "SD"
    }, {
      "countryName": "SuricountryName",
      "countryCode": "+597",
      "code": "SR"
    }, {
      "countryName": "Swaziland",
      "countryCode": "+268",
      "code": "SZ"
    }, {
      "countryName": "Sweden",
      "countryCode": "+46",
      "code": "SE"
    }, {
      "countryName": "Switzerland",
      "countryCode": "+41",
      "code": "CH"
    }, {
      "countryName": "Tajikistan",
      "countryCode": "+992",
      "code": "TJ"
    }, {
      "countryName": "Thailand",
      "countryCode": "+66",
      "code": "TH"
    }, {
      "countryName": "Togo",
      "countryCode": "+228",
      "code": "TG"
    }, {
      "countryName": "Tokelau",
      "countryCode": "+690",
      "code": "TK"
    }, {
      "countryName": "Tonga",
      "countryCode": "+676",
      "code": "TO"
    }, {
      "countryName": "Trinidad and Tobago",
      "countryCode": "+1 868",
      "code": "TT"
    }, {
      "countryName": "Tunisia",
      "countryCode": "+216",
      "code": "TN"
    }, {
      "countryName": "Turkey",
      "countryCode": "+90",
      "code": "TR"
    }, {
      "countryName": "Turkmenistan",
      "countryCode": "+993",
      "code": "TM"
    }, {
      "countryName": "Turks and Caicos Islands",
      "countryCode": "+1 649",
      "code": "TC"
    }, {
      "countryName": "Tuvalu",
      "countryCode": "+688",
      "code": "TV"
    }, {
      "countryName": "Uganda",
      "countryCode": "+256",
      "code": "UG"
    }, {
      "countryName": "Ukraine",
      "countryCode": "+380",
      "code": "UA"
    }, {
      "countryName": "United Arab Emirates",
      "countryCode": "+971",
      "code": "AE"
    }, {
      "countryName": "United Kingdom",
      "countryCode": "+44",
      "code": "GB"
    }, {
      "countryName": "Uruguay",
      "countryCode": "+598",
      "code": "UY"
    }, {
      "countryName": "Uzbekistan",
      "countryCode": "+998",
      "code": "UZ"
    }, {
      "countryName": "Vanuatu",
      "countryCode": "+678",
      "code": "VU"
    }, {
      "countryName": "Wallis and Futuna",
      "countryCode": "+681",
      "code": "WF"
    }, {
      "countryName": "Yemen",
      "countryCode": "+967",
      "code": "YE"
    }, {
      "countryName": "Zambia",
      "countryCode": "+260",
      "code": "ZM"
    }, {
      "countryName": "Zimbabwe",
      "countryCode": "+263",
      "code": "ZW"
    }, {
      "countryName": "aland Islands",
      "countryCode": "+358",
      "code": "AX"
    }, {
      "countryName": "Antarctica",
      "countryCode": "+672",
      "code": "AQ"
    }, {
      "countryName": "Bolivia, Plurinational State of",
      "countryCode": "+591",
      "code": "BO"
    }, {
      "countryName": "Brunei Darussalam",
      "countryCode": "+673",
      "code": "BN"
    }, {
      "countryName": "Cocos (Keeling) Islands",
      "countryCode": "+61",
      "code": "CC"
    }, {
      "countryName": "Congo, The Democratic Republic of the",
      "countryCode": "+243",
      "code": "CD"
    }, {
      "countryName": "Cote d'Ivoire",
      "countryCode": "+225",
      "code": "CI"
    }, {
      "countryName": "Falkland Islands (Malvinas)",
      "countryCode": "+500",
      "code": "FK"
    }, {
      "countryName": "Guernsey",
      "countryCode": "+44",
      "code": "GG"
    }, {
      "countryName": "Holy See (Vatican City State)",
      "countryCode": "+379",
      "code": "VA"
    }, {
      "countryName": "Hong Kong",
      "countryCode": "+852",
      "code": "HK"
    }, {
      "countryName": "Iran, Islamic Republic of",
      "countryCode": "+98",
      "code": "IR"
    }, {
      "countryName": "Isle of Man",
      "countryCode": "+44",
      "code": "IM"
    }, {
      "countryName": "Jersey",
      "countryCode": "+44",
      "code": "JE"
    }, {
      "countryName": "Korea, Democratic People's Republic of",
      "countryCode": "+850",
      "code": "KP"
    }, {
      "countryName": "Korea, Republic of",
      "countryCode": "+82",
      "code": "KR"
    }, {
      "countryName": "Lao People's Democratic Republic",
      "countryCode": "+856",
      "code": "LA"
    }, {
      "countryName": "Libyan Arab Jamahiriya",
      "countryCode": "+218",
      "code": "LY"
    }, {
      "countryName": "Macao",
      "countryCode": "+853",
      "code": "MO"
    }, {
      "countryName": "Macedonia, The Former Yugoslav Republic of",
      "countryCode": "+389",
      "code": "MK"
    }, {
      "countryName": "Micronesia, Federated States of",
      "countryCode": "+691",
      "code": "FM"
    }, {
      "countryName": "Moldova, Republic of",
      "countryCode": "+373",
      "code": "MD"
    }, {
      "countryName": "Mozambique",
      "countryCode": "+258",
      "code": "MZ"
    }, {
      "countryName": "Palestinian Territory, Occupied",
      "countryCode": "+970",
      "code": "PS"
    }, {
      "countryName": "Pitcairn",
      "countryCode": "+872",
      "code": "PN"
    }, {
      "countryName": "Réunion",
      "countryCode": "+262",
      "code": "RE"
    }, {
      "countryName": "Russia",
      "countryCode": "+7",
      "code": "RU"
    }, {
      "countryName": "Saint Barthélemy",
      "countryCode": "+590",
      "code": "BL"
    }, {
      "countryName": "Saint Helena, Ascension and Tristan Da Cunha",
      "countryCode": "+290",
      "code": "SH"
    }, {
      "countryName": "Saint Kitts and Nevis",
      "countryCode": "+1 869",
      "code": "KN"
    }, {
      "countryName": "Saint Lucia",
      "countryCode": "+1 758",
      "code": "LC"
    }, {
      "countryName": "Saint Martin",
      "countryCode": "+590",
      "code": "MF"
    }, {
      "countryName": "Saint Pierre and Miquelon",
      "countryCode": "+508",
      "code": "PM"
    }, {
      "countryName": "Saint Vincent and the Grenadines",
      "countryCode": "+1 784",
      "code": "VC"
    }, {
      "countryName": "Sao Tome and Principe",
      "countryCode": "+239",
      "code": "ST"
    }, {
      "countryName": "Somalia",
      "countryCode": "+252",
      "code": "SO"
    }, {
      "countryName": "Svalbard and Jan Mayen",
      "countryCode": "+47",
      "code": "SJ"
    }, {
      "countryName": "Syrian Arab Republic",
      "countryCode": "+963",
      "code": "SY"
    }, {
      "countryName": "Taiwan, Province of China",
      "countryCode": "+886",
      "code": "TW"
    }, {
      "countryName": "Tanzania, United Republic of",
      "countryCode": "+255",
      "code": "TZ"
    }, {
      "countryName": "Timor-Leste",
      "countryCode": "+670",
      "code": "TL"
    }, {
      "countryName": "Venezuela, Bolivarian Republic of",
      "countryCode": "+58",
      "code": "VE"
    }, {
      "countryName": "Viet Nam",
      "countryCode": "+84",
      "code": "VN"
    }, {
      "countryName": "Virgin Islands, British",
      "countryCode": "+1 284",
      "code": "VG"
    }, {
      "countryName": "Virgin Islands, U.S.",
      "countryCode": "+1 340",
      "code": "VI"
    }
  ];

  constructor(private formBuilder: FormBuilder, public httpClient: HttpClient, private router: Router) {
    this.signUp = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      country: ['', Validators.required],
      countryCode: ['', [Validators.required]],
      event: ['Verification code'],
      verify_field: ['Mobile'],
      emailAvai: ['']
    })
  }

  ngOnInit() {
  }

  isNumber(e) {
    console.log('e', e)

    if (e.keyCode >= 48 && e.keyCode <= 57) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }

  }


  readPassword(typ) {
    if (typ == 'password') {
      this.type = 'text'
      this.eye = 'fa fa-eye-slash'
    } else {
      this.type = 'password'
      this.eye = 'fa fa-eye';
    }
  }

  onSubmit() {
    this.signUp.controls.firstName.markAsTouched();
    this.signUp.controls.country.markAsTouched()
    this.signUp.controls.email.markAsTouched();
    this.signUp.controls.mobileNumber.markAsTouched();
    this.signUp.controls.password.markAsTouched()

    console.log('this.signUp.controls', this.signUp)
    // stop here if form is invalid
    if (this.signUp.invalid) {
      console.log("Gb")
      return;
    } else {
      this.httpClient.post(this.API_URL + "signUp", this.signUp.value).subscribe((response) => {
        console.log("Signup response", response);
        if (status == "success") {
          this.router.navigateByUrl('/verification')
        }
      }, (err) => {
        console.log('err', err)
      });
    }
  }

  emailNothave() {
    let status = this.signUp.controls.emailAvai.value;
    if (status) {
      this.signUp.get('email').clearValidators();
      this.signUp.get('email').updateValueAndValidity();
    } else {
      this.signUp.get('email').setValidators([Validators.required, Validators.email]);
      this.signUp.get('email').updateValueAndValidity();
    }
  }

  tap(country) {
    console.log('countryCode:-', country)
    let countryCode = country.item.countryCode;
    this.signUp.controls['countryCode'].setValue(countryCode)
  }


  launch_toast(toastRef) {
    toastRef.className = "show";
    setTimeout(function () {
      toastRef.className = toastRef.className.replace("show", "");
    }, 5000);
  }

}
