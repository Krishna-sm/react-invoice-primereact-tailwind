import moment from 'moment';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react'
import Barcode from 'react-barcode';
import QRCode from 'react-qr-code';
import { Margin, Resolution, usePDF } from 'react-to-pdf';

const Model = ({ isShow, setIsShow }:any) => {

            const { targetRef,toPDF } = usePDF({method:'open',resolution:Resolution.HIGH,page:{format:'A4'}});

  return (
    <>
    
          <Dialog header="Invoice" visible={isShow} style={{ width: '50vw' }} onHide={() => { if (!isShow) return; setIsShow(false); }} draggable={false} >
              <div ref={targetRef} className="m-0 px-5">

                    <div className="flex items-start gap-x-10 py-5  justify-between ">
                        <div className="w-1/2 flex  flex-col gap-y-2">
                                            <h1 className="font-semibold text-xl">Krishna Harish</h1>
                                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <p className='font-semibold'>Date: {moment(new Date()).format("lll")} </p>
                        </div>
                      <div className="w-1/2">
                          <Barcode displayValue={false}  width={1} height={50} value="http://github.com/kciter" />
                          <h1 className='font-semibold'>Suppiler : Admin </h1>
                      </div>
                    </div>


                    <div className="items py-2">
                        <table className="border w-full">
                            <thead className='border'>
                                        <tr>
                                  <th className='border py-2'>ID</th>
                                  <th className='border py-2'>Item</th>
                                  <th className='border py-2'>Price</th>
                                        </tr>
                            </thead>

                            <tbody>
                                {Array(5).fill({}).map((c,i)=>{
                                    return <tr key={i} className='py-2'>
                                        <td className='border text-center py-2'>{i+1}</td>
                                        <td className='border text-center py-2'>Pizza</td>
                                        <td className='border text-center py-2'>&#8377; 725/- </td>
                                    </tr>
                                })}
                            </tbody>

                        </table>
                    </div>

                    {/* <div className="mb-3  w-full flex py-5  text-end  flex-col justify-end ">
                      <QRCode className='w-[20%]  ml-auto  py-0' style={{ height: 'auto' }} value='dasd ' />
                      <h1 className='text-end px-5'>Scan And Pay</h1>
                    </div>               */}


              </div>
              <footer>
                        <button className='px-6 py-2 outline-none bg-red-500 rounded-md text-white' onClick={()=>toPDF({page:{
                            margin: Margin.SMALL,
                        }})} >Generate</button>
              </footer>
          </Dialog>
    </>
  )
}

export default Model