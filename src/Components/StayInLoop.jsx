import './CSS/StayInLoop.css'

const StayInLoop = () => {
    return (
        <section className="stay-loop">
            <div className="stay-loop-content">
                <h2 className='stay'>Stay in the Loop</h2>
                <p className='stay'>Get the latest plant updates, offers and gardening tips.</p>
            </div>
            <form className="stay-loop-form">
                <input type="email" placeholder="Your Email Address" aria-label="Your Email Address" />
                <button type="submit">Subscribe</button>
            </form>
        </section>
    )
}

export default StayInLoop