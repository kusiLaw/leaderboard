class Scores {
 data

 constructor(initial = []) {
   this.data = initial;
 }

 add(score) {
   if (Scores.validate(score)) {
     this.data = this.data.concat(score);
   }
 }

 reset() {
   this.data = [];
 }

 static validate(score) {
   if (!('name' in score
   && 'score' in score)) {
     return false;
   }
   return true;
 }
}

export default Scores;