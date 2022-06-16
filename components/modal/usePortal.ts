import { useEffect, useRef, useState } from "react";

/**
 * Creates DOM element to be used as React root.
 * @returns HTMLElement
 */
function createRootElement(id: string): HTMLElement {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}
  
/**
 * Appends element as last child of body.
 * @param rootElem 
 */
function addRootElement(rootElem:HTMLElement) {
  document.body.insertBefore(
    rootElem,
    document.body.lastElementChild!.nextElementSibling,
  );
}
  
/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns HTMLElement The DOM node to use as the Portal target.
 * it has been created by https://www.jayfreestone.com/writing/react-portals-with-hooks/ and complement by https://salaxer.com
 */
function usePortal(id:string): HTMLElement | undefined {
  const [divElement, setDivElement] = useState<HTMLElement>() 
  
  useEffect(function setupElement() {

    // Look for existing target dom element to append to
    const existingParent = document.querySelector<HTMLElement>(`#${id}`);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem);
    }

    // If there are more that one child, delete the first.
    if(parentElem.children.length>0){
      parentElem.removeChild(parentElem.children[0]);
    }

    setDivElement(parentElem);
  }, [id]);

  return divElement
}

export default usePortal;