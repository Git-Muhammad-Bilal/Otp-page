import React from 'react'

export default function Fieleds({ fields, setOptFields, otpFields }) {

    const fillOtpFileds = (value, inpInd) => {
        setOptFields((pre) => {
            pre.map((fild) => {
                if (fild.ind === inpInd) {
                    fild.val = value === '' ? fild.val : value.slice(value.length - 1)
                }
                if (fild.ind === inpInd + 1) {
                    fild.current = !value ? '' : true
                    return fild
                }

                return fild
            })
            return [...pre]
        })
    }

    return (
        <>
            <input
                key={fields?.ind}
                type='text'
                value={fields?.val}
                ref={fields?.ref}
                disabled={!fields?.current}
                onChange={({ target: { value } }) => {
                    (Number(value)) &&
                        fillOtpFileds(value, fields?.ind)
                }}
                onKeyDown={(e) => {
                    if (e.key === 'Backspace' || e.key === "Delete") {
                        setOptFields((pre) => {
                            pre.map((fld) => {
                                if (fld.ind === fields.ind) {
                                    fld.val = '';
                                    fld.current = fields.ind === 0;
                                    fld.ind !== 0 && otpFields[fields.ind - 1].ref.current.focus();
                                   return fld;
                                }
                                return fld;
                            })
                          return [...pre]
                        })

                    }
                }}
            />
        </>
    )
}
