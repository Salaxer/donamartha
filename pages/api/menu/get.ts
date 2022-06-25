// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { query, getFirestore, collection, where, getDocs } from "firebase/firestore";  
import { getApp } from 'firebase/app';

// Interfaces
import { Product } from '@MyTypes/menu';


// resources for api
import initFirebase from '@ServerAPI/firebase.init';
import { noData, serverError } from '@ServerAPI/api/errors';
import { dataSuccess } from '@ServerAPI/api/success';
import { DataDocsResponse } from '@MyTypes/api';

initFirebase();
const db = getFirestore(getApp());
const menuRef = collection(db, "Menu");

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataDocsResponse | Error>) {
  
  if (req.method !== "GET") return res.status(500).json({name: "Metodo no soportado", message: ""});
  if (!req.query) return res.status(500).json(noData('peticion', false));
  if (!req.query.category) return res.status(500).json(noData('category', true));

  const q = query(menuRef, where("category", "==", req.query.category));

  try {
    let menu: Product[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((item)=>{
      menu.push({...item.data() as Product, id: item.id})
    })
    res.status(200).json(dataSuccess<Product[]>(menu, querySnapshot));
  } catch (e) {
    res.status(500).json(serverError(e));
  }
}