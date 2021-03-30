import GratCard from "../atoms/GratCard";
import Masonry from 'react-masonry-css';
const HomePage = () => {
    const GratList = [
        {
            message: 'grateful for the view on my porch',
            dayRating: 5,
            date: 'Today'
        },
        {
            message: 'grateful for my girlfriend',
            dayRating: 4,
            date: 'Yesterday'
        },
        {
            message: 'grateful for my dad',
            dayRating: 3,
            date: '2 days ago'
        },
        {
            message: 'grateful that I work for such a good company',
            dayRating: 2,
            date: '3 days ago'
        },
        {
            message: 'grateful for my family',
            dayRating: 5,
            date: 'March 26, 2021'
        },
        {
            message: 'Duis aliquip duis culpa esse ex eiusmod do nulla do esse. Incididunt consequat aliquip eiusmod sint sit mollit cupidatat exercitation id ex. Cupidatat nostrud anim magna eiusmod consequat exercitation. Minim laboris officia magna enim ipsum dolor aliquip tempor duis officia mollit dolore eu. Eu velit commodo commodo fugiat elit sunt exercitation aliqua elit commodo reprehenderit sint. Do consectetur exercitation consequat laborum aliqua qui officia nisi sunt exercitation officia officia. Lorem Lorem veniam est sunt aliquip ipsum deserunt dolor.',
            dayRating: 5,
            date: 'March 26, 2021'
        },
        {
            message: 'grateful for my dad',
            dayRating: 1,
            date: '2 days ago'
        },
        {
            message: 'grateful for my dad',
            dayRating: 1,
            date: '2 days ago'
        },
        {
            message: 'grateful for my dad',
            dayRating: 1,
            date: '2 days ago'
        },
        {
            message: 'grateful for my dad',
            dayRating: 1,
            date: '2 days ago'
        },
        {
            message: 'grateful for my dad',
            dayRating: 1,
            date: '2 days ago'
        },
        {
            message: 'grateful for my dad',
            dayRating: 1,
            date: '2 days ago'
        },
        {
            message: 'grateful for my dad',
            dayRating: 1,
            date: '2 days ago'
        },
        {
            message: 'LAST ITEM',
            dayRating: 1,
            date: '2 days ago'
        },
    ]

    const breakpointColumnsObj = {
        default: 2,
        500: 1
      };

    return (
        // <div className='homepage'>
        //     <h1>Here's what you've been grateful for <span className='highlight' id='timePeriodSelector'>this week.</span></h1>
        //     <div className='gratList'>
        //         {GratList.map(grat => <GratCard {...grat} />)}
        //     </div>
        // </div>
        <div className='homepage'>
            <h1>Here's what you've been grateful for <span className='highlight' id='timePeriodSelector'>this week.</span></h1>
            <Masonry
                className="gratList"
                columnClassName="gratList__column"
                breakpointCols={breakpointColumnsObj}
                >
                {GratList.map(grat => <GratCard {...grat} />)}
            </Masonry>
        </div>
    )
}

export default HomePage;