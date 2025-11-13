export default function StarRating({ average_rating }) {

    return (
        <div className="vote text-warning">
            {'★'.repeat(average_rating)}{'☆'.repeat(5 - average_rating)}
        </div>
    )
}