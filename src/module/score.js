class Scores{
 constructor(initial = null){
  initial ? this.data = [initial] : this.data =[] ;
 }

 add(score){
  if(this.validate(score)){
   this.data = this.data.concat(score);
  }
 }

 reset(value){
  this.data = [];
 }

 validate(score){
   if (!('name' in score
   && 'score' in score)) {
     return false;
   }
  return true;
 };
}

export default Scores