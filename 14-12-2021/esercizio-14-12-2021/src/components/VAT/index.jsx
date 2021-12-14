const Vat = (props) =>
{
    const value = props.value;
    const tax = props.tax;

    return (
        <div>IVA: €{ ((value * (tax+100))/100) }</div>
    ); 
}

export default Vat;
