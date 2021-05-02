import Thumbnail from './Thumbnail'

export default function results({requests}) {
    return (
        <div>
            {
                requests.map((el) =>(
                    <Thumbnail key={el.id} result={el} />
                ))
            }
        </div>
    )
}
