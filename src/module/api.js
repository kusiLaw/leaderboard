class Api {
 url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/o8IWtze82YmVpYmdLyib/scores/';

 newScore = async (object) => {
   await fetch(this.url, {
     method: 'POST',
     body: JSON.stringify({
       ...object,
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8',
     },
   });
 }

 getScores = async () => {
   try {
     const response = await fetch(this.url, {
       method: 'GET',
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     });
     const results = await response.json();
     return results;
   } catch (e) {
     return e;
   }
 }
}

export default Api;
