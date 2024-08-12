




export default function TableDetails({  heading, para, btn} ) {
return (
<>
<div className="d-flex justify-content-between align-items-center mx-3 mt-4">

    <div className="text">
        <h4>    {heading}   </h4>
        <p>     {para}      </p>
    </div>

    <div>
        {btn ?   <button type="button" className="btn btn-success">      {btn}      </button>   :    ""   }
    </div>

</div>
</>
);
}
