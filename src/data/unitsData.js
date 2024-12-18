const unitsData = {

   length:{
      id:crypto.randomUUID(),
      unitName : 'Length',
      units: ['inch','centimeter','meter','kilometer','mile','milimeter','foot'],
      variants:{
        inchfoot:{
            formula:'divide the length value by 12',
            calculation(n){
                return n/12;
            }
        },

        footinch:{
            formula:'multiply the length value by 12',
            calculation(n){
                return n*12;
            }
        },
        
        inchmeter:{
            formula:'for an approximate result, divide the length value by 39.3700787',
            calculation(n){
                return n/39.3700787;
            }
        },

        meterinch:{
            formula:'for an approximate result, multiply the length value by 39.3700787',
            calculation(n){
                return n*39.3700787;
            }
        },


        inchmilimeter:{
            formula:'multiply the length value by 25.4',
            calculation(n){
                return n * 25.4;
            }
        },

        milimeterinch:{
            formula:'divide the length value by 25.4',
            calculation(n){
                return n / 25.4;
            }
        },

        inchkilometer:{
            formula:'divide the length value by 39370.0787',
            calculation(n){
                return n / 39370.0787;
            }
        },

        kilometerinch:{
            formula:'multiply the length value by 39370.0787',
            calculation(n){
                return n * 39370.0787;
            }
        },

        inchmile:{
            formula:'divide the length value by 63360',
            calculation(n){
                return n / 63360;
            }
        },

        mileinch:{
            formula:'multiply the length value by 63360',
            calculation(n){
                return n * 63360;
            }
        },
        inchcentimeter:{
            formula:'multiply the length value by 2.54',
            calculation(n){
                return n * 2.54;
            }
        },
        centimeterinch:{
            formula:'divide the length value by 2.54',
            calculation(n){
                return n / 2.54;
            }
        },
        
        footmeter:{
            formula:'divide the length value by 3.2808399',
            calculation(n){
                return n / 3.2808399;
            }
        },

        meterfoot:{
            formula:'multiply the length value by 3.2808399',
            calculation(n){
                return n * 3.2808399;
            }
        },
       
        footkilometer:{
            formula:'divide the length value by 3280.8399',
            calculation(n){
                return n / 3280.8399;
            }
        },
        
        kilometerfoot:{
            formula:'multiply the length value by 3280.8399',
            calculation(n){
                return n * 3280.8399;
            }
        },

        footmile:{
            formula:'divide the length value by 5280',
            calculation(n){
                return n / 5280;
            } 
        },

        milefoot:{
            formula:'multiply the length value by 5280',
            calculation(n){
                return n * 5280;
            } 
        },

        footcentimeter:{
            formula:'multiply the length value by 30.48',
            calculation(n){
                return n * 30.48;
            } 
        },

        centimeterfoot:{
            formula:'divide the length value by 30.48',
            calculation(n){
                return n / 30.48;
            } 
        },

        footmilimeter:{
            formula:'multiply the length value by 304.8',
            calculation(n){
                return n * 304.8;
            } 
        },

        milimeterfoot:{
            formula:'divide the length value by 304.8',
            calculation(n){
                return n / 304.8;
            } 
        },
        
        meterkilometer:{
            formula:'divide the length value by 1000',
            calculation(n){
                return n / 1000;
            } 
        },

        kilometermeter:{
            formula:'multiply the length value by 1000',
            calculation(n){
                return n * 1000;
            } 
        },

        metermile:{
            formula:'divide the length value by 1609.344',
            calculation(n){
                return n / 1609.344;
            } 
        },

        milemeter:{
            formula:'multiply the length value by 1609.344',
            calculation(n){
                return n * 1609.344;
            } 
        },
      
        metercentimeter:{
            formula:'multiply the length value by 100',
            calculation(n){
                return n * 100;
            } 
        },
       
        centimetermeter:{
            formula:'divide the length value by 100',
            calculation(n){
                return n / 100;
            } 
        },

        metermilimeter:{
            formula:'multiply the length value by 1000',
            calculation(n){
                return n * 1000;
            } 
        },

        milimetermeter:{
            formula:'divide the length value by 1000',
            calculation(n){
                return n / 1000;
            } 
        },

        kilometermile:{
            formula:'divide the length value by 1.609344',
            calculation(n){
                return n / 1.609344;
            } 
        },

        milekilometer:{
            formula:'multiply the length value by 1.609344',
            calculation(n){
                return n * 1.609344;
            } 
        },

        kilometercentimeter:{
            formula:'multiply the length value by 100000',
            calculation(n){
                return n * 100000;
            } 
        },

        centimeterkilometer:{
            formula:'divide the length value by 100000',
            calculation(n){
                return n / 100000;
            } 
        },

        kilometermilimeter:{
            formula:'multiply the length value by 1000000',
            calculation(n){
                return n * 1000000;
            } 
        },
         
        milimeterkilometer:{
            formula:'divide the length value by 1000000',
            calculation(n){
                return n / 1000000;
            } 
        },
        centimetermile:{
            formula:'divide the length value by 160934.4',
            calculation(n){
                return n / 160934.4;
            } 
        },
        
        milecentimeter:{
            formula:'multiply the length value by 160934.4',
            calculation(n){
                return n * 160934.4;
            } 
        },

        centimetermilimeter:{
            formula:'multiply the length value by 10',
            calculation(n){
                return n * 10;
            } 
        },

        milimetercentimeter:{
            formula:'divide the length value by 10',
            calculation(n){
                return n / 10;
            } 
        },
        milemilimeter:{
            formula:'multiply the length value by 1.6093E+6',
            calculation(n){
                return n * 1.6093 * Math.pow(10,6);
            } 
        },
        milimetermile:{
            formula:'divide the length value by 1.6093E+6',
            calculation(n){
                return 1 / n * 1.6093 * Math.pow(10,6);
            } 
        }
      }
    },

   mass:{
        id:crypto.randomUUID(),
        unitName : 'Mass',
        units: ['kilogram','gram','metricton','pound'],
        variants:{
          kilogramgram:{
              formula:'multiply the mass value by 1000' ,
              calculation(n){
                  return n*1000;
              }
          },

          gramkilogram:{
            formula:'divide the mass value by 1000' ,
            calculation(n){
                return n/1000;
            }
        },

        kilogrampound:{
            formula:'multiply the mass value by 2.20462262' ,
            calculation(n){
                return n * 2.20462262;
            }
        },


        poundkilogram:{
            formula:'divide the mass value by 2.20462262' ,
            calculation(n){
                return n / 2.20462262;
            }
        },
          kilogrammetricton:{
              formula:'divide the mass value by 1000',
              calculation(n){
                  return n/1000;
              }
          },

          metrictonkilogram:{
            formula:'multiply the mass value by 1000',
            calculation(n){
                return n * 1000;
            }
        },

        grampound:{
            formula:'divide the mass value by 453.59237',
            calculation(n){
                return n / 453.59237;
            }
        },

        poundgram:{
            formula:'multiply the mass value by 453.59237',
            calculation(n){
                return n * 453.59237;
            }
        },

        grammetricton:{
            formula:'divide the mass value by 1000000',
            calculation(n){
                return n / 1000000;
            }
        },

       metrictongram:{
            formula:'multiply the mass value by 1000000',
            calculation(n){
                return n * 1000000;
            }
        },

        metrictonpound:{
            formula:'multiply the mass value by 2204.62262',
            calculation(n){
                return n * 2204.62262;
            }
        },

        poundmetricton:{
            formula:'divide the mass value by 2204.62262',
            calculation(n){
                return n / 2204.62262;
            }
        },
          
        }
      },

      volume: {
        id: crypto.randomUUID(),
        unitName: 'Volume',
        units: [
          'liter', 'milliliter', 'gallon'
        ],
        variants: {
          litergallon: {
            formula: 'Multiply the volume value by 0.264172',
            calculation(n) {
              return n * 0.264172;
            }
          },
          gallonliter: {
            formula: 'Divide the volume value by 0.264172',
            calculation(n) {
              return n / 0.264172;
            }
          },
          litermilliliter: {
            formula: 'Multiply the volume value by 1000',
            calculation(n) {
              return n * 1000;
            }
          },
          milliliterliter: {
            formula: 'Divide the volume value by 1000',
            calculation(n) {
              return n / 1000;
            }
          },
          gallonmilliliter: {
            formula: 'Multiply the volume value by 3785.41',
            calculation(n) {
              return n * 3785.41;
            }
          },
          millilitergallon: {
            formula: 'Divide the volume value by 3785.41',
            calculation(n) {
              return n / 3785.41;
            }
          }
        }
      },


      time: {
        id: crypto.randomUUID(),
        unitName: 'Time',
        units: [
          'second', 'minute', 'hour', 'day', 'week', 'month', 'year'
        ],
        variants: {
          secondminute: {
            formula: 'Multiply the time value by 60',
            calculation(n) {
              return n / 60;
            }
          },
          secondhour: {
            formula: 'Multiply the time value by 1/3600',
            calculation(n) {
              return n / 3600;
            }
          },
          secondday: {
            formula: 'Multiply the time value by 1/86400',
            calculation(n) {
              return n / 86400;
            }
          },
          secondweek: {
            formula: 'Multiply the time value by 1/604800',
            calculation(n) {
              return n / 604800;
            }
          },
          secondmonth: {
            formula: 'Multiply the time value by 1/2592000',
            calculation(n) {
              return n / 2592000;
            }
          },
          secondyear: {
            formula: 'Multiply the time value by 1/31536000',
            calculation(n) {
              return n / 31536000;
            }
          },
          
          minutesecond: {
            formula: 'Divide the time value by 60',
            calculation(n) {
              return n * 60;
            }
          },
          minutehour: {
            formula: 'Multiply the time value by 1/60',
            calculation(n) {
              return n / 60;
            }
          },
          minuteday: {
            formula: 'Multiply the time value by 1/1440',
            calculation(n) {
              return n / 1440;
            }
          },
          minuteweek: {
            formula: 'Multiply the time value by 1/10080',
            calculation(n) {
              return n / 10080;
            }
          },
          minutemonth: {
            formula: 'Multiply the time value by 1/43800',
            calculation(n) {
              return n / 43800;
            }
          },
          minuteyear: {
            formula: 'Multiply the time value by 1/525600',
            calculation(n) {
              return n / 525600;
            }
          },
    
          hoursecond: {
            formula: 'Multiply the time value by 3600',
            calculation(n) {
              return n * 3600;
            }
          },
          hourminute: {
            formula: 'Multiply the time value by 60',
            calculation(n) {
              return n * 60;
            }
          },
          hourday: {
            formula: 'Multiply the time value by 1/24',
            calculation(n) {
              return n / 24;
            }
          },
          hourweek: {
            formula: 'Multiply the time value by 1/168',
            calculation(n) {
              return n / 168;
            }
          },
          hourmonth: {
            formula: 'Multiply the time value by 1/730',
            calculation(n) {
              return n / 730;
            }
          },
          houryear: {
            formula: 'Multiply the time value by 1/8760',
            calculation(n) {
              return n / 8760;
            }
          },
    
          daysecond: {
            formula: 'Multiply the time value by 86400',
            calculation(n) {
              return n * 86400;
            }
          },
          dayminute: {
            formula: 'Multiply the time value by 1440',
            calculation(n) {
              return n * 1440;
            }
          },
          dayhour: {
            formula: 'Multiply the time value by 24',
            calculation(n) {
              return n * 24;
            }
          },
          dayweek: {
            formula: 'Multiply the time value by 1/7',
            calculation(n) {
              return n / 7;
            }
          },
          daymonth: {
            formula: 'Multiply the time value by 1/30',
            calculation(n) {
              return n / 30;
            }
          },
          dayyear: {
            formula: 'Multiply the time value by 1/365',
            calculation(n) {
              return n / 365;
            }
          },
    
          weeksecond: {
            formula: 'Multiply the time value by 604800',
            calculation(n) {
              return n * 604800;
            }
          },
          weekminute: {
            formula: 'Multiply the time value by 10080',
            calculation(n) {
              return n * 10080;
            }
          },
          weekhour: {
            formula: 'Multiply the time value by 168',
            calculation(n) {
              return n * 168;
            }
          },
          weekday: {
            formula: 'Multiply the time value by 7',
            calculation(n) {
              return n * 7;
            }
          },
          weekmonth: {
            formula: 'Multiply the time value by 1/4.345',
            calculation(n) {
              return n / 4.345;
            }
          },
          weekyear: {
            formula: 'Multiply the time value by 1/52',
            calculation(n) {
              return n / 52;
            }
          },
    
          monthsecond: {
            formula: 'Multiply the time value by 2592000',
            calculation(n) {
              return n * 2592000;
            }
          },
          monthminute: {
            formula: 'Multiply the time value by 43800',
            calculation(n) {
              return n * 43800;
            }
          },
          monthhour: {
            formula: 'Multiply the time value by 730',
            calculation(n) {
              return n * 730;
            }
          },
          monthday: {
            formula: 'Multiply the time value by 30',
            calculation(n) {
              return n * 30;
            }
          },
          monthweek: {
            formula: 'Multiply the time value by 4.345',
            calculation(n) {
              return n * 4.345;
            }
          },
          monthyear: {
            formula: 'Multiply the time value by 1/12',
            calculation(n) {
              return n / 12;
            }
          },
    
          yearsecond: {
            formula: 'Multiply the time value by 31536000',
            calculation(n) {
              return n * 31536000;
            }
          },
          yearminute: {
            formula: 'Multiply the time value by 525600',
            calculation(n) {
              return n * 525600;
            }
          },
          yearhour: {
            formula: 'Multiply the time value by 8760',
            calculation(n) {
              return n * 8760;
            }
          },
          yearday: {
            formula: 'Multiply the time value by 365',
            calculation(n) {
              return n * 365;
            }
          },
          yearweek: {
            formula: 'Multiply the time value by 52',
            calculation(n) {
              return n * 52;
            }
          },
          yearmonth: {
            formula: 'Multiply the time value by 12',
            calculation(n) {
              return n * 12;
            }
          }
        }
      },
  
};

    function getUnitsData(){
        return unitsData;
    }


export {getUnitsData}