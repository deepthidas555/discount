import React, { useState } from 'react'
import './Discount.css'
import { MDBCol } from 'mdb-react-ui-kit';
import TextField from '@mui/material/TextField';
import { MDBIcon } from 'mdb-react-ui-kit';

import { Button } from '@mui/material';

function Discount() {
const [amount,setAmount]=useState(0)
const [disc,setDisc]=useState(0)
const [total,setTotal]=useState(0)

const Discount = (e) => {
  const result= amount * disc / 100;
  const crt = amount - result
  setTotal(crt)
}

const reset = (e) => {

  setAmount(0)
  setDisc(0)
  setTotal(0)

}




  return (
    <>
    

<div className="d-flex align-items-start bg-body-tertiary mb-3" style={{ height: "100px" }}>
        <MDBCol>
            <img src="https://codexcoach.com/app/uploads/2023/02/1909.i506.015.P.m009.c20-1024x1024.jpg" alt="" height={700} />
        </MDBCol>
        <MDBCol>
        <div className="dis">
        <form>
            <h3>Discount Calculator</h3>
            <br />
        <TextField id="standard-basic" fullWidth  label="Amount" variant="standard" value={amount|| ""} onChange={(e)=>setAmount(e.target.value)}/>
        
        <TextField id="standard" fullWidth  label="Discount" variant="standard" value={disc|| ""} onChange={(e)=>setDisc(e.target.value)} />
 <br />
<div className='amo'>
<h4>Total Amount : &#8377; {total}</h4>
</div>
<div className='but'>
<Button variant='contained' className='me-1' onClick={e=>Discount(e)} style={{backgroundColor:'brown'}}>
        Discount
      </Button>
      <Button variant='contained' className='me-1' onClick={e=>reset(e)} style={{backgroundColor:'brown'}}>
        Reset
      </Button>
</div>

    </form>
    </div>
        </MDBCol>

      
</div>
    
    </>
  )
}

export default Discount