import usePortal from "components/modal/usePortal";
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PropsModal{
    children: ReactNode,
    id: string,
    className?: string,
}
/**
 * @description create a portal with new div and personal id in the end of the element body
 * you can add styles on className to create your favorite
 * @requires usePortal with this we sure only create a unique id.
 * @example 
 * const todoModal = () =>{
 *  const [modal, setModal] = useState<boolean>(false);
 *  return (
 *      <div>
 *          <button onClick={setModal(true)}>Open modal!</button>
 *          {modal &&
 *          <Modal className='myModalClass'>
 *              <button onClick={setModal(false)}>Close modal!</button>
 *          <Modal>}
 *      </div>
 *  )
 * }
 * @param className to set customs styles on modal
 * @param id to set a new modal or add new modal in the id existent
 */

const Modal: React.FC<PropsModal> = ({ children, id, className}) =>{
    const target = usePortal(id);
    const [myReturn, setMyReturn] = useState<any>(undefined);
    useEffect(()=>{
        document.querySelector('html')!.style.overflowY = 'hidden';
        if (target !== undefined) {
            if (className) {
                className.split(' ').forEach((c)=>{
                    if (c !== '') {
                        target.classList.add(c);
                    }
                })
            }
            setMyReturn(createPortal(children, target))
        }
        return ()=>{
            target?.remove();
            document.querySelector('html')!.removeAttribute('style');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[target])
    return myReturn
}

export default Modal;