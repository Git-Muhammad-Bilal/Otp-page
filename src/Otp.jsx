import React, { useEffect, useRef, useState } from 'react'
import './Otp.css'
import Fieleds from './Fieleds'
import HomePage from './HomePage'


export default function otp() {
  const [otpFields, setOptFields] = useState([
    {
      val: '',
      ref: useRef(),
      ind: 0,
      current: true

    },
    {
      val: '',
      ref: useRef(),
      ind: 1,
      current: false

    },
    {
      val: '',
      ref: useRef(),
      ind: 2,
      current: false
    },
    {
      val: '',
      ref: useRef(),
      ind: 3,
      current: false
    }


  ])

  const [otpVerify, setOptVeryfiy] = useState(false)
  console.log(otpFields, 'optfields');
  useEffect(() => {

    otpFields.find((c, i) => {
      let prevInd = i == 0 ? 0 : i - 1
      if (otpFields[prevInd]?.val) {
        otpFields[i + 1]?.ref.current.focus()
      }
    })

  }, [otpFields])

  const saveOtp = () => {

    setOptVeryfiy(true)
    // setOptVeryfiy('error')
    setOptFields((pre) => {
      pre.map(fld => {
        if (fld?.ind === 0) {
          fld.val = '';
          fld.current = true;

          return fld
        } else {
          fld.val = '';
          fld.current = false;
          return fld
        }
      })
      return [...pre]
    })


  }

  return (
    <div className='otp-container'>
      {
        otpVerify ? <HomePage /> :
          <>
            <div className='heading'><h2>Your OTP </h2></div>

            <div className="inp-fields">

              {
                otpFields.map((f, i) => {

                  return <Fieleds
                    fields={f}
                    setOptFields={setOptFields}
                    otpFields={otpFields}
                    index={i}
                  />
                })

              }

            </div>

            <div className='submit-btn'>
              <button
                onClick={saveOtp}
                disabled={!otpFields[otpFields.length - 1]?.val && true}
                style={{ color: ` ${!otpFields[otpFields.length - 1].val ? 'rgb(167, 167, 167)' : 'white'}` }}
              >SUBMIT</button>

            </div>
          </>
      }
    </div>

  )
}














































// import React, { useEffect, useRef, useState } from 'react'
// import './Otp.css'


// export default function otp() {
//   const [otpFields, setOptFields] = useState([
//     {
//       val: '',
//       ref: useRef(),
//       ind: 0,
//       current: true

//     },
//     {
//       val: '',
//       ref: useRef(),
//       ind: 1,
//       current: false

//     },
//     {
//       val: '',
//       ref: useRef(),
//       ind: 2,
//       current: false
//     },
//     {
//       val: '',
//       ref: useRef(),
//       ind: 3,
//       current: false
//     }


//   ])

//   const [otpVerify, setOptVeryfiy] = useState('')

//   useEffect(() => {
//     otpFields.find((c, i) => {
//       if (c.current) {
//         otpFields[i]?.ref.current.focus()
//         return
//       }
//     })

//   }, [otpFields])

//   const fillOtpFileds = (value, inpInd) => {
//     value && otpVerify && setOptVeryfiy(false)
//     setOptFields((pre) => {

//       pre.map((fild) => {

//         if (fild.ind === inpInd) {
//           fild.val = value===''?fild.val: value.slice(value.length - 1)
//         }
//         if (fild.ind === inpInd + 1) {
//           fild.current = !value ? '' : true
//         }

//         return fild
//       })
//       return [...pre]
//     })

//   }


//   let inputs = otpFields.map((otpf, inpInd) => {
//     return (
//       <input
//         key={inpInd}
//         type='text'
//         value={otpf.val}
//         ref={otpf.ref}
//         disabled={!otpf.current}
//         onChange={({ target: { value } }) => {
//          (Number(value) || value === '' )&& fillOtpFileds(value, inpInd)
//         }}
//         onKeyDown={(e) => {
//           if (e.key === 'Backspace' ) {

//             setOptFields((pre) => {
//               pre.map((fld, i) => {
//                 if (fld.ind === inpInd) {
//                   fld.val = '';
//                   fld.current =inpInd === 0?true: false;
//                   otpFields[i - 1]?.ref.current.focus()

//                 }
//                 return fld
//               })
//               return pre;
//             })
//             return
//           }
//         }}
//       />
//     )
//   })

//   const saveOtp = () => {

//     setOptVeryfiy(true)
//     // setOptVeryfiy('error')
//     setOptFields((pre) => {
//       pre.map(fld => {
//         if (fld?.ind === 0) {
//           fld.val = '';
//           fld.current = true;

//           return fld
//         } else {
//           fld.val = '';
//           fld.current = false;
//           return fld
//         }
//       })
//       return [...pre]
//     })


//   }

//   return (
//     <div className='otp-container'>

//       <div className='heading'><h2>Your OTP </h2></div>

//       <div className="inp-fields">
//         {inputs}
//         <div className="verify">
//           <div>
//             {
//               otpVerify === true ? <p style={{ color: 'green' }}>Successful</p> :
//                 otpVerify === 'error' && <p style={{ color: 'red' }}> failed! try agin</p>
//             }

//           </div>
//         </div>
//       </div>

//       <div className='submit-btn'>
//         <button
//           onClick={saveOtp}
//           disabled={!otpFields[otpFields.length - 1]?.val && true}
//           style={{ color: ` ${!otpFields[otpFields.length - 1].val ? 'rgb(167, 167, 167)' : 'white'}` }}
//         >SUBMIT</button>

//       </div>
//     </div>

//   )
// }