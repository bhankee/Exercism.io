var DnaTranscriber = function() {};
var dnaToRna = {
	G: 'C',
	C: 'G',
	T: 'A',
	A: 'U'
};

DnaTranscriber.prototype.toRna = function(dna) {
	dna = dna.split('');
	return dna.map(dnaSwitch).join('');
};
function dnaSwitch(letters) {
	return dnaToRna[letters];
}

module.exports = DnaTranscriber;
