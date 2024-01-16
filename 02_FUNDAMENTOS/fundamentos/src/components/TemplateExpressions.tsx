const TemplateExpressions = () => {
    const name = "Alex";
    const data = {
        job: "programer"
    }
    
    return (
        <div>
            <h1>Olá {name}! Tudo bem?</h1>
            <h2>E vc é um {data.job}</h2>
        </div>
    )
}

export default TemplateExpressions;