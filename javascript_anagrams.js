function anagram_checker(st1, st2)
{
	
    var array = [];
	array[0]=st1;
	array[1]=st2;										//input array
    var output =[];										//output array
	for (var i=0; i<array.length; i++)
	{
		st=array[i];
		var alpha=[];
		for (let k=0; k<st.length; k++)						//spliting words into chracters
		{
			alpha[k]=st.charAt(k);
		}
		for(var j=0; j<alpha.length; j++)	
		{
			for(var a=0; a<(alpha.length)-j-1; a++)			//sorting characters of a word
			{
				if(alpha[a]>alpha[a+1])
				{
					let s=alpha[a];
					alpha[a]=alpha[a+1];
					alpha[a+1]=s;
				}
					
			}
		}
		var word="";
		for(var b=0; b<alpha.length; b++)					// characters concatination
		{
			word=word+alpha[b];
		}
		output[i]=word;
	}
	for(var n=0; n<output.length;n=n+2)						//compare words
    {
        if(output[n]===output[n+1])
        {
            console.log(array[n]+' and '+array[n+1]+' are Anagrams');
        }
        else
        {
            console.log(array[n]+' and '+array[n+1]+' are not anagrams');
        }
                
    }
}

anagram_checker('cellar', 'recall');
anagram_checker('arm', 'elbow');
