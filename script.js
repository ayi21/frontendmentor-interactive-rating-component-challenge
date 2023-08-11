function displayRating() {
    const rating = document.getElementsByName('rate');

    for(i = 0; i<rating.length; i++){
        if(rating[i].checked){
            // const pNodeRating = document.createElement('p');
            // const pRating = document.createTextNode("You selected" + rating[i] + "out of 5");
            const x = document.getElementById('answer');
            const y = document.createTextNode(rating[i].value);
            x.appendChild(y);

            const pThankYouBox = document.querySelector('#thankyou-container');
            const pRatingBox = document.querySelector('#main');

            pThankYouBox.style.display = 'block';
            pRatingBox.style.display = 'none';

            // pNodeRating.setAttribute('class', 'the-rating');
            // pNodeRating.appendChild(pRating);
            
            // document.getElementById('thankyou-img').appendchild(pNodeRating); 
            
        }
    }
}