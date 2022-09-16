export default function TechnoList(props) {
    const { technos } = props;                  // Afin de faire passer technos en props et le remonter jusqu'au parent
    return (
        <div className="techno-list">
            <h1>All Technos</h1>
<div>
    {
        technos.map(techno => (
            <div key={techno.technoname}>
                <h2>{techno.technoname}</h2>
                <h3>Category</h3>
                <p>{techno.technocategory}</p>
                <h3>Description</h3>
                <p>{techno.technodescription}</p>
            </div>
        ))
    }
</div>
        </div>
    )
}