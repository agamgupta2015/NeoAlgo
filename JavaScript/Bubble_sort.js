/* Bubble sorting algo which is perfromed 
in java scrpit */

function Sort(a){
	
for(let i = 0; i < a.length; i++){
	
for(let j = 0; j < a.length-i-1; j++){
    
	if(a[j] > a[j+1]){
		let temp = a[j]
	    a[j] = a[j+1]
	    a[j+1] = temp  //swapping is done
	}
}
}
console.log(a);
}

let a = [5, 4, 1, 7, 2];

Sort(a);
/*
Input :- 5 4 1 7 2 
Output :- 1 2 4 5 7
*/

/*
Time Complexicty :- O(n)
Space Complexicty :- O(n)
*/
