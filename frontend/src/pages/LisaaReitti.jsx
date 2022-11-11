// tähän lisätty reittityypit

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import { luoReitti } from '../features/reitit/reittiSlice'
import Spinner from '../components/Spinner'



function LisaaReitti() {
  const [formData, setFormData] = useState({
    nimi: '',
    pituus: '',
    kuvaus: '',
    melonta: false, 
    pyoraily: false, 
    vaellus: false,
  })

  const { nimi, pituus, kuvaus, melonta, pyoraily, vaellus} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message} = useSelector
  (
    (state) => state.auth
  )

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])


  const isChecked = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(melonta, pyoraily, vaellus)
    const reittiData = {
      nimi,
      pituus,
      kuvaus,
      melonta,
      pyoraily,
      vaellus,
    }
    dispatch(luoReitti(reittiData))    
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <fieldset>
      <section className="heading">
        <br></br>
        <p>Lisää reitti</p>
      </section>
        <br></br>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input 
                type='text' 
                className='form-control' 
                id='nimi' 
                name='nimi' 
                value={nimi} 
                placeholder='Anna reitille nimi:' 
                onChange={onChange} 
              /> 
            </div>
            <div className="form-group">
              <input 
                type='number' 
                className='form-control' 
                id='pituus' 
                name='pituus' 
                value={pituus} 
                placeholder='Anna reitin pituus kilometreinä:' 
                onChange={onChange} 
              /> 
            </div>
            <div className="form-group">
              <input 
                type='text' 
                className='form-control' 
                id='kuvaus' 
                name='kuvaus' 
                value={kuvaus} 
                placeholder='Kuvaa reittiä:' 
                onChange={onChange} 
              /> 
            </div>
            <p>Valitse mihin toimintaan reitti soveltuu:</p>
            <div>
              {/* <input type="checkbox" id="melonta" name="melonta" value="melonta"/> */}
              <input type="checkbox" id="melonta" name="melonta" value={melonta} onChange={onChange}></input>
              <label htmlFor="melonta"> melontaan</label><br></br>
              <input type="checkbox" id="pyoraily" name="pyoraily" value={pyoraily} onChange={onChange}></input>
              <label htmlFor="pyoraily"> pyöräilyyn</label><br></br>
              <input type="checkbox" id="vaellus" name="vaellus" value={vaellus} onChange={onChange}></input>
              <label htmlFor="vaellus"> vaellukseen</label><br></br><br></br>
            </div>
            <div className="form-group">
              <button 
                type='submit' 
                className='btn btn-block'>
                  Lisää reitti
              </button>  
            </div>
          </form>
        </section>
      </fieldset>
    </>
  )
}

export default LisaaReitti


// jotain BUTTONEITA: KATO Ernon koodi routereista
// <button onClick={() => navigate("/secret")}>To Secret Page</button>


// // tämä toimii ilman reittityyppejä
// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { FaUser } from 'react-icons/fa'
// import { register, reset } from '../features/auth/authSlice'
// import { luoReitti } from '../features/reitit/reittiSlice'
// import Spinner from '../components/Spinner'



// function LisaaReitti() {
//   const [formData, setFormData] = useState({
//     nimi: '',
//     pituus: null  ,
//     kuvaus: '',
//   })

//   const { nimi, pituus, kuvaus } = formData

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const { user, isLoading, isError, isSuccess, message} = useSelector
//   (
//     (state) => state.auth
//   )

//   useEffect(() => {
//     if(isError) {
//       toast.error(message)
//     }

//     if(isSuccess || user){
//       navigate('/')
//     }

//     dispatch(reset())
//   }, [user, isError, isSuccess, message, navigate, dispatch])


//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()
//     const reittiData = {
//       nimi,
//       pituus,
//       kuvaus
//     }
//     dispatch(luoReitti(reittiData))    
//   }

//   if(isLoading) {
//     return <Spinner />
//   }

//   return (
//     <>
//       <section className="heading">
//         <p>Lisää reitti</p>
//       </section>
//       <fieldset>
//         <br></br>
//         <section className="form">
//           <form onSubmit={onSubmit}>
//             <div className="form-group">
//               <input 
//                 type='text' 
//                 className='form-control' 
//                 id='nimi' 
//                 name='nimi' 
//                 value={nimi} 
//                 placeholder='Anna reitille nimi:' 
//                 onChange={onChange} 
//               /> 
//             </div>
//             <div className="form-group">
//               <input 
//                 type='number' 
//                 className='form-control' 
//                 id='pituus' 
//                 name='pituus' 
//                 value={pituus} 
//                 placeholder='Anna reitin pituus kilometreinä:' 
//                 onChange={onChange} 
//               /> 
//             </div>
//             <div className="form-group">
//               <input 
//                 type='text' 
//                 className='form-control' 
//                 id='kuvaus' 
//                 name='kuvaus' 
//                 value={kuvaus} 
//                 placeholder='Kuvaa reittiä:' 
//                 onChange={onChange} 
//               /> 
//             </div>
//             {/* <div className="form-group">
//               <input 
//                 type='password2' 
//                 className='form-control' 
//                 id='password2' 
//                 name='password2' 
//                 value={password2} 
//                 placeholder='Toista salasana' 
//                 onChange={onChange} 
//               />  
//             </div> */}
//             <div className="form-group">
//               <button 
//                 type='submit' 
//                 className='btn btn-block'>
//                   Lisää reitti
//               </button>  
//             </div>
//           </form>
//         </section>
//         <p>Valitse mihin toimintaan reitti soveltuu:</p>
//         <form>
//           <input type="checkbox" id="melonta" name="melonta" value="melonta"/>
//           <label for="melonta"> melontaan</label><br></br>
//           <input type="checkbox" id="pyoraily" name="pyoraily" value="pyoraily"></input>
//           <label for="pyoraily"> pyöräilyyn</label><br></br>
//           <input type="checkbox" id="vaellus" name="vaellus" value="vaellus"></input>
//           <label for="vaellus"> vaellukseen</label><br></br><br></br>
//           {/* <input type="submit" value="Submit"></input> */}
//         </form>

//       </fieldset>
//     </>
//   )
// }

// export default LisaaReitti

