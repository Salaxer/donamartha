
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, XIcon } from '@heroicons/react/solid';
import { Ripple } from '@Components'
import styles from "./Dropdown.module.css";
import { motion, useAnimation, Variants } from 'framer-motion';
import { HTMLNativeProps } from 'components/native/types';

const variants:Variants = {
  init: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  }
}

interface PropsA {
  options: string[],
  selected: string,
  /**
   * Retorna el valor seleccionado
   */
  onChange: (event: { target: { value: string} }) => void;
}

interface CodeOptions {
  [key: string]: (e:KeyboardEvent) => void;
}

const DropDown:FC<HTMLNativeProps<'select', PropsA>> = ({selected, onChange, options, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [focus, setFocus] = useState(0)
  const animationControl = useAnimation();
  const refMenu = useRef<HTMLLabelElement>(null);

  useEffect(()=>{
    const codeOptions: CodeOptions = {
      ArrowUp: (e) =>{ 
        e.preventDefault()
        setFocus((current) =>{
          return current == 0 ? options.length - 1 : current - 1;
        })
      },
      ArrowDown: (e) =>{ 
        e.preventDefault()
        setFocus((current) =>{
          return current == options.length - 1 ? 0 : current + 1;
        })
      },
      Enter: (e) =>{ 
        e.preventDefault()
        handleChange(options[focus + 1]);
        handleOpen();
      },
    }
    const keydown = (event:KeyboardEvent)=>{
      const funcEvent = codeOptions[event.code] || handleOpen;
      funcEvent(event);
    }

    const outsideClick = (e:MouseEvent) =>{
      function assertIsNode(e: EventTarget | null): asserts e is Node {
        if (!e || !("nodeType" in e)) {
            throw new Error(`Node expected`);
          }
      }
      assertIsNode(e.target);
      // Do nothing if clicking ref's element or descendent elements
      if (!refMenu.current || refMenu.current.contains(e.target)) {
        return;
      }
      handleOpen();
    }

    if (open) {
      animationControl.start("animate");
      document.addEventListener("keydown", keydown, { passive: false });
      document.addEventListener("click", outsideClick)
    }else{
      animationControl.start("init");
      document.removeEventListener("keydown", keydown, false);
      document.removeEventListener("click", outsideClick)
    }
    return () =>{
      document.removeEventListener("keydown", keydown, false);
      document.removeEventListener("click", outsideClick)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[open])

  const handleChange = (value:string) => {
    selected != value ? onChange({ target: { value }}) : null
  };
  const handleOpen = () => setOpen( currentOpen =>{
    return !currentOpen;
  });

  return (
    <label ref={refMenu} className={styles.container}>
      <button onClick={handleOpen} className={styles.dropdown}>
        <Ripple color={'basic'}/> 
        <p className='flex justify-between mt-1 mb-1 mr-4 ml-4 '>{selected} {open ? <ChevronUpIcon width={"20px"} /> : <ChevronDownIcon width={"20px"} /> }</p>
      </button>
      <motion.ul animate={animationControl} variants={variants} initial="init" className={styles.menu}>
        {options.map((item, index)=>{
          return <li onMouseEnter={()=>setFocus(index)} key={index}
          className={`${styles.option} ${focus === index && styles.optionHover}`}
          onClick={()=>handleChange(item)}>{item}</li>
        })}
      </motion.ul>
    </label>
  )
}

export default DropDown;