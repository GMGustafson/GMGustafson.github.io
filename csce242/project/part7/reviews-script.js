
const getReviews = async() => {
    const url = "https://gmgustafson.github.io/csce242/project/part7/reviews.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showReviews = async() => {
    const reviews = await getReviews();
    
    reviews.forEach((review) => {
        document.getElementById("reviews-section").append(getReviewSection(review));
    });
};

const getReviewSection = (review) => {
    const section = document.createElement("company");

    const h3 = document.createElement("h3");
    h3.innerHTML = review.companyName;  
    section.append(h3);

    const reviewP = document.createElement("p");
    reviewP.innerHTML = review.review;  
    section.append(reviewP);

    const reviewerP = document.createElement("p");
    reviewerP.innerHTML = `Reviewed by: ${review.reviewersName} on ${review.date}`;
    section.append(reviewerP);

    const img = document.createElement("img");
    img.src = review.image;  
    img.alt = review.companyName;
    section.append(img);

    return section;
}

// Call showReviews to display the reviews on page load
showReviews();
