// given rating (int), create the 5 dots for the days rating
const DayRating = (rating) => {
    let dots = [];
    // determine color of dots
    let dotColor = rating > 3 ? 'good' : 'bad';
    // if rating == 3, set to 'ok'
    dotColor = rating == 3 ? 'ok' : dotColor;
    
    // loop thru full dots
    for (let i = 0; i < rating; i++) {
        dots.push(<div className={`dayRating__dot--${dotColor}`}></div>)
    }
    // add empty dots
    for (let i = 0; i < (5-rating); i++) {
        dots.push(<div className='dayRating__dot'></div>)
    }
    return dots;
}

const GratCard = (props) => {
    return (
        <div className='gratCard'>
            <h2 className='gratCard__message'>{props.message}</h2>
            <div className='gratCard__bottom'>
                <div className='gratCard__dayRating'>
                    {DayRating(props.dayRating)}
                </div>
                <h3>{props.date}</h3>
            </div>
        </div>
    )
}

export default GratCard;