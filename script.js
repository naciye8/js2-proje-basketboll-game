let johnScore= (89+120+103)/3;
let mikeScore= (116+94+123)/3;
let maryScore= (97+134+105)/3;

console.log(johnScore);
console.log(mikeScore);
console.log(maryScore);

if (johnScore>mikeScore) {
    console.log(`John'nun takımı ${johnScore} puanla kazandı`);

} else if (mikeScore>johnScore) {
    console.log(`Mike'ın takımı ${mikeScore} puanla kazandı`);

} else {
    console.log(`Maç ${johnScore} - ${mikeScore} berabere bitti`)
}

if (johnScore>mikeScore && johnScore>maryScore){
    console.log(`John'nun takımı ${johnScore} puanla kazandı`);

} else if (mikeScore>johnScore && mikeScore>maryScore){
    console.log(`Mike'ın takımı ${mikeScore} puanla kazandı`);

} else if (maryScore>johnScore && maryScore>mikeScore){
    console.log(`Mary'nin takımı ${maryScore} puanla kazandı`);

} else {
    console.log(`Maçlar berabere bitti`)

}